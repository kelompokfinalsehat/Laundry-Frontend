"use client";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { EmptyState } from "@/components/ui/EmptyState";
import { openActionConfirmModal } from "../shared/OpenActionConfirmModal";
import { useAvailable, useClaim } from "@/hooks/worker.hooks";
import { ActionIcon, Badge, Button, Group, Pagination, Paper, Select, Skeleton, Stack, Text } from "@mantine/core";
import { IconArrowNarrowDown, IconArrowNarrowUp } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const STATION_OPTIONS = [
  {
    value: "ALL",
    label: "Semua",
  },
  {
    value: "WASHING",
    label: "Cuci",
  },
  {
    value: "IRONING",
    label: "Setrika",
  },
  {
    value: "PACKING",
    label: "Packing",
  },
];

function getStationLabel(stationType: string) {
  if (stationType === "WASHING") {
    return "Cuci";
  }

  if (stationType === "IRONING") {
    return "Setrika";
  }

  if (stationType === "PACKING") {
    return "Packing";
  }

  return stationType;
}

export function WorkerAvailableAssignments() {
  const router = useRouter();

  const { availableQuery, stationType, sortOrder, setPage, handleStationFilter, handleSortChange } = useAvailable();

  const claim = useClaim();

  return (
    <Stack gap="md">
      {/* filter */}
      <Group justify="space-between" align="flex-end">
        <Select label="Stasiun" data={STATION_OPTIONS} value={stationType} onChange={handleStationFilter} w={180} />

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
              <EmptyState title="Belum ada tugas" description="Belum ada tugas yang tersedia untuk diambil." />
            ) : (
              response.data.map((assignment) => (
                <Paper key={assignment.id} withBorder radius="md" p="md">
                  <Group justify="space-between">
                    <Stack gap={4}>
                      <Badge color="yellow.7" variant="light" w="fit-content">
                        {getStationLabel(assignment.stationType)}
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
