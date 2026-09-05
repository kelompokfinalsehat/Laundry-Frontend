import { Center, Loader, Paper, Stack } from "@mantine/core";
import { Suspense } from "react";

import { AcceptInvitationForm } from "@/components/internalAuth/AcceptInvitationForm";

export default function AcceptInvitationPage() {
  return (
    <Suspense
      fallback={
        <Center mih="60vh">
          <Loader size="md" />
        </Center>
      }
    >
    <Center mih="100vh" px="md">
      <Paper
        w="100%"
        maw={420}
        p={32}
        radius="md"
        withBorder
      >
        <Stack gap="md">
          <AcceptInvitationForm />
        </Stack>
      </Paper>
      </Center>
    </Suspense>
  );
}