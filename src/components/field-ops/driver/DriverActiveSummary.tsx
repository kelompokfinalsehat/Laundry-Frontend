import type { DriverActiveAssignment, TaskType } from "@/types/api/driver.types";
import { Badge, Card, Divider, Group, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconClipboardList, IconTruckDelivery } from "@tabler/icons-react";

function getTaskTypeLabel(taskType: TaskType) {
  switch (taskType) {
    case "PICKUP":
      return "Penjemputan";
    case "DELIVERY":
      return "Pengantaran";
  }
}

function getStateBadge(state: DriverActiveAssignment["state"]) {
  switch (state) {
    case "PICKUP_ASSIGNED":
      return { label: "Siap Jemput", color: "yellow" };
    case "PICKUP_TO_CUSTOMER":
      return { label: "Menuju Pelanggan", color: "blue" };
    case "PICKUP_TO_OUTLET":
      return { label: "Menuju Outlet", color: "blue" };
    case "DELIVERY_ASSIGNED":
      return { label: "Siap Antar", color: "yellow" };
    case "DELIVERY_TO_CUSTOMER":
      return { label: "Menuju Pelanggan", color: "blue" };
  }
}

export function DriverActiveSummary({ assignment }: { assignment: DriverActiveAssignment }) {
  const taskTypeLabel = getTaskTypeLabel(assignment.taskType);
  const stateBadge = getStateBadge(assignment.state);

  return (
    <Card withBorder shadow="sm" radius="lg" p="lg">
      <Stack gap="md">
        <Group justify="space-between" align="flex-start">
          <Group align="center" gap="sm">
            <ThemeIcon size={44} radius="xl" variant="light" color="blue">
              <IconTruckDelivery size={22} />
            </ThemeIcon>
            <Stack gap={2}>
              <Text size="xs" c="dimmed">
                Tugas Aktif
              </Text>
              <Text fw={700} size="lg">
                {assignment.order.orderCode}
              </Text>
            </Stack>
          </Group>

          <Badge color={stateBadge.color} variant="light" size="lg" radius="sm">
            {stateBadge.label}
          </Badge>
        </Group>

        <Divider />

        <Group justify="space-between" align="center">
          <Group align="center" gap="sm">
            <ThemeIcon size={32} radius="xl" variant="light" color="gray">
              <IconClipboardList size={16} />
            </ThemeIcon>
            <Text size="sm" c="dimmed">
              Jenis Tugas
            </Text>
          </Group>
          <Badge variant="light" color="grape" radius="sm">
            {taskTypeLabel}
          </Badge>
        </Group>
      </Stack>
    </Card>
  );
}
