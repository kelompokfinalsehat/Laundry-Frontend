"use client";

import { Stack, Text, Card, Badge, Group, Button } from "@mantine/core";

// ── UI KOSONGAN — data dummy, belum disambungkan hooks/API ──────────

type ActiveTaskSummary = {
  badgeLabel: string;
  orderCode: string;
  statusLabel?: string;
} | null;

export function FieldOpsHome({
  name,
  cariTugasHref,
  lihatTugasHref,
  activeTask,
}: {
  name: string;
  cariTugasHref: string;
  lihatTugasHref: string;
  /** null = tidak ada tugas aktif saat ini */
  activeTask: ActiveTaskSummary;
}) {
  return (
    <Stack gap="lg">
      <Text fw={700} size="lg">
        Halo, {name}
      </Text>

      {/* ── Kartu status attendance (ringkas) ── */}
      <Card withBorder radius="lg" p="md">
        <Badge color="teal" variant="light">
          Sedang Bertugas
        </Badge>
        <Text size="xs" c="dimmed" mt={6}>
          Absen masuk 07:02
        </Text>
      </Card>

      {/* ── Kartu tugas aktif ── */}
      {activeTask ? (
        <Card withBorder radius="lg" p="md">
          <Text size="xs" c="dimmed" tt="uppercase" fw={700} mb={4}>
            Tugas Aktif
          </Text>
          <Badge color="yellow.7" variant="light">
            {activeTask.badgeLabel}
          </Badge>
          <Text size="sm" c="dimmed" mt={6}>
            {activeTask.orderCode}
            {activeTask.statusLabel ? ` · ${activeTask.statusLabel}` : ""}
          </Text>
          <Button
            component="a"
            href={lihatTugasHref}
            variant="light"
            size="xs"
            mt="sm"
          >
            Lihat Tugas
          </Button>
        </Card>
      ) : (
        <Card withBorder radius="lg" p="md" style={{ borderStyle: "dashed" }}>
          <Text size="sm" c="dimmed" ta="center">
            Tidak ada tugas aktif saat ini
          </Text>
          <Button
            component="a"
            href={cariTugasHref}
            variant="subtle"
            size="xs"
            mt="sm"
            fullWidth
          >
            Cari Tugas Tersedia
          </Button>
        </Card>
      )}
    </Stack>
  );
}
