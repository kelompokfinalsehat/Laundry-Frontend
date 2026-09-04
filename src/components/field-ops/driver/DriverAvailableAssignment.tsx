"use client";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { EmptyState } from "@/components/ui/EmptyState";
import { useAvailable, useClaim } from "@/hooks/driver.hooks";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";

import { ActionIcon, Badge, Button, Card, Group, Pagination, Paper, Select, Skeleton, Stack, Text, ThemeIcon } from "@mantine/core";

import { IconArrowNarrowDown, IconArrowNarrowUp, IconClock, IconMapPin } from "@tabler/icons-react";

import { useRouter } from "next/navigation";

import { openActionConfirmModal } from "../shared/OpenActionConfirmModal";

const TASK_OPTION = [
  { value: "ALL", label: "Semua" },
  { value: "PICKUP", label: "Jemput" },
  { value: "DELIVERY", label: "Antar" },
];

function getTaskLabel(taskType: string) {
  if (taskType === "PICKUP") return "Jemput";
  if (taskType === "DELIVERY") return "Antar";

  return taskType;
}

export function DriverAvailableAssignments() {
  const router = useRouter();

  const { availableQuery, taskType, sortOrder, setPage, handlerTaskTypeFilter, handleSortChange } = useAvailable();

  const claim = useClaim();

  return (
    <Stack gap="md">
      {/* Filter */}
      <Group justify="space-between" align="flex-end">
        <Select label="Tipe Tugas" data={TASK_OPTION} value={taskType} onChange={handlerTaskTypeFilter} w={180} />

        <Group gap="xs">
          <ActionIcon
            variant={sortOrder === "asc" ? "filled" : "light"}
            size="lg"
            aria-label="Urutkan terlama"
            onClick={() => handleSortChange("asc")}
          >
            <IconArrowNarrowUp size={18} />
          </ActionIcon>

          <ActionIcon
            variant={sortOrder === "desc" ? "filled" : "light"}
            size="lg"
            aria-label="Urutkan terbaru"
            onClick={() => handleSortChange("desc")}
          >
            <IconArrowNarrowDown size={18} />
          </ActionIcon>
        </Group>
      </Group>

      {/* Query state */}
      <AsyncStateView
        isLoading={availableQuery.isPending}
        isError={availableQuery.isError}
        error={availableQuery.error}
        data={availableQuery.data}
        onRetry={() => availableQuery.refetch()}
        skeleton={
          <Stack gap="sm">
            <Skeleton height={180} radius="lg" />
            <Skeleton height={180} radius="lg" />
            <Skeleton height={180} radius="lg" />
          </Stack>
        }
      >
        {(response) => (
          <Stack gap="md">
            {response.data.length === 0 ? (
              <EmptyState title="Belum ada tugas" description="Belum ada tugas yang tersedia untuk diambil." />
            ) : (
              response.data.map((assignment) => (
                <Card key={assignment.id} withBorder radius="lg" padding="lg" shadow="xs">
                  <Stack gap="md">
                    {/* Jenis tugas */}

                    <Badge variant="light" color={assignment.taskType === "PICKUP" ? "orange" : "blue"} size="lg">
                      {getTaskLabel(assignment.taskType)}
                    </Badge>

                    {/* Alamat */}
                    <Group align="flex-start" wrap="nowrap" gap="sm">
                      <ThemeIcon variant="light" color="blue" radius="xl" size="lg">
                        <IconMapPin size={18} />
                      </ThemeIcon>

                      <Stack gap={2}>
                        <Text size="xs" c="dimmed">
                          Alamat Tujuan
                        </Text>

                        <Text
                          size="sm"
                          fw={600}
                          style={{
                            lineHeight: 1.5,
                          }}
                        >
                          {assignment.order.addressSnapshot}
                        </Text>
                      </Stack>
                    </Group>

                    {assignment.taskType === "PICKUP" &&
                      assignment.order.pickupScheduledAt && ( //jadwal jemput hanya untuk pickup
                        <Paper withBorder radius="md" p="sm" bg="var(--color-primary-light)">
                          <Group gap="sm" wrap="nowrap">
                            <ThemeIcon variant="light" color="blue" radius="xl" size="md">
                              <IconClock size={16} />
                            </ThemeIcon>

                            <Stack gap={1}>
                              <Text size="xs" c="dimmed">
                                Jadwal Jemput
                              </Text>

                              <Text size="sm" fw={600}>
                                {formatFieldOpsDate(assignment.order.pickupScheduledAt)}, {formatFieldOpsTime(assignment.order.pickupScheduledAt)}
                              </Text>
                            </Stack>
                          </Group>
                        </Paper>
                      )}

                    {/* Action */}
                    <Button
                      fullWidth
                      radius="md"
                      loading={claim.isPending}
                      style={{
                        backgroundColor: "var(--color-accent)",
                        color: "var(--color-text-on-accent)",
                      }}
                      onClick={() =>
                        openActionConfirmModal({
                          title: "Ambil tugas?",
                          message: `Ambil tugas ${assignment.order.orderCode}?`,
                          confirmLabel: "Ambil Tugas",
                          onConfirm: () =>
                            claim.mutate(assignment.id, {
                              onSuccess: () => {
                                router.push("/internal/driver/tugas/aktif");
                              },
                            }),
                        })
                      }
                    >
                      Ambil Tugas
                    </Button>
                  </Stack>
                </Card>
              ))
            )}

            {/* Pagination */}
            {response.meta.totalPages > 1 && (
              <Group justify="center">
                <Pagination value={response.meta.page} total={response.meta.totalPages} onChange={setPage} />
              </Group>
            )}

            <Text size="xs" c="dimmed" ta="center">
              Total {response.meta.totalItems} tugas tersedia
            </Text>
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}
