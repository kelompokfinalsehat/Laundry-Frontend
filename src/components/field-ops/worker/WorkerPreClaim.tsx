"use client";

import { Stack, Badge, Text, Card, Button } from "@mantine/core";

// ── UI KOSONGAN — belum disambungkan hooks/API ──────────
// Ingat: di titik ini BE belum kirim daftar item/quantity —
// itu baru muncul setelah klaim berhasil (lihat WorkerActiveContent).

export function WorkerPreClaim({
  stationLabel,
  orderCode,
  availableSince,
}: {
  stationLabel: string;
  orderCode: string;
  availableSince: string;
}) {
  return (
    <Stack gap="lg">
      <Badge color="yellow.7" variant="light">
        {stationLabel}
      </Badge>
      <Text size="sm" c="dimmed">
        {orderCode}
      </Text>
      <Text size="xs" c="dimmed">
        Tersedia sejak: {availableSince}
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
