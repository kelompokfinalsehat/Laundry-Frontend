"use client";

import { useState } from "react";
import {
  Stack,
  TextInput,
  Button,
  Text,
  Badge,
  Group,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useForm, schemaResolver } from "@mantine/form";

import { updateEmailSchema } from "@/lib/validation/profile.validation";
import { ApiError } from "@/lib/api/axios";
import { useRequestEmailChange } from "@/hooks/profile.hooks";
import { useAuthStore } from "@/stores/useAuthStore";

export function EmailChangeForm() {
  const { user } = useAuthStore();
  const [requestedEmail, setRequestedEmail] = useState<string | null>(null);

  const { mutate, isPending } = useRequestEmailChange();

  const form = useForm({
    initialValues: {
      newEmail: "",
    },
    validate: schemaResolver(updateEmailSchema),
  });

  const submit = form.onSubmit((values) => {
    mutate(values, {
      onSuccess: () => {
        setRequestedEmail(values.newEmail);
        form.reset();

        notifications.show({
          title: "Berhasil",
          message: `Link konfirmasi telah dikirim ke ${values.newEmail}.`,
          color: "green",
        });
      },

      onError: (error) => {
        const message =
          error instanceof ApiError
            ? error.code === "EMAIL_ALREADY_REGISTERED"
              ? "Email ini sudah dipakai akun lain."
              : error.code === "GOOGLE_ACCOUNT_EMAIL_LOCKED"
                ? "Email akun Google tidak dapat diganti dari sini."
                : error.message
            : "Gagal mengirim link konfirmasi email.";

        notifications.show({
          title: "Gagal",
          message,
          color: "red",
        });
      },
    });
  });

  return (
    <Stack gap="sm">
      <Group gap="xs">
        <Text size="sm" c="var(--color-text-secondary)">
          Email saat ini: <strong>{user?.email}</strong>
        </Text>

        <Badge
          size="sm"
          style={
            user?.isEmailVerified
              ? {
                  backgroundColor: "var(--color-success-light)",
                  color: "var(--color-success)",
                }
              : {
                  backgroundColor: "var(--color-error-light)",
                  color: "var(--color-error)",
                }
          }
        >
          {user?.isEmailVerified ? "Terverifikasi" : "Belum terverifikasi"}
        </Badge>
      </Group>

      {requestedEmail && (
        <Text
          size="sm"
          style={{
            backgroundColor: "var(--color-primary-light)",
            color: "var(--color-primary)",
            padding: "var(--mantine-spacing-sm)",
            borderRadius: "var(--mantine-radius-sm)",
          }}
        >
          Link konfirmasi sudah dikirim ke{" "}
          <strong>{requestedEmail}</strong>. Email saat ini tetap aktif sampai
          kamu konfirmasi lewat link tersebut.
        </Text>
      )}

      {user?.authProvider === "GOOGLE" ? (
        <Text size="sm" c="var(--color-text-secondary)">
          Email akun Google terkunci ke akun Google kamu, tidak bisa diganti
          dari sini.
        </Text>
      ) : (
        <form onSubmit={submit}>
          <Stack gap="sm">
            <TextInput
              label="Email Baru"
              placeholder="email-baru@email.com"
              {...form.getInputProps("newEmail")}
            />

            <Button
              type="submit"
              loading={isPending}
              variant="outline"
              style={{ alignSelf: "flex-start" }}
            >
              Kirim Link Konfirmasi
            </Button>
          </Stack>
        </form>
      )}
    </Stack>
  );
}