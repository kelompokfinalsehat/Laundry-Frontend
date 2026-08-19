import { ForgotPasswordForm } from "@/components/authCustomer/ForgotPasswordForm";
import { Paper, Title, Text, Stack } from "@mantine/core";

export default function RegisterPage() {
  return (
    <Paper
      maw={420}
      mx="auto"
      mt={64}
      p={32}
      radius="md"
      withBorder
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <Stack gap="md">
        <div>
          <Title order={3} style={{ color: "var(--color-text-primary)" }}>
            Lupa Kata Sandi?
          </Title>
          <Text size="sm" c="var(--color-text-secondary)">
            Jangan khawatir! Masukkan email kamu di bawah untuk mengatur ulang
            kata sandi.
          </Text>
        </div>

        <ForgotPasswordForm />
      </Stack>
    </Paper>
  );
}
