"use client";

import {
  Stack,
  Group,
  Select,
  ActionIcon,
  Paper,
  Badge,
  Text,
  Button,
} from "@mantine/core";
import { IconArrowsSort } from "@tabler/icons-react";

// ── UI KOSONGAN — data dummy, belum disambungkan hooks/API ──────────

export type AvailableItem = {
  id: string;
  badgeLabel: string;
  orderCode: string;
};

export function AvailableAssignments({
  filterLabel,
  filterOptions,
  items,
  detailHrefBase,
  emptyText,
}: {
  filterLabel: string;
  filterOptions: string[];
  items: AvailableItem[];
  detailHrefBase: string;
  emptyText: string;
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
        items.map((item) => (
          <Paper key={item.id} withBorder p="sm" radius="md">
            <Group justify="space-between">
              <Group gap="xs">
                <Badge color="yellow.7" variant="light">
                  {item.badgeLabel}
                </Badge>
                <Text size="sm">{item.orderCode}</Text>
              </Group>
              <Button
                component="a"
                href={`${detailHrefBase}/${item.id}`}
                size="xs"
                variant="subtle"
              >
                Lihat Detail
              </Button>
            </Group>
          </Paper>
        ))
      )}

      <Text size="xs" c="dimmed" ta="center">
        Menampilkan {items.length ? `1–${items.length}` : "0"} dari{" "}
        {items.length} data
      </Text>
    </Stack>
  );
}
