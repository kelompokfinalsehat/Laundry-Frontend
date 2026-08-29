"use client";

import { DriverAvailableAssignments } from "@/components/field-ops/driver/DriverAvailableAssignment";
import { Stack, Title } from "@mantine/core";

export default function Page() {
  return (
    <Stack gap="md">
      <Title order={3}>Tugas Tersedia</Title>
      <DriverAvailableAssignments />
    </Stack>
  );
}
