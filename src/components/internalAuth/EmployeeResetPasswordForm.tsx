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
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { resetPasswordSchema } from "@/lib/validation/auth.validation";
import { ApiError } from "@/lib/api/axios";
import { useResetPasswordEmployee } from "@/hooks/authEmployee.hooks";

export function EmployeeResetPasswordForm() {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const { mutate, isPending, isSuccess, data, error } =
    useResetPasswordEmployee();

  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validate: schemaResolver(resetPasswordSchema),
  });

  const submit = form.onSubmit((values) => {
    if (!token) {
      return;
    }

    mutate({
      token,
      newPassword: values.password,
    });
  });

  const apiError = error instanceof ApiError ? error : null;

  /*
   * Token tidak ditemukan di URL
   */
  if (!token) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title order={3} style={{ color: "var(--color-error)" }}>
          Link tidak valid
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          Link reset password tidak valid atau tidak lengkap. Silakan minta link
          reset password baru.
        </Text>

        <Anchor
          component={Link}
          href="/internal/forgot-password"
          c="var(--color-primary-dark)"
        >
          Minta link reset password
        </Anchor>
      </Stack>
    );
  }

  /*
   * Password berhasil direset
   */
  if (isSuccess) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title order={3} style={{ color: "var(--color-primary)" }}>
          Password berhasil diubah
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          {data?.message ??
            "Password berhasil diperbarui. Silakan login dengan password baru."}
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
          style={{
            color: "var(--color-text-primary)",
          }}
        >
          Reset Password
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          Buat password baru untuk akun kamu.
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
            label="Password Baru"
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
            Reset Password
          </Button>
        </Stack>
      </form>

      <Anchor
        component={Link}
        href="/internal/login"
        ta="center"
        c="var(--color-primary-dark)"
      >
        Kembali ke Login
      </Anchor>
    </Stack>
  );
}
