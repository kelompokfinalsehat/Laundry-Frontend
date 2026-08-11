import { Paper, Title, Text, Stack } from "@mantine/core";
import { RegisterForm } from "@/components/auth/RegisterForm";

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
            Daftar Popo Laundry
          </Title>
          <Text size="sm" c="var(--color-text-secondary)">
            Masukkan email kamu, kami kirim link verifikasi.
          </Text>
        </div>

        <RegisterForm />
      </Stack>
    </Paper>
  );
}