"use client";

import { Badge, Paper, Stack, Text, Timeline } from "@mantine/core";
import { IconCheck, IconCircle } from "@tabler/icons-react";
import type { OrderDetail } from "@/types/api/order.types";

type Props = {
  assignments: OrderDetail["driverAssignments"];
};

const TASK_TYPE: Record<"PICKUP" | "DELIVERY", string> = {
  PICKUP: "Pickup",
  DELIVERY: "Pengantaran",
};

const ASSIGNMENT_STATUS: Record<
  "QUEUED" | "ASSIGNED" | "IN_PROGRESS" | "COMPLETED",
  {
    label: string;
    color: string;
  }
> = {
  QUEUED: {
    label: "Menunggu Diambil",
    color: "gray",
  },
  ASSIGNED: {
    label: "Sudah Diambil",
    color: "blue",
  },
  IN_PROGRESS: {
    label: "Dalam Proses",
    color: "cyan",
  },
  COMPLETED: {
    label: "Selesai",
    color: "green",
  },
};

function formatDateTime(value: string | null) {
  if (!value) {
    return null;
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function DriverAssignmentsSection({ assignments }: Props) {
  return (
    <Paper withBorder p="lg" radius="md">
      <Stack gap="md">
        <Text fw={600}>Riwayat Driver</Text>

        {assignments.length === 0 ? (
          <Text size="sm" c="var(--color-text-secondary)">
            Belum ada assignment driver.
          </Text>
        ) : (
          <Timeline active={assignments.length} bulletSize={28} lineWidth={2}>
            {assignments.map((assignment) => {
              const status = ASSIGNMENT_STATUS[assignment.status];

              const completed = assignment.status === "COMPLETED";

              return (
                <Timeline.Item
                  key={assignment.id}
                  bullet={completed ? <IconCheck size={14} /> : <IconCircle size={10} />}
                  title={
                    <Text size="sm" fw={600}>
                      {TASK_TYPE[assignment.taskType]}
                    </Text>
                  }
                >
                  <Stack gap={6} mt={6}>
                    <Badge variant="light" color={status.color} w="fit-content">
                      {status.label}
                    </Badge>

                    <Text size="sm" c="var(--color-text-primary)">
                      Driver: {assignment.driver?.name ?? "Belum diambil"}
                    </Text>

                    {assignment.assignedAt && (
                      <Text size="xs" c="var(--color-text-secondary)">
                        Diambil: {formatDateTime(assignment.assignedAt)}
                      </Text>
                    )}

                    {assignment.taskType === "PICKUP" && assignment.pickedUpAt && (
                      <Text size="xs" c="var(--color-text-secondary)">
                        Pickup: {formatDateTime(assignment.pickedUpAt)}
                      </Text>
                    )}

                    {assignment.taskType === "DELIVERY" && assignment.deliveredAt && (
                      <Text size="xs" c="var(--color-text-secondary)">
                        Dikirim: {formatDateTime(assignment.deliveredAt)}
                      </Text>
                    )}

                    {assignment.completedAt && (
                      <Text size="xs" c="var(--color-text-secondary)">
                        Selesai: {formatDateTime(assignment.completedAt)}
                      </Text>
                    )}
                  </Stack>
                </Timeline.Item>
              );
            })}
          </Timeline>
        )}
      </Stack>
    </Paper>
  );
}
