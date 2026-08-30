import type { StationType, WorkerActiveAssignment } from "@/types/api/worker.types";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";
import { Badge, Card, Divider, Group, Stack, Text } from "@mantine/core";

function getStationLabel(stationType: StationType) {
  switch (stationType) {
    case "WASHING":
      return "Cuci";
    case "IRONING":
      return "Setrika";
    case "PACKING":
      return "Packing";
  }
}
function getStatusBadge(status: WorkerActiveAssignment["status"]) {
  switch (status) {
    case "ASSIGNED":
      return { label: "Menunggu Diproses", color: "yellow" };
    case "IN_PROGRESS":
      return { label: "Sedang Diproses", color: "blue" };
    case "ON_HOLD_BYPASS":
      return { label: "Menunggu Bypass", color: "orange" };
  }
}

export function WorkerActiveSummary({ assignment }: { assignment: WorkerActiveAssignment }) {
  const stationLabel = getStationLabel(assignment.stationType);
  const statusBadge = getStatusBadge(assignment.status);
  return (
    <Card withBorder shadow="sm" radius="lg" p="lg">
      <Stack gap="md">
        <Group justify="space-between" align="flex-start">
          <Stack gap={2}>
            <Text size="xs" c="dimmed">
              Tugas Aktif
            </Text>
            <Text fw={700} size="lg">
              {assignment.order.orderCode}
            </Text>
          </Stack>

          <Badge color={statusBadge.color} variant="light" size="lg">
            {statusBadge.label}
          </Badge>
        </Group>

        <Divider />

        <Group justify="space-between">
          <Text size="sm" c="dimmed">
            Station Kerja
          </Text>
          <Badge variant="light">{stationLabel}</Badge>
        </Group>

        <Group justify="space-between">
          <Text size="sm" c="dimmed">
            Diambil
          </Text>
          <Text size="sm">
            {formatFieldOpsDate(assignment.assignedAt)} · {formatFieldOpsTime(assignment.assignedAt)}
          </Text>
        </Group>

        {assignment.startedAt && (
          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              Mulai Diproses
            </Text>
            <Text size="sm">{formatFieldOpsTime(assignment.startedAt)}</Text>
          </Group>
        )}
      </Stack>
    </Card>
  );
}
