"use client";

import {
  Stack,
  Group,
  Select,
  ActionIcon,
  Paper,
  Badge,
  Text,
} from "@mantine/core";
import { IconArrowsSort } from "@tabler/icons-react";

// ── UI KOSONGAN — data dummy, belum disambungkan hooks/API ──────────

export type HistoryItem = {
  id: string;
  badgeLabel: string;
  orderCode: string;
  completedAt: string;
};

export function AssignmentHistory({
  filterLabel,
  filterOptions,
  items,
  emptyText,
  onItemHrefBase, // opsional: kalau item bisa diklik ke detail (dipakai driver)
}: {
  filterLabel: string;
  filterOptions: string[];
  items: HistoryItem[];
  emptyText: string;
  onItemHrefBase?: string;
}) {
  return (
    <Stack gap="sm">
      <Group justify="space-between">
        <Select
          size="xs"
          label={filterLabel}
          data={filterOptions}
          defaultValue={filterOptions[0]}
          w={160}
        />
        <ActionIcon variant="subtle" color="gray" mt={20}>
          <IconArrowsSort size={16} />
        </ActionIcon>
      </Group>

      {items.length === 0 ? (
        <Paper withBorder p="lg" radius="md">
          <Text c="dimmed" ta="center" size="sm">
            {emptyText}
          </Text>
        </Paper>
      ) : (
        items.map((item) => {
          const content = (
            <Group justify="space-between">
              <Group gap="xs">
                <Badge color="teal" variant="light">
                  {item.badgeLabel}
                </Badge>
                <Text size="sm">{item.orderCode}</Text>
              </Group>
              <Text size="xs" c="dimmed">
                {item.completedAt}
              </Text>
            </Group>
          );

          return onItemHrefBase ? (
            <Paper
              key={item.id}
              withBorder
              p="sm"
              radius="md"
              component="a"
              href={`${onItemHrefBase}/${item.id}`}
              style={{ cursor: "pointer" }}
            >
              {content}
            </Paper>
          ) : (
            <Paper key={item.id} withBorder p="sm" radius="md">
              {content}
            </Paper>
          );
        })
      )}

      <Text size="xs" c="dimmed" ta="center">
        Menampilkan {items.length ? `1–${items.length}` : "0"} dari{" "}
        {items.length} data
      </Text>
    </Stack>
  );
}
