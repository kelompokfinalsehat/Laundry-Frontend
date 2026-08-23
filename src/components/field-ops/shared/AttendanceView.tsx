"use client";

import {
  Stack,
  Card,
  Badge,
  Text,
  Button,
  Group,
  Select,
  ActionIcon,
  Paper,
} from "@mantine/core";
import { IconArrowsSort } from "@tabler/icons-react";

// ── UI KOSONGAN — belum disambungkan ke hooks/API ──────────────────
// Data di bawah ini statis, cuma untuk melihat bentuk tampilan.
// Nanti tinggal ganti sumbernya jadi useAttendanceStatus() /
// useAttendanceHistory() / useClockIn() / useClockOut().

const DUMMY_STATUS = {
  workStatus: "AVAILABLE" as "OFF_DUTY" | "AVAILABLE" | "BUSY" | null,
  clockInAt: "07:02",
  clockOutAt: null as string | null,
  canClockIn: false,
  canClockOut: true,
};

const DUMMY_HISTORY = [
  { id: "1", attendanceDate: "22 Agu 2026", clockInAt: "07:00", clockOutAt: "15:10" },
  { id: "2", attendanceDate: "21 Agu 2026", clockInAt: "06:58", clockOutAt: "15:05" },
];

function statusBadge(workStatus: typeof DUMMY_STATUS.workStatus) {
  if (workStatus === "OFF_DUTY" || workStatus === null) {
    return <Badge color="gray" variant="light">Tidak Bertugas</Badge>;
  }
  return <Badge color="teal" variant="light">Sedang Bertugas</Badge>;
}

export function AttendanceView() {
  const { workStatus, clockInAt, clockOutAt, canClockIn, canClockOut } =
    DUMMY_STATUS;

  return (
    <Stack gap="lg">
      {/* ── Kartu status hari ini ── */}
      <Card withBorder radius="lg" p="lg">
        <Stack gap="sm">
          {statusBadge(workStatus)}
          <Text size="sm" c="dimmed">
            Masuk: {clockInAt ?? "—"} &nbsp;&nbsp; Pulang: {clockOutAt ?? "—"}
          </Text>

          {canClockIn && (
            <Button size="md" color="yellow.6" radius="md">
              Absen Masuk
            </Button>
          )}
          {canClockOut && (
            <Button size="md" color="blue.7" radius="md">
              Absen Pulang
            </Button>
          )}
          {!canClockIn && !canClockOut && (
            <Stack gap={4}>
              <Button size="md" radius="md" disabled>
                Absen Pulang
              </Button>
              <Text size="xs" c="dimmed" ta="center">
                Selesaikan tugas aktif terlebih dahulu untuk absen pulang.
              </Text>
            </Stack>
          )}
        </Stack>
      </Card>

      {/* ── Riwayat absensi ── */}
      <Stack gap="sm">
        <Group justify="space-between">
          <Select
            size="xs"
            data={["Minggu Ini", "Bulan Ini"]}
            defaultValue="Minggu Ini"
            w={140}
          />
          <ActionIcon variant="subtle" color="gray">
            <IconArrowsSort size={16} />
          </ActionIcon>
        </Group>

        {DUMMY_HISTORY.length === 0 ? (
          <Paper withBorder p="lg" radius="md">
            <Text c="dimmed" ta="center" size="sm">
              Belum ada riwayat absensi pada periode ini.
            </Text>
          </Paper>
        ) : (
          DUMMY_HISTORY.map((h) => (
            <Paper key={h.id} withBorder p="sm" radius="md">
              <Group justify="space-between">
                <Text size="sm">{h.attendanceDate}</Text>
                <Text size="sm" c="dimmed">
                  Masuk: {h.clockInAt} · Pulang: {h.clockOutAt ?? "—"}
                </Text>
              </Group>
            </Paper>
          ))
        )}

        <Text size="xs" c="dimmed" ta="center">
          Menampilkan 1–2 dari 2 data
        </Text>
      </Stack>
    </Stack>
  );
}
