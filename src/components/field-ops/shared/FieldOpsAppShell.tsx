"use client";

import { AppShell, Group, Title } from "@mantine/core";
import { useCallback, useState } from "react";

import { useFieldOpsTaskNotification } from "@/hooks/fieldOpsTaskNotification.hooks";
import { BottomNav } from "./BottomNav";

export function FieldOpsAppShell({ children, role, basePath }: { children: React.ReactNode; role: "Worker" | "Driver"; basePath: string }) {
  const [hasNewTask, setHasNewTask] = useState(false);

  const handleNewTask = useCallback(() => {
    setHasNewTask(true);
  }, []);

  const handleTaskOpen = useCallback(() => {
    setHasNewTask(false);
  }, []);

  useFieldOpsTaskNotification({
    role,
    onNewTask: handleNewTask,
  });

  return (
    <AppShell header={{ height: 56 }} footer={{ height: 64 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Title
            order={3}
            style={{
              color: "var(--color-primary-dark)",
              letterSpacing: -0.5,
            }}
          >
            Popo Laundry
          </Title>

          <Title
            size="md"
            style={{
              color: "var(--color-primary-dark)",
              letterSpacing: -0.5,
            }}
          >
            {role}
          </Title>
        </Group>
      </AppShell.Header>

      <AppShell.Main maw={720} mx="auto" pb={80}>
        {children}
      </AppShell.Main>

      <AppShell.Footer>
        <BottomNav basePath={basePath} tugasNew={hasNewTask} onTaskOpen={handleTaskOpen} />
      </AppShell.Footer>
    </AppShell>
  );
}
