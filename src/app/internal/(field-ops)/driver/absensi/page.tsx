"use client";
import { Stack } from "@mantine/core";
import { AttendanceHistoryList } from "@/components/field-ops/shared/AttendanceHistory";
import { AttendanceStatus } from "@/components/field-ops/shared/AttendanceStatus";

export default function Page() {
  return (
    <Stack>
      <AttendanceStatus />
      <AttendanceHistoryList />
    </Stack>
  );
}
