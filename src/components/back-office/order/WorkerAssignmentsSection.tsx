"use client";

import {
  Badge,
  Paper,
  Stack,
  Text,
  Timeline,
} from "@mantine/core";

import {
  IconCheck,
  IconCircle,
} from "@tabler/icons-react";

import type {
  OrderDetail,
} from "@/types/api/order.types";

type Props = {
  assignments: OrderDetail["workerAssignments"];
};

const STATION_TYPE: Record<
  "WASHING" | "IRONING" | "PACKING",
  string
> = {
  WASHING: "Pencucian",
  IRONING: "Penyetrikaan",
  PACKING: "Pengemasan",
};

const ASSIGNMENT_STATUS: Record<
  | "QUEUED"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "ON_HOLD_BYPASS"
  | "COMPLETED",
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
    label: "Sedang Dikerjakan",
    color: "cyan",
  },
  ON_HOLD_BYPASS: {
    label: "Menunggu Bypass",
    color: "orange",
  },
  COMPLETED: {
    label: "Selesai",
    color: "green",
  },
};

function formatDateTime(
  value: string | null,
) {
  if (!value) {
    return null;
  }

  return new Intl.DateTimeFormat(
    "id-ID",
    {
      dateStyle: "medium",
      timeStyle: "short",
    },
  ).format(new Date(value));
}

export function WorkerAssignmentsSection({
  assignments,
}: Props) {
  return (
    <Paper
      withBorder
      p="lg"
      radius="md"
    >
      <Stack gap="md">
        <Text fw={600}>
          Proses Laundry
        </Text>

        {assignments.length === 0 ? (
          <Text
            size="sm"
            c="var(--color-text-secondary)"
          >
            Proses laundry belum dibuat.
          </Text>
        ) : (
          <Timeline
            active={assignments.length}
            bulletSize={28}
            lineWidth={2}
          >
            {assignments.map(
              (assignment) => {
                const status =
                  ASSIGNMENT_STATUS[
                    assignment.status
                  ];

                const completed =
                  assignment.status ===
                  "COMPLETED";

                return (
                  <Timeline.Item
                    key={assignment.id}
                    bullet={
                      completed ? (
                        <IconCheck size={14} />
                      ) : (
                        <IconCircle size={10} />
                      )
                    }
                    title={
                      <Text
                        size="sm"
                        fw={600}
                      >
                        {
                          STATION_TYPE[
                            assignment.stationType
                          ]
                        }
                      </Text>
                    }
                  >
                    <Stack
                      gap={6}
                      mt={6}
                    >
                      <Badge
                        variant="light"
                        color={status.color}
                        w="fit-content"
                      >
                        {status.label}
                      </Badge>

                      <Text
                        size="sm"
                        c="var(--color-text-primary)"
                      >
                        Worker:{" "}
                        {assignment.worker?.name ??
                          "Belum diambil"}
                      </Text>

                      {assignment.assignedAt && (
                        <Text
                          size="xs"
                          c="var(--color-text-secondary)"
                        >
                          Diambil:{" "}
                          {formatDateTime(
                            assignment.assignedAt,
                          )}
                        </Text>
                      )}

                      {assignment.startedAt && (
                        <Text
                          size="xs"
                          c="var(--color-text-secondary)"
                        >
                          Mulai dikerjakan:{" "}
                          {formatDateTime(
                            assignment.startedAt,
                          )}
                        </Text>
                      )}

                      {assignment.completedAt && (
                        <Text
                          size="xs"
                          c="var(--color-text-secondary)"
                        >
                          Selesai:{" "}
                          {formatDateTime(
                            assignment.completedAt,
                          )}
                        </Text>
                      )}
                    </Stack>
                  </Timeline.Item>
                );
              },
            )}
          </Timeline>
        )}
      </Stack>
    </Paper>
  );
}