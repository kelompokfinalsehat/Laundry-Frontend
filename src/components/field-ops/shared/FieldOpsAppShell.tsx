"use client";
import { AppShell, Group, Text } from "@mantine/core";
import { BottomNav } from "./BottomNav";

export function FieldOpsAppShell({
  children,
  role,
  basePath,
}: {
  children: React.ReactNode;
  role: "Worker" | "Driver";
  basePath: string;
}) {
  return (
    <AppShell
      header={{ height: 56 }}
      footer={{ height: 64 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Text fw={800}>Popo Laundry</Text>
          <Text size="sm">{role}</Text>
        </Group>
      </AppShell.Header>
      <AppShell.Main maw={720} mx="auto" pb={80}>
        {children}
      </AppShell.Main>
      <AppShell.Footer>
        <BottomNav basePath={basePath} />
      </AppShell.Footer>
    </AppShell>
  );
}
