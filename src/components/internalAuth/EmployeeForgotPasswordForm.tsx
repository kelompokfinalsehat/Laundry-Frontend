"use client";

import {
  Alert,
  Anchor,
  Button,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { schemaResolver, useForm } from "@mantine/form";
import Link from "next/link";

import { forgotPasswordSchema } from "@/lib/validation/auth.validation";
import { ApiError } from "@/lib/api/axios";
import { useForgotPasswordEmployee } from "@/hooks/authEmployee.hooks";

export function EmployeeForgotPasswordForm() {
  const { mutate, isPending, isSuccess, data, error } =
    useForgotPasswordEmployee();

  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: schemaResolver(forgotPasswordSchema),
  });

  const submit = form.onSubmit((values) => {
    mutate(values);
  });

  const apiError = error instanceof ApiError ? error : null;

  if (isSuccess) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title order={3}>Cek email kamu</Title>

        <Text size="sm" c="dimmed">
          {data?.message ??
            "Jika email terdaftar, link reset password telah dikirim."}
        </Text>

        <Anchor component={Link} href="/internal/login">
          Kembali ke Login Internal
        </Anchor>
      </Stack>
    );
  }

  return (
    <Stack gap="md">
      <div>
        <Title order={3}>Lupa Password?</Title>

        <Text size="sm" c="dimmed">
          Masukkan email akun internal kamu untuk menerima link reset password.
        </Text>
      </div>

      {apiError && <Alert color="red">{apiError.message}</Alert>}

      <form onSubmit={submit}>
        <Stack gap="md">
          <TextInput
            label="Email"
            placeholder="nama@email.com"
            {...form.getInputProps("email")}
          />

          <Button type="submit" loading={isPending} fullWidth>
            Kirim Link Reset
          </Button>
        </Stack>
      </form>

      <Anchor component={Link} href="/internal/login" ta="center">
        Kembali ke Login Internal
      </Anchor>
    </Stack>
  );
}
