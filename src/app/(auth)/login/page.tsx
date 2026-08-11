import { Paper, Title, Text, Stack, Alert } from "@mantine/core";
import { LoginCustomerForm } from "@/components/auth/LoginCustomerForm";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { verified?: string };
}) {
  const justVerified = searchParams.verified === "1";

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
            Masuk ke Popo Laundry
          </Title>
          <Text size="sm" c="var(--color-text-secondary)">
            Masukkan email dan password kamu.
          </Text>
        </div>

        {justVerified && (
          <Alert style={{ backgroundColor: "var(--color-success-light)", color: "var(--color-success)" }}>
            Email berhasil diverifikasi. Silakan masuk.
          </Alert>
        )}

        <LoginCustomerForm />
      </Stack>
    </Paper>
  );
}