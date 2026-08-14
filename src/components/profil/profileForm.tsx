"use client";

import { useState } from "react";
import {
  Stack,
  TextInput,
  PasswordInput,
  Button,
  Alert,
  Divider,
  Text,
  Anchor,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";

import { updateProfileSchema } from "@/lib/validation/profile.validation";
import { ApiError } from "@/lib/api/axios";
import { useUpdateProfile } from "@/hooks/profile.hooks";
import { useAuthStore } from "@/stores/useAuthStore";

export function ProfileForm() {
  const { user } = useAuthStore();
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { mutate, isPending, error } = useUpdateProfile();

  const form = useForm({
    initialValues: {
      name: user?.name ?? "",
      phone: user?.phone ?? "",
      currentPassword: "",
      newPassword: "",
    },
    validate: schemaResolver(updateProfileSchema),
  });

  const submit = form.onSubmit((values) => {
    setSuccessMessage(null);
    mutate(values, {
      onSuccess: () => {
        setSuccessMessage("Profil berhasil diperbarui.");
        form.setFieldValue("currentPassword", "");
        form.setFieldValue("newPassword", "");
        setShowPasswordFields(false);
      },
    });
  });

  const errorMessage =
    error instanceof ApiError
      ? error.code === "CURRENT_PASSWORD_INVALID"
        ? "Password saat ini salah."
        : error.code === "GOOGLE_ACCOUNT_NO_PASSWORD"
          ? "Akun Google tidak memiliki password lokal."
          : error.message
      : null;

  return (
    <form onSubmit={submit}>
      <Stack gap="md">
        {successMessage && (
          <Alert
            style={{
              backgroundColor: "var(--color-success-light)",
              color: "var(--color-success)",
            }}
          >
            {successMessage}
          </Alert>
        )}
        {errorMessage && (
          <Alert
            color="red"
            style={{
              backgroundColor: "var(--color-error-light)",
              color: "var(--color-error)",
            }}
          >
            {errorMessage}
          </Alert>
        )}

        <TextInput
          label="Nama Lengkap"
          required
          placeholder={user?.name}

          {...form.getInputProps("name")}
        />
        <TextInput
          label="Nomor Telepon"
          placeholder={user?.phone|| "08xxxxxxxxxx"}
          {...form.getInputProps("phone")}
        />

        <Divider />

        {showPasswordFields ? (
          <Stack gap="md">
            <Text
              size="sm"
              fw={600}
              style={{ color: "var(--color-text-primary)" }}
            >
              Ganti Password
            </Text>
            <PasswordInput
              label="Password Saat Ini"
              {...form.getInputProps("currentPassword")}
            />
            <PasswordInput
              label="Password Baru"
              placeholder="Minimal 8 karakter"
              {...form.getInputProps("newPassword")}
            />
            <Anchor
              size="sm"
              c="var(--color-text-secondary)"
              onClick={() => {
                setShowPasswordFields(false);
                form.setFieldValue("currentPassword", "");
                form.setFieldValue("newPassword", "");
              }}
            >
              Batal ganti password
            </Anchor>
          </Stack>
        ) : (
          <Anchor
            size="sm"
            c="var(--color-primary)"
            onClick={() => setShowPasswordFields(true)}
          >
            Ganti password
          </Anchor>
        )}

        <Button
          type="submit"
          loading={isPending}
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Simpan Perubahan
        </Button>
      </Stack>
    </form>
  );
}
