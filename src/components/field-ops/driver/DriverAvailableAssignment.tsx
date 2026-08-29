"use client";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { EmptyState } from "@/components/ui/EmptyState";
import { useAvailable, useClaim } from "@/hooks/driver.hooks";
import {
  ActionIcon,
  Badge,
  Button,
  Group,
  Pagination,
  Paper,
  Select,
  Skeleton,
  Stack,
  Text,
} from "@mantine/core";
import { IconArrowNarrowDown, IconArrowNarrowUp } from "@tabler/icons-react";
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
  const { availableQuery, taskType, sortOrder, setPage, handlerTaskTypeFilter, handleSortChange } =
    useAvailable();
  const claim = useClaim();
  return (
    <Stack gap="md">
      {/* filter */}
      <Group justify="space-between" align="flex-end">
        <Select
          label="Stasiun"
          data={TASK_OPTION}
          value={taskType}
          onChange={handlerTaskTypeFilter}
          w={180}
        />

        <Group>
          <ActionIcon
            variant={sortOrder === "asc" ? "filled" : "light"}
            size={"lg"}
            aria-label="Urutkan terlama"
            onClick={() => handleSortChange("asc")}
          >
            <IconArrowNarrowUp size={18} />
          </ActionIcon>
          <ActionIcon
            variant={sortOrder === "desc" ? "filled" : "light"}
            size={"lg"}
            aria-label="Urutkan terbaru"
            onClick={() => handleSortChange("desc")}
          >
            <IconArrowNarrowDown size={18} />
          </ActionIcon>
        </Group>
      </Group>

      {/* query state */}
      <AsyncStateView
        isLoading={availableQuery.isPending}
        isError={availableQuery.isError}
        error={availableQuery.error}
        data={availableQuery.data}
        onRetry={() => availableQuery.refetch()}
        skeleton={
          <Stack gap="sm">
            <Skeleton height={70} radius="md" />
            <Skeleton height={70} radius="md" />
            <Skeleton height={70} radius="md" />
          </Stack>
        }
      >
        {(response) => (
          <Stack gap="md">
            {/* assignment list */}
            {response.data.length === 0 ? (
              <EmptyState
                title="Belum ada tugas"
                description="Belum ada tugas yang tersedia untuk diambil."
              />
            ) : (
              response.data.map((assignment) => (
                <Paper key={assignment.id} withBorder radius="md" p="md">
                  <Group justify="space-between">
                    <Stack gap={4}>
                      <Badge color="yellow.7" variant="light" w="fit-content">
                        {getTaskLabel(assignment.taskType)}
                      </Badge>

                      <Text size="sm" fw={600}>
                        {assignment.order.orderCode}
                      </Text>
                    </Stack>

                    <Button
                      size="xs"
                      variant="light"
                      loading={claim.isPending}
                      onClick={() =>
                        openActionConfirmModal({
                          title: "Ambil tugas?",
                          message: `Ambil tugas ${assignment.order.orderCode}?`,
                          confirmLabel: "Ambil Tugas",
                          onConfirm: () =>
                            claim.mutate(assignment.id, {
                              onSuccess: () => {
                                router.push("/internal/worker/tugas/aktif");
                              },
                            }),
                        })
                      }
                    >
                      Ambil Tugas
                    </Button>
                  </Group>
                </Paper>
              ))
            )}

            {/* pagination */}
            {response.meta.totalPages > 1 && (
              <Group justify="center">
                <Pagination
                  value={response.meta.page}
                  total={response.meta.totalPages}
                  onChange={setPage}
                />
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
