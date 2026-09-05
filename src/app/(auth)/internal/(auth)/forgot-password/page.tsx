import { Center, Paper, Stack } from "@mantine/core";

import { EmployeeForgotPasswordForm } from "@/components/internalAuth/EmployeeForgotPasswordForm";

export default function EmployeeForgotPasswordPage() {
  return (
    <Center mih="100vh" px="md">
      <Paper w="100%" maw={420} p={32} radius="md" withBorder>
        <Stack gap="md">
          <EmployeeForgotPasswordForm />
        </Stack>
      </Paper>
    </Center>
  );
}
