"use client";

import { WorkerAvailableAssignments } from "@/components/field-ops/worker/WorkerAvailableAssignment";
import { Stack, Title } from "@mantine/core";

export default function Page() {
  return (
    <Stack gap="md">
      <Title order={3}>Tugas Tersedia</Title>
      <WorkerAvailableAssignments />
    </Stack>
  );
}
