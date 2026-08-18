import { Paper, Stack } from "@mantine/core";

import { EmployeeForgotPasswordForm } from "@/components/auth/EmployeeForgotPasswordForm";

export default function EmployeeForgotPasswordPage() {
  return (
    <Paper
      maw={420}
      mx="auto"
      mt={64}
      p={32}
      radius="md"
      withBorder
    >
      <Stack gap="md">
        <EmployeeForgotPasswordForm />
      </Stack>
    </Paper>
  );
}