import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useAttendanceStatus, useClockIn, useClockOut } from "@/hooks/attendance.hooks";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";
import { Button, Card, Group, Paper, SimpleGrid, Skeleton, Stack, Text } from "@mantine/core";
import {
  IconAlertTriangle,
  IconCalendar,
  IconCircleCheck,
  IconFingerprint,
  IconTriangle,
} from "@tabler/icons-react";

export function AttendanceStatusCard() {
  // query dari hooks
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
        <Card withBorder radius={"md"} p={"md"}>
          <Stack>
            <Skeleton height={20} width={"40%"} />
            <Skeleton height={60} />
            <Skeleton height={40} />
          </Stack>
        </Card>
      }
    >
      {(data) => (
        <Card withBorder radius={"md"} p={"md"}>
          <Stack gap={"md"}>
            <Text fw={600} size="lg">
              Status Absensi
            </Text>
            {data.isCarryOver && (
              <Paper
                withBorder
                p={"sm"}
                radius={"md"}
                bg="yellow.0"
                style={{ borderColor: "var(--mantine-color-yellow-4)" }}
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

            {data.attendanceDate && (
              <Group gap={"xs"}>
                <IconCalendar size={18} />
                <Text size="sm" c="dimmed">
                  {formatFieldOpsDate(data.attendanceDate)}
                </Text>
              </Group>
            )}
            <SimpleGrid cols={2}>
              <Paper withBorder p={"sm"} radius={"md"}>
                <Text size="xs" c="dimmed">
                  Jam Masuk
                </Text>
                <Text fw={500}>{formatFieldOpsTime(data.clockInAt)} </Text>
              </Paper>
              <Paper withBorder p={"sm"} radius={"md"}>
                <Text size="xs" c="dimmed">
                  Jam Pulang
                </Text>
                <Text fw={500}>{formatFieldOpsTime(data.clockOutAt)}</Text>
              </Paper>
            </SimpleGrid>

            {data.canClockIn && (
              <Button
                fullWidth
                leftSection={<IconFingerprint size={18} />}
                loading={clockIn.isPending}
                onClick={() => clockIn.mutate()}
                color="var(--color-accent)"
              >
                Absen Masuk
              </Button>
            )}

            {data.canClockOut && (
              <Button
                fullWidth
                leftSection={<IconFingerprint size={18} />}
                loading={clockOut.isPending}
                onClick={() => clockOut.mutate()}
                color="var(--color-accent)"
              >
                Absen Pulang
              </Button>
            )}

            {!data.canClockIn && !data.canClockOut && (
              <Group gap={"xs"} justify="center" py={"xs"}>
                <IconCircleCheck size={18} color="lime" />
                <Text size="sm" c="dimmed">
                  Absensi hari ini sudah selesai
                </Text>
              </Group>
            )}
          </Stack>
        </Card>
      )}
    </AsyncStateView>
  );
}
