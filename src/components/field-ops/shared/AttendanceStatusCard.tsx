import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useAttendanceStatus, useClockIn, useClockOut } from "@/hooks/attendance.hooks";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";

import { Button, Card, Group, Paper, SimpleGrid, Skeleton, Stack, Text } from "@mantine/core";

import { IconAlertTriangle, IconCalendar, IconFingerprint } from "@tabler/icons-react";

export function AttendanceStatusCard() {
  const statusQuery = useAttendanceStatus();
  const clockIn = useClockIn();
  const clockOut = useClockOut();

  return (
    <AsyncStateView
      isLoading={statusQuery.isPending}
      isError={statusQuery.isError}
      error={statusQuery.error}
      data={statusQuery.data}
      onRetry={() => statusQuery.refetch()}
      isEmpty={() => false}
      skeleton={
        <Card withBorder radius="md" p="md">
          <Stack>
            <Skeleton height={20} width="40%" />
            <Skeleton height={60} />
            <Skeleton height={40} />
          </Stack>
        </Card>
      }
    >
      {(data) => (
        <Card withBorder radius="md" p="md">
          <Stack gap="md">
            <Text fw={600} size="lg">
              Status Absensi
            </Text>

            {data.isCarryOver && (
              <Paper
                withBorder
                p="sm"
                radius="md"
                bg="yellow.0"
                style={{
                  borderColor: "var(--mantine-color-yellow-4)",
                }}
              >
                <Group align="flex-start">
                  <IconAlertTriangle size={18} color="var(--mantine-color-yellow-7)" />

                  <Stack gap={2}>
                    <Text size="sm" fw={600}>
                      Absen pulang kemarin belum tercatat
                    </Text>

                    <Text size="xs" c="dimmed">
                      Selesaikan absen pulang terlebih dahulu.
                    </Text>
                  </Stack>
                </Group>
              </Paper>
            )}

            {/* Tanggal selalu ditampilkan */}
            <Group gap="xs">
              <IconCalendar size={18} />

              <Stack gap={0}>
                <Text size="sm" c="dimmed">
                  {data.isCarryOver ? "Absensi terakhir" : "Tanggal Absensi"}
                </Text>

                <Text size="sm" fw={500}>
                  {formatFieldOpsDate(data.attendanceDate)}
                </Text>
              </Stack>
            </Group>

            <SimpleGrid cols={2}>
              <Paper withBorder p="sm" radius="md">
                <Text size="xs" c="dimmed">
                  Jam Masuk
                </Text>

                <Text fw={500}>{formatFieldOpsTime(data.clockInAt)}</Text>
              </Paper>

              <Paper withBorder p="sm" radius="md">
                <Text size="xs" c="dimmed">
                  Jam Pulang
                </Text>

                <Text fw={500}>{formatFieldOpsTime(data.clockOutAt)}</Text>
              </Paper>
            </SimpleGrid>

            {/* Action hanya berdasarkan canClockIn */}
            {data.canClockIn && (
              <Button
                fullWidth
                leftSection={<IconFingerprint size={18} />}
                loading={clockIn.isPending}
                disabled={clockOut.isPending}
                onClick={() => clockIn.mutate()}
                color="var(--color-accent)"
              >
                Absen Masuk
              </Button>
            )}

            {/* Action hanya berdasarkan canClockOut */}
            {data.canClockOut && (
              <Button
                fullWidth
                leftSection={<IconFingerprint size={18} />}
                loading={clockOut.isPending}
                disabled={clockIn.isPending}
                onClick={() => clockOut.mutate()}
                color="var(--color-accent)"
              >
                Absen Pulang
              </Button>
            )}

            {/* Tidak ada action yang tersedia */}
            {!data.canClockIn && !data.canClockOut && (
              <Text size="sm" c="dimmed" ta="center" py="xs">
                Tidak ada aksi absensi yang tersedia saat ini.
              </Text>
            )}
          </Stack>
        </Card>
      )}
    </AsyncStateView>
  );
}
