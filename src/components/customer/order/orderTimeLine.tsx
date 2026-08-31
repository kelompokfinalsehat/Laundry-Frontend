"use client";

import { Stack, Group, Text, ThemeIcon } from "@mantine/core";
import type { TimelineEntry } from "@/types/api/orders.types";

export function OrderTimeline({ timeline }: { timeline: TimelineEntry[] }) {
  return (
    <Stack gap="md">
      {timeline.map((entry, index) => {
        const isDone = entry.isCompleted || entry.isCurrent;
        return (
          <Group key={entry.status} align="flex-start" gap="sm" wrap="nowrap">
            <Stack gap={0} align="center">
              <ThemeIcon
                size={20}
                radius="xl"
                style={{
                  backgroundColor: isDone ? "var(--color-primary)" : "var(--color-border)",
                }}
              >
                {entry.isCurrent ? "●" : isDone ? "✓" : ""}
              </ThemeIcon>
              {index < timeline.length - 1 && (
                <div
                  style={{
                    width: 2,
                    height: 28,
                    backgroundColor: entry.isCompleted ? "var(--color-primary)" : "var(--color-border)",
                  }}
                />
              )}
            </Stack>
            <Stack gap={0} pb="sm">
              <Text
                size="sm"
                fw={entry.isCurrent ? 700 : 500}
                c={isDone ? "var(--color-text-primary)" : "var(--color-text-secondary)"}
              >
                {entry.label}
              </Text>
              {entry.timestamp && (
                <Text size="xs" c="var(--color-text-secondary)">
                  {new Date(entry.timestamp).toLocaleString("id-ID")}
                </Text>
              )}
            </Stack>
          </Group>
        );
      })}
    </Stack>
  );
}
