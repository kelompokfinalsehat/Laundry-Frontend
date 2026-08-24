"use client";

import { Badge, Button, Card, Divider, Group, Paper, SimpleGrid, Skeleton, Stack, Text } from "@mantine/core";
import { IconAlertTriangle, IconCalendar, IconFingerprint } from "@tabler/icons-react";
import { useAttendance } from "@/hooks/attendance.hooks";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";
import type { WorkStatus } from "@/types/api/attendance.types";
import { AsyncStateView } from "@/components/ui/AsyncStateView";

function getWorkStatusBadge(workStatus: WorkStatus | null) {
  if (workStatus === "AVAILABLE") {
    return { color: "green", label: "Tersedia" };
  }
  if (workStatus === "BUSY") {
    return { color: "yellow", label: "Sedang Bertugas" };
  }
  return { color: "blue", label: "Tidak Bertugas" };
}

export function AttendanceStatus() {
  const { statusQuery, clockInMutation, clockOutMutation } = useAttendance();

  return (
    <AsyncStateView
      isLoading={statusQuery.isPending}
      isError={statusQuery.isError}
      error={statusQuery.error}
      data={statusQuery.data}
      isEmpty={() => false} // status absensi selalu berupa objek tunggal, tidak pernah "kosong"
      onRetry={() => statusQuery.refetch()}
      skeleton={
        <Card withBorder shadow="sm" radius="lg" p="lg">
          <Stack gap="md">
            <Group justify="space-between">
              <Skeleton height={20} width="40%" />
              <Skeleton height={24} width={90} radius="xl" />
            </Group>
            <Divider />
            <Skeleton height={16} width="60%" />
            <SimpleGrid cols={2} spacing="md">
              <Skeleton height={64} radius="md" />
              <Skeleton height={64} radius="md" />
            </SimpleGrid>
            <Skeleton height={40} radius="md" />
          </Stack>
        </Card>
      }
    >
      {(data) => {
        const { workStatus, attendanceDate, clockInAt, clockOutAt, canClockIn, canClockOut, isCarryOver } = data;
        const workStatusBadge = getWorkStatusBadge(workStatus);

        return (
          <Card withBorder shadow="sm" radius="lg" p="lg">
            <Stack gap="md">
              <Group justify="space-between">
                <Text fw={600} size="lg">
                  Status Absensi
                </Text>
                <Badge color={workStatusBadge.color} variant="light" size="lg">
                  {workStatusBadge.label}
                </Badge>
              </Group>
              <Divider />

              {isCarryOver && (
                <Paper withBorder radius="md" p="md" bg="var(--mantine-color-yellow-0)">
                  <Group gap="xs" align="flex-start">
                    <IconAlertTriangle size={18} color="var(--mantine-color-yellow-7)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <Stack gap={2}>
                      <Text size="sm" fw={600} c="yellow.8">
                        Absen pulang kemarin belum tercatat
                      </Text>
                      <Text size="xs" c="dimmed">
                        Selesaikan absen pulang terlebih dahulu. Setelah itu kamu bisa absen masuk hari ini dan klaim pekerjaan.
                      </Text>
                    </Stack>
                  </Group>
                </Paper>
              )}

              {attendanceDate && (
                <Group gap="xs" c="dimmed">
                  <IconCalendar size={18} stroke={1.8} />
                  <Text size="sm">
                    {formatFieldOpsDate(attendanceDate)}
                    {isCarryOver && (
                      <Text span size="xs" c="yellow.7" ml={6}>
                        (kemarin)
                      </Text>
                    )}
                  </Text>
                </Group>
              )}

              <SimpleGrid cols={2} spacing="md">
                <Paper withBorder radius="md" p="md" bg="var(--mantine-color-rinseBlue-0)">
                  <Stack gap={4}>
                    <Text size="xs" fw={700} c="dimmed" tt="uppercase">
                      Masuk
                    </Text>
                    <Text size="md">{formatFieldOpsTime(clockInAt)}</Text>
                  </Stack>
                </Paper>

                <Paper withBorder radius="md" p="md" bg="var(--mantine-color-rinseBlue-0)">
                  <Stack gap={4}>
                    <Text size="xs" fw={700} c="dimmed" tt="uppercase">
                      Pulang
                    </Text>
                    <Text size="md">{formatFieldOpsTime(clockOutAt)}</Text>
                  </Stack>
                </Paper>
              </SimpleGrid>

              {canClockIn && (
                <Button
                  fullWidth
                  leftSection={<IconFingerprint size={18} />}
                  loading={clockInMutation.isPending}
                  disabled={clockInMutation.isPending || clockOutMutation.isPending}
                  onClick={() => clockInMutation.mutate()}
                >
                  Absen Masuk
                </Button>
              )}

              {canClockOut && (
                <Button
                  fullWidth
                  leftSection={<IconFingerprint size={18} />}
                  loading={clockOutMutation.isPending}
                  disabled={clockInMutation.isPending || clockOutMutation.isPending}
                  onClick={() => clockOutMutation.mutate()}
                >
                  Absen Pulang
                </Button>
              )}

              {!canClockIn && !canClockOut && (
                <Stack gap={4}>
                  <Button fullWidth disabled leftSection={<IconFingerprint size={18} />}>
                    Absensi
                  </Button>
                  <Text size="xs" c="dimmed" ta="center">
                    Belum bisa melakukan absensi saat ini.
                  </Text>
                </Stack>
              )}
            </Stack>
          </Card>
        );
      }}
    </AsyncStateView>
  );
}
