import { Center, Loader, Paper, Stack } from "@mantine/core";
import { Suspense } from "react";

import { AcceptInvitationForm } from "@/components/auth/AcceptInvitationForm";

export default function AcceptInvitationPage() {
  return (
    <Suspense
      fallback={
        <Center mih="60vh">
          <Loader size="md" />
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
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <AcceptInvitationForm />
        </Stack>
      </Paper>
    </Suspense>
  );
}