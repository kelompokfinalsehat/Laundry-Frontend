import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { Paper, Stack } from "@mantine/core";

export default function ResetPasswordPage() {
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
        <ResetPasswordForm />
      </Stack>
    </Paper>
  );
}