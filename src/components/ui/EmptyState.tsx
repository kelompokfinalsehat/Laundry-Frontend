"use client";

import { Button, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconInbox } from "@tabler/icons-react";
import type { ReactNode } from "react";

export function EmptyState({
  icon,
  title = "Belum ada data",
  description,
  action,
}: {
  icon?: ReactNode;
  title?: string;
  description?: string;
  action?: { label: string; onClick: () => void };
}) {
  return (
    <Stack align="center" py={48} gap="xs">
      <ThemeIcon size={56} radius="xl" variant="light" color="gray">
        {icon ?? <IconInbox size={28} />}
      </ThemeIcon>
      <Text fw={600}>{title}</Text>
      {description && (
        <Text size="sm" c="dimmed" ta="center" maw={320}>
          {description}
        </Text>
      )}
      {action && (
        <Button variant="light" size="xs" mt="xs" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </Stack>
  );
}