"use client";

import { Stack, Badge, Text, Card, Button } from "@mantine/core";

// ── UI KOSONGAN — belum disambungkan hooks/API ──────────

export function DriverPreClaim({
  taskTypeLabel,
  orderCode,
}: {
  taskTypeLabel: string;
  orderCode: string;
}) {
  return (
    <Stack gap="lg">
      <Badge color="blue.7" variant="light">
        {taskTypeLabel}
      </Badge>
      <Text size="sm" c="dimmed">
        {orderCode}
      </Text>

      <Card withBorder radius="md" p="md" style={{ borderStyle: "dashed" }}>
        <Text size="sm" c="dimmed">
          Dengan mengambil tugas ini, tugas akan langsung ditugaskan kepada
          Anda.
        </Text>
      </Card>

      <Button size="md" color="yellow.6" radius="md">
        Ambil Tugas Ini
      </Button>
    </Stack>
  );
}
