"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Paper,
  Title,
  Text,
  Stack,
  TextInput,
  PasswordInput,
  Button,
  Alert,
  Anchor,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import { useVerifyCustomerEmail } from "@/hooks/authCustomer.hooks";
import { ApiError } from "@/lib/api/axios";
import { emailVerificationSchema } from "@/lib/validation/auth.validation";

export default function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { mutate, isPending, error } = useVerifyCustomerEmail();

  const form = useForm({
    initialValues: {
      name: "",
      password: "",
    },
    validate: schemaResolver(emailVerificationSchema),
  });

  function handleSubmit(values: { name: string; password: string }) {
    if (!token) return;

    mutate(
      { token, ...values },
      {
        onSuccess: () => router.push("/login?verified=1"),
      },
    );
  }

  const apiError = error instanceof ApiError ? error : null;

  // Token nggak ada di URL sama sekali — link rusak/nggak lengkap.
  if (!token) {
    return (
      <Paper maw={420} mx="auto" mt={64} p={32} radius="md" withBorder>
        <Stack gap="md" ta="center" align="center">
          <Title order={3} style={{ color: "var(--color-error)" }}>
            Link tidak valid
          </Title>
          <Text size="sm" c="var(--color-text-secondary)">
            Link verifikasi ini tidak lengkap. Pastikan kamu membuka link persis
            seperti yang dikirim ke email.
          </Text>
          <Anchor component={Link} href="/register" c="var(--color-primary)">
            Kembali ke halaman daftar
          </Anchor>
        </Stack>
      </Paper>
    );
  }

  if (apiError?.code === "TOKEN_EXPIRED") {
    return (
      <Paper maw={420} mx="auto" mt={64} p={32} radius="md" withBorder>
        <Stack gap="md" ta="center" align="center">
          <Title order={3} style={{ color: "var(--color-error)" }}>
            Link sudah kedaluwarsa
          </Title>

          <Text size="sm" c="var(--color-text-secondary)">
            {apiError.message}
          </Text>

          <Button
            component={Link}
            href="/resend-verification"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Kirim ulang link verifikasi
          </Button>
        </Stack>
      </Paper>
    );
  }

  if (apiError?.code === "TOKEN_ALREADY_USED") {
    return (
      <Paper maw={420} mx="auto" mt={64} p={32} radius="md" withBorder>
        <Stack gap="md" ta="center" align="center">
          <Title order={3} style={{ color: "var(--color-error)" }}>
            Email sudah diverifikasi
          </Title>

          <Text size="sm" c="var(--color-text-secondary)">
            Link verifikasi ini sudah pernah digunakan. Silakan login
            menggunakan akun kamu.
          </Text>

          <Button
            component={Link}
            href="/login"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Kembali ke login
          </Button>
        </Stack>
      </Paper>
    );
  }
  return (
    <Paper maw={420} mx="auto" mt={64} p={32} radius="md" withBorder>
      <Stack gap="md">
        <div>
          <Title order={3} style={{ color: "var(--color-text-primary)" }}>
            Lengkapi akun kamu
          </Title>
          <Text size="sm" c="var(--color-text-secondary)">
            Isi nama dan buat password untuk menyelesaikan pendaftaran.
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

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="md">
            <TextInput
              label="Nama Lengkap"
              placeholder="Nama kamu"
              {...form.getInputProps("name")}
            />
            <PasswordInput
              label="Password"
              placeholder="Minimal 8 karakter"
              {...form.getInputProps("password")}
            />

            <Button
              type="submit"
              loading={isPending}
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-text-on-accent)",
              }}
            >
              Verifikasi & Buat Akun
            </Button>
          </Stack>
        </form>
      </Stack>
    </Paper>
  );
}
