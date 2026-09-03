"use client";
import {  Stack  } from "@mantine/core";
import { AttendanceStatusCard } from "@/components/field-ops/shared/AttendanceStatusCard";
import { AttendanceHistory } from "@/components/field-ops/shared/AttendanceHistory";

export default function Page() {
  return (
    <Stack gap="md">
      <AttendanceStatusCard />

      <AttendanceHistory/>
    </Stack>
  );
}
