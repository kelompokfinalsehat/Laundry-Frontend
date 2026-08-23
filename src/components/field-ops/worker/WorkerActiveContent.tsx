"use client";

import { Stack, Badge, Text, Paper, Group, Button, Card } from "@mantine/core";

// ── UI KOSONGAN — data dummy, belum disambungkan hooks/API ──────────
// Tiga varian tampilan tergantung `status` assignment dari BE.
// Jangan ditebak sendiri urutannya — status datang apa adanya dari
// useActiveAssignment() nanti (worker.hooks.ts).

export type WorkerAssignmentStatus = "ASSIGNED" | "IN_PROGRESS" | "ON_HOLD_BYPASS";

type WorkerItem = { id: string; name: string; officialQty: number };

export function WorkerActiveContent({
  status,
  stationLabel,
  orderCode,
  items,
}: {
  status: WorkerAssignmentStatus;
  stationLabel: string;
  orderCode: string;
  items: WorkerItem[]; // hanya relevan untuk status ASSIGNED
}) {
  if (status === "ASSIGNED") {
    return (
      <Stack gap="lg">
        <Badge color="yellow.7" variant="light">
          Menunggu Diproses
        </Badge>
        <Text size="sm" c="dimmed">
          {stationLabel} · {orderCode}
        </Text>

        <Stack gap="xs">
          {items.map((item) => (
            <Paper key={item.id} withBorder p="sm" radius="md">
              <Group justify="space-between">
                <Text size="sm">{item.name}</Text>
                <Text size="sm" fw={700}>
                  {item.officialQty} pcs
                </Text>
              </Group>
            </Paper>
          ))}
        </Stack>

        <Button size="md" color="yellow.6" radius="md">
          Mulai &amp; Validasi Kuantitas
        </Button>
      </Stack>
    );
  }

  if (status === "IN_PROGRESS") {
    return (
      <Stack gap="lg">
        <Badge color="yellow.7" variant="light">
          Sedang Diproses
        </Badge>
        <Text size="sm" c="dimmed">
          {stationLabel} · {orderCode}
        </Text>

        <Card withBorder radius="md" p="md" style={{ borderStyle: "dashed" }}>
          <Text size="sm" c="dimmed">
            Kuantitas telah divalidasi. Selesaikan proses {stationLabel} lalu
            tandai selesai.
          </Text>
        </Card>

        <Button size="md" color="yellow.6" radius="md">
          Tandai Selesai
        </Button>
      </Stack>
    );
  }

  // status === "ON_HOLD_BYPASS"
  return (
    <Stack gap="lg">
      <Badge color="yellow.7" variant="light" style={{ opacity: 0.7 }}>
        Menunggu Persetujuan Bypass
      </Badge>
      <Text size="sm" c="dimmed">
        {stationLabel} · {orderCode}
      </Text>

      <Card withBorder radius="md" p="md" style={{ borderStyle: "dashed" }}>
        <Text size="sm" c="dimmed">
          Anda mengajukan penyesuaian kuantitas dan sedang menunggu keputusan
          dari Outlet Admin.
        </Text>
      </Card>

      <Button size="md" radius="md" disabled>
        Menunggu Persetujuan
      </Button>
    </Stack>
  );
}
