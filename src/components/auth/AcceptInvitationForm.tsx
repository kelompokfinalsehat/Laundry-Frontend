"use client";

import {
  Alert,
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import { acceptInvitationSchema } from "@/lib/validation/auth.validation";
import { ApiError } from "@/lib/api/axios";
import { useAcceptEmployeeInvitation } from "@/hooks/auth.hooks";

export function AcceptInvitationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { mutate, isPending, isSuccess, data, error } =
    useAcceptEmployeeInvitation();

  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: schemaResolver(acceptInvitationSchema),
  });

  const submit = form.onSubmit((values) => {
    if (!token) return;

    mutate(
      {
        token,
        password: values.password
      },
    );
  });

  const apiError = error instanceof ApiError ? error : null;

  if (!token) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title order={3} style={{ color: "var(--color-error)" }}>
          Link tidak valid
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          Link undangan tidak valid atau tidak lengkap. Pastikan kamu membuka
          link persis seperti yang dikirim melalui email.
        </Text>

        <Anchor
          component={Link}
          href="/internal/login"
          c="var(--color-primary-dark)"
        >
          Kembali ke Login
        </Anchor>
      </Stack>
    );
  }

  if (isSuccess) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title
          order={3}
          style={{ color: "var(--color-success)" }}
        >
          Akun berhasil diaktifkan
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          {data?.message ??
            "Akun kamu berhasil diaktifkan. Silakan login menggunakan password yang baru dibuat."}
        </Text>

        <Button
          component={Link}
          href="/internal/login"
          fullWidth
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Kembali ke Login
        </Button>
      </Stack>
    );
  }

  return (
    <Stack gap="md">
      <div>
        <Title
          order={3}
          style={{ color: "var(--color-text-primary)" }}
        >
          Aktivasi Akun Internal
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          Buat password untuk mengaktifkan akun employee kamu.
        </Text>
      </div>

      {apiError && (
        <Alert
          color="red"
          style={{
            backgroundColor: "var(--color-error-light)",
            color: "var(--color-error)",
          }}
        >
          {apiError.message}
        </Alert>
      )}

      <form onSubmit={submit}>
        <Stack gap="md">
          <PasswordInput
            label="Password"
            placeholder="Minimal 8 karakter"
            {...form.getInputProps("password")}
          />

          <PasswordInput
            label="Konfirmasi Password"
            placeholder="Masukkan kembali password"
            {...form.getInputProps("confirmPassword")}
          />

          <Button
            type="submit"
            loading={isPending}
            fullWidth
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Aktifkan Akun
          </Button>
        </Stack>
      </form>

      <Anchor
        component={Link}
        href="/login"
        ta="center"
        c="var(--color-primary-dark)"
      >
        Kembali ke Login
      </Anchor>
    </Stack>
  );
}