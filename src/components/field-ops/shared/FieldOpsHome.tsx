"use client";

import { Stack, Text, Card, Badge, Group, Button } from "@mantine/core";
import { AttendanceStatusCard } from "./AttendanceStatusCard";
import { FieldOpsGreeting } from "./FieldOpsGreeting";
import { WorkerActiveSummary } from "../worker/WorkerActiveSummary";
import type { ReactNode } from "react";

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
