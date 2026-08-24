"use client";

import { Badge, Button, Card, Divider, Group, Loader, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconAlertTriangle, IconCalendar, IconFingerprint, IconRefresh } from "@tabler/icons-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { AttendanceApi } from "@/lib/api/attendance.api";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";
import type { WorkStatus } from "@/types/api/attendance.types";
import { ErrorState } from "@/components/ui/ErrorState";

dayjs.extend(utc);
dayjs.extend(timezone);

const FIELD_OPS_TIMEZONE = "Asia/Jakarta";

const attendanceApi = new AttendanceApi();

const ATTENDANCE_QUERY_KEY = ["attendance"] as const;
const ATTENDANCE_STATUS_QUERY_KEY = [...ATTENDANCE_QUERY_KEY, "status"] as const;

type DateValue = string | Date | null | undefined;

function isDateToday(value: DateValue): boolean {
  if (!value) return false;
  const date = dayjs(value);
  if (!date.isValid()) return false;
  return date.tz(FIELD_OPS_TIMEZONE).isSame(dayjs().tz(FIELD_OPS_TIMEZONE), "day");
}

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
  const queryClient = useQueryClient();

  const statusQuery = useQuery({
    queryKey: ATTENDANCE_STATUS_QUERY_KEY,
    queryFn: () => attendanceApi.getStatus(),
  });

  const clockInMutation = useMutation({
    mutationFn: () => attendanceApi.clockIn(),
    onSuccess: async () => {
      notifications.show({
        title: "Absensi berhasil",
        message: "Absen masuk berhasil.",
        color: "lime",
      });
      await queryClient.invalidateQueries({ queryKey: ATTENDANCE_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Absen masuk gagal",
        message: error.message,
        color: "red",
      });
    },
  });

  const clockOutMutation = useMutation({
    mutationFn: () => attendanceApi.clockOut(),
    onSuccess: async () => {
      notifications.show({
        title: "Absensi berhasil",
        message: "Absen pulang berhasil.",
        color: "lime",
      });
      await queryClient.invalidateQueries({ queryKey: ATTENDANCE_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Absen pulang gagal",
        message: error.message,
        color: "red",
      });
    },
  });

  if (statusQuery.isPending) {
    return (
      <Card withBorder shadow="sm" radius="lg" p="lg">
        <Group justify="center" py="xl">
          <Loader />
        </Group>
      </Card>
    );
  }

  if (statusQuery.isError) {
    return (
      <Card withBorder shadow="sm" radius="lg" p="lg">
        <Stack gap="md">
          <Group justify="space-between">
            <Text fw={600} size="lg">
              Status Absensi
            </Text>
          </Group>

          <Divider />

          <Text size="sm" c="dimmed">
            {statusQuery.error.message}
            
          </Text>

          <Button
            type="button"
            variant="light"
            leftSection={<IconRefresh size={18} />}
            onClick={() => statusQuery.refetch()}
          >
            Coba Lagi
          </Button>
        </Stack>
      </Card>
    );
  }

  const { workStatus, attendanceDate, clockInAt, clockOutAt, canClockIn, canClockOut } = statusQuery.data;
  console.log({ attendanceDate, clockInAt, clockOutAt, canClockIn, canClockOut });

  const isCarryOverAttendance = !isDateToday(attendanceDate) && !!clockInAt && !clockOutAt;
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

        {isCarryOverAttendance && (
          <Paper withBorder radius="md" p="md" bg="var(--mantine-color-yellow-0)">
            <Group gap="xs" align="flex-start">
              <IconAlertTriangle
                size={18}
                color="var(--mantine-color-yellow-7)"
                style={{ flexShrink: 0, marginTop: 2 }}
              />
              <Stack gap={2}>
                <Text size="sm" fw={600} c="yellow.8">
                  Absen pulang kemarin belum tercatat
                </Text>
                <Text size="xs" c="dimmed">
                  Selesaikan absen pulang terlebih dahulu. Setelah itu kamu bisa absen masuk hari ini dan klaim
                  pekerjaan.
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
              {isCarryOverAttendance && (
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
}
