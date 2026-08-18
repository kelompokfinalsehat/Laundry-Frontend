import { Center, Loader, Paper, Stack } from "@mantine/core";
import { Suspense } from "react";

import { EmployeeResetPasswordForm } from "@/components/auth/EmployeeResetPasswordForm";

export default function EmployeeResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <Center mih="60vh">
          <Loader />
        </Center>
      }
    >
      <Paper
        maw={420}
        mx="auto"
        mt={64}
        p={32}
        radius="md"
        withBorder
      >
        <Stack gap="md">
          <EmployeeResetPasswordForm />
        </Stack>
      </Paper>
    </Suspense>
  );
}