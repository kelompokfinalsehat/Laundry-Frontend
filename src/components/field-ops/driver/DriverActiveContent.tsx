"use client";

import { Stack, Badge, Text, Card, Button } from "@mantine/core";

// ── UI KOSONGAN — data dummy, belum disambungkan hooks/API ──────────
// LIMA varian, mengikuti tabel state/action PERSIS dari BE
// (driver.helper.ts: getAssignmentState & getAssignmentAction).
// JANGAN menebak tombol sendiri — nanti "state" dan "action" datang
// apa adanya dari useActiveTask() (driver.hooks.ts).

export type DriverState =
  | "PICKUP_ASSIGNED"
  | "PICKUP_TO_CUSTOMER"
  | "PICKUP_TO_OUTLET"
  | "DELIVERY_ASSIGNED"
  | "DELIVERY_TO_CUSTOMER";

type Destination = { name: string; address: string; phone: string };

const STATE_META: Record<
  DriverState,
  { label: string; buttonText: string | null }
> = {
  PICKUP_ASSIGNED: { label: "Menuju Lokasi Penjemputan", buttonText: "Mulai Penjemputan" },
  PICKUP_TO_CUSTOMER: { label: "Menuju Pelanggan", buttonText: "Konfirmasi Laundry Diambil" },
  PICKUP_TO_OUTLET: { label: "Menuju Outlet", buttonText: null },
  DELIVERY_ASSIGNED: { label: "Menuju Lokasi Pengantaran", buttonText: "Mulai Pengantaran" },
  DELIVERY_TO_CUSTOMER: { label: "Menuju Pelanggan", buttonText: "Selesaikan Pengantaran" },
};

export function DriverActiveContent({
  taskTypeLabel,
  orderCode,
  state,
  destination,
}: {
  taskTypeLabel: string; // "Pickup" | "Delivery"
  orderCode: string;
  state: DriverState;
  destination: Destination;
}) {
  const meta = STATE_META[state];

  return (
    <Stack gap="lg">
      <Badge color="blue.7" variant="light">
        {meta.label}
      </Badge>
      <Text size="sm" c="dimmed">
        {taskTypeLabel} · {orderCode}
      </Text>

      <Card withBorder radius="md" p="md">
        <Text size="xs" c="dimmed" tt="uppercase" fw={700} mb={6}>
          Tujuan (read-only)
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

      {meta.buttonText ? (
        <Button size="md" color="yellow.6" radius="md">
          {meta.buttonText}
        </Button>
      ) : (
        <Card withBorder radius="md" p="md" style={{ borderStyle: "dashed" }}>
          <Text size="sm" c="dimmed" ta="center">
            Menunggu konfirmasi dari Outlet Admin.
          </Text>
        </Card>
      )}
    </Stack>
  );
}
