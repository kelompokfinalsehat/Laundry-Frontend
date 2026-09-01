"use client";

import { Stack } from "@mantine/core";
import type { ReactNode } from "react";
import { AttendanceStatusCard } from "./AttendanceStatusCard";
import { FieldOpsGreeting } from "./FieldOpsGreeting";

type FieldOpsHomeProps = {
  children?: ReactNode;
};

export function FieldOpsHome({ children }: FieldOpsHomeProps) {
  return (
    <Stack gap="md">
      <FieldOpsGreeting />

      <AttendanceStatusCard />
      
      {children}
    </Stack>
  );
}
