"use client";

import {
  Alert,
  Anchor,
  Button,
  Divider,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  forgotPasswordSchema,
  registerCustomerSchema,
} from "@/lib/validation/auth.validation";
import { ApiError } from "@/lib/api/axios";
import {
  useForgotPasswordCustomer,
  useLoginWithGoogle,
} from "@/hooks/authCustomer.hooks";
import { GoogleSignInButton } from "./GoogleLoginButton";

export function ForgotPasswordForm() {
  const router = useRouter();

  const { mutate, isPending, isSuccess, data, error } =
    useForgotPasswordCustomer();

  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: schemaResolver(forgotPasswordSchema),
  });

  const submit = form.onSubmit((values) => {
    mutate(values);
  });

  const { mutate: mutateGoogle, error: googleError } = useLoginWithGoogle();

  function handleGoogleIdToken(idToken: string) {
    mutateGoogle(
      { idToken },
      { onSuccess: (result) => router.push(result.homeUrl) },
    );
  }

  const errorMessage =
    error instanceof ApiError
      ? error.code === "EMAIL_ALREADY_REGISTERED"
        ? "Email ini sudah terdaftar. Silakan login, atau gunakan email lain."
        : error.message
      : googleError instanceof ApiError
        ? googleError.message
        : null;

  if (isSuccess) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title order={3} style={{ color: "var(--color-primary)" }}>
          Cek email kamu
        </Title>
        <Text size="sm" c="var(--color-text-secondary)">
          <strong>{data.message}</strong>.
        </Text>
        <Anchor
          component={Link}
          href="/login"
          size="sm"
          c="var(--color-primary-dark)"
        >
          Kembali ke halaman login
        </Anchor>
      </Stack>
    );
  }

  return (
    <Stack gap="md">
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

      <form onSubmit={submit}>
        <Stack gap="md">
          <TextInput
            label="Email"
            placeholder="nama@email.com"
            {...form.getInputProps("email")}
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
            Kirim
          </Button>
        </Stack>
      </form>

      <Divider label="atau" labelPosition="center" />

      <GoogleSignInButton onIdToken={handleGoogleIdToken} text="signup_with" />

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
