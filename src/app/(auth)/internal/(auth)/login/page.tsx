import { Paper, Stack } from "@mantine/core";

import { EmployeeLoginForm } from "@/components/internalAuth/EmployeeLoginForm";

export default function EmployeeLoginPage() {
  return (
    <Paper maw={420} mx="auto" mt={64} p={32} radius="md" withBorder>
      <Stack gap="md">
        <EmployeeLoginForm />
      </Stack>
    </Paper>
  );
}
