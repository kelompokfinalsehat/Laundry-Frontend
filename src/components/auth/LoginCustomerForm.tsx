"use client";

import {
  Alert,
  Anchor,
  Button,
  Divider,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { loginCustomerSchema } from "@/lib/validation/auth.validation";
import { ApiError } from "@/lib/api/axios";
import { useLoginCustomer, useLoginWithGoogle } from "@/hooks/auth.hooks";
import { getSafeRedirectPath } from "@/lib/safe-redirect";
import { GoogleSignInButton } from "./GoogleLoginButton";

type LoginCustomerFormProps = {
  intendedUrl?: string;
};


export function LoginCustomerForm({ intendedUrl }: LoginCustomerFormProps) {
  const router = useRouter();
  const { mutate, isPending, error } = useLoginCustomer();

  const form = useForm({
    initialValues: { email: "", password: "" },
    validate: schemaResolver(loginCustomerSchema),
  });

  const redirectAfterLogin = (homeUrl: string) => {
    const safePath = getSafeRedirectPath(intendedUrl ?? null);
    router.replace(safePath !== "/beranda" ? safePath : homeUrl);
  };

  const submit = form.onSubmit((values) => {
    mutate(values, {
      onSuccess: (data) => redirectAfterLogin(data.homeUrl),
    });
  });

  const { mutate: mutateGoogle, error: googleError } = useLoginWithGoogle();

  function handleGoogleIdToken(idToken: string) {
    mutateGoogle(
      { idToken },
      { onSuccess: (data) => redirectAfterLogin(data.homeUrl) },
    );
  }

  const errorMessage =
    error instanceof ApiError
      ? error.code === "INVALID_CREDENTIALS"
        ? "Email atau password salah."
        : error.code === "EMAIL_NOT_VERIFIED"
          ? "Email kamu belum diverifikasi."
          : error.message
      : null;

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

          <PasswordInput
            label="Password"
            placeholder="Masukkan password"
            {...form.getInputProps("password")}
          />

          <Anchor
            component={Link}
            href="/lupa-password"
            size="sm"
            ta="right"
            c="var(--color-primary-dark)"
          >
            Lupa password?
          </Anchor>

          <Button
            type="submit"
            loading={isPending}
            fullWidth
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Masuk
          </Button>
        </Stack>
      </form>

      <Divider label="atau" labelPosition="center" />

      <GoogleSignInButton onIdToken={handleGoogleIdToken} text="signin_with" />

      <Anchor
        component={Link}
        href="/register"
        ta="center"
        c="var(--color-primary-dark)"
      >
        Daftar sebagai customer
      </Anchor>
    </Stack>
  );
}