"use client";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useHistoryDetail } from "@/hooks/worker.hooks";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";

import { Badge, Button, Card, Divider, Group, Paper, Skeleton, Stack, Text, ThemeIcon } from "@mantine/core";

import { IconArrowLeft, IconChecklist, IconClock, IconPackage } from "@tabler/icons-react";

import Link from "next/link";
import { useParams } from "next/navigation";

export function WorkerHistoryDetail() {
  const { assignmentId } = useParams<{ assignmentId: string }>();

  const detailQuery = useHistoryDetail(assignmentId);

  return (
    <Stack gap="md">
      <Button component={Link} href="/internal/worker/riwayat" variant="subtle" leftSection={<IconArrowLeft size={16} />} w="fit-content">
        Kembali ke Riwayat
      </Button>

      <AsyncStateView
        isLoading={detailQuery.isPending}
        isError={detailQuery.isError}
        error={detailQuery.error}
        data={detailQuery.data}
        onRetry={() => detailQuery.refetch()}
        skeleton={
          <Stack gap="md">
            <Skeleton height={120} radius="lg" />
            <Skeleton height={180} radius="lg" />
            <Skeleton height={170} radius="lg" />
          </Stack>
        }
      >
        {(assignment) => {
          const stationLabel = assignment.stationType === "WASHING" ? "Cuci" : assignment.stationType === "IRONING" ? "Setrika" : "Packing";

          return (
            <Stack gap="md">
              {/* Summary */}
              <Card withBorder shadow="sm" radius="lg" p="lg">
                <Stack gap="md">
                  <Group justify="space-between" align="flex-start" wrap="nowrap">
                    <Group gap="sm" wrap="nowrap">
                      <ThemeIcon size={44} radius="xl" variant="light" color="blue">
                        <IconChecklist size={22} />
                      </ThemeIcon>

                      <Stack gap={2}>
                        <Text size="xs" c="dimmed">
                          Riwayat Tugas
                        </Text>

                        <Text fw={700} size="lg">
                          {assignment.orderCode}
                        </Text>
                      </Stack>
                    </Group>

                    <Badge variant="light" color="blue" size="lg">
                      {stationLabel}
                    </Badge>
                  </Group>

                  <Divider />

                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">
                      Status
                    </Text>

                    <Badge variant="light" color="green">
                      Selesai
                    </Badge>
                  </Group>
                </Stack>
              </Card>

              {/* Items */}
              <Card withBorder radius="lg" p="lg">
                <Stack gap="md">
                  <Group gap="sm">
                    <ThemeIcon variant="light" radius="xl" color="blue">
                      <IconPackage size={18} />
                    </ThemeIcon>

                    <Text fw={600}>Item Laundry</Text>
                  </Group>

                  <Divider />

                  <Stack gap="sm">
                    {assignment.items.map((item) => (
                      <Paper key={item.id} withBorder radius="md" p="md">
                        <Group justify="space-between" align="center" wrap="nowrap">
                          <Stack gap={2}>
                            <Text size="sm" fw={600}>
                              {item.name}
                            </Text>

                            <Text size="xs" c="dimmed">
                              Jumlah Laundry
                            </Text>
                          </Stack>

                          <Badge variant="light" color="blue" size="lg">
                            {item.quantity} pcs
                          </Badge>
                        </Group>
                      </Paper>
                    ))}
                  </Stack>
                </Stack>
              </Card>

              {/* Timeline */}
              <Card withBorder radius="lg" p="lg">
                <Stack gap="md">
                  <Group gap="sm">
                    <ThemeIcon variant="light" radius="xl" color="blue">
                      <IconClock size={18} />
                    </ThemeIcon>

                    <Text fw={600}>Riwayat Waktu</Text>
                  </Group>

                  <Divider />

                  <Group justify="space-between" align="flex-start">
                    <Text size="sm" c="dimmed">
                      Tugas Diambil
                    </Text>

                    <Stack gap={0} align="flex-end">
                      <Text size="sm" fw={500}>
                        {formatFieldOpsDate(assignment.assignedAt)}
                      </Text>

                      <Text size="xs" c="dimmed">
                        {formatFieldOpsTime(assignment.assignedAt)}
                      </Text>
                    </Stack>
                  </Group>

                  <Group justify="space-between" align="flex-start">
                    <Text size="sm" c="dimmed">
                      Mulai Diproses
                    </Text>

                    <Stack gap={0} align="flex-end">
                      <Text size="sm" fw={500}>
                        {formatFieldOpsDate(assignment.startedAt)}
                      </Text>

                      <Text size="xs" c="dimmed">
                        {formatFieldOpsTime(assignment.startedAt)}
                      </Text>
                    </Stack>
                  </Group>

                  <Group justify="space-between" align="flex-start">
                    <Text size="sm" c="dimmed">
                      Tugas Selesai
                    </Text>

                    <Stack gap={0} align="flex-end">
                      <Text size="sm" fw={500}>
                        {formatFieldOpsDate(assignment.completedAt)}
                      </Text>

                      <Text size="xs" c="dimmed">
                        {formatFieldOpsTime(assignment.completedAt)}
                      </Text>
                    </Stack>
                  </Group>
                </Stack>
              </Card>
            </Stack>
          );
        }}
      </AsyncStateView>
    </Stack>
  );
}
