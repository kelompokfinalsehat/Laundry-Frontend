"use client";

import { Stack, Badge, Text, Card } from "@mantine/core";

// ── UI KOSONGAN — data dummy, belum disambungkan hooks/API ──────────
// Murni tampilan baca (tidak ada tombol aksi sama sekali).

export function DriverHistoryDetail({
  taskTypeLabel,
  orderCode,
  destination,
  assignedAt,
  completedAt,
}: {
  taskTypeLabel: string;
  orderCode: string;
  destination: { name: string; address: string; phone: string };
  assignedAt: string;
  completedAt: string;
}) {
  return (
    <Stack gap="lg">
      <Badge color="teal" variant="light">
        {taskTypeLabel} — Selesai
      </Badge>
      <Text size="sm" c="dimmed">
        {orderCode}
      </Text>

      <Card withBorder radius="md" p="md">
        <Text size="xs" c="dimmed" tt="uppercase" fw={700} mb={6}>
          Tujuan
        </Text>
        <Text size="sm" fw={600}>
          {destination.name}
        </Text>
        <Text size="sm" c="dimmed">
          {destination.address}
        </Text>
        <Text size="sm" c="dimmed">
          {destination.phone}
        </Text>
      </Card>

      <Card withBorder radius="md" p="md">
        <Text size="xs" c="dimmed" tt="uppercase" fw={700} mb={6}>
          Waktu
        </Text>
        <Text size="sm" c="dimmed">
          Ditugaskan: {assignedAt} · Selesai: {completedAt}
        </Text>
      </Card>
    </Stack>
  );
}
