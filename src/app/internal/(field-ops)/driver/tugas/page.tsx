"use client";

import { ActionIcon, Badge, Button, Card, Group, Pagination, Select, Skeleton, Stack, Text } from "@mantine/core";

import { modals } from "@mantine/modals";

import { IconArrowsSort } from "@tabler/icons-react";

import { useRouter } from "next/navigation";

import { useClaimDriverAssignment, useDriverAvailableAssignments } from "@/hooks/driver.hooks";

import type { TaskType } from "@/types/api/driver.types";

import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";

const taskTypeOptions = [
  {
    value: "ALL",
    label: "Semua",
  },
  {
    value: "PICKUP",
    label: "Pickup",
  },
  {
    value: "DELIVERY",
    label: "Delivery",
  },
];

function getTaskTypeLabel(taskType: TaskType) {
  return taskType === "PICKUP" ? "Pickup" : "Delivery";
}

export default function Page() {
  const router = useRouter();

  const {
    items,
    meta,

    isPending,
    isError,
    error,

    page,
    setPage,

    taskType,
    sortOrder,

    handleTaskTypeChange,
    handleSortOrderChange,
  } = useDriverAvailableAssignments();

  const claimMutation = useClaimDriverAssignment();

  function handleClaim(assignmentId: string, orderCode: string, taskLabel: string) {
    modals.openConfirmModal({
      title: "Ambil tugas?",

      children: (
        <Stack gap={4}>
          <Text size="sm">
            Kamu akan mengambil tugas{" "}
            <Text component="span" fw={600}>
              {orderCode}
            </Text>
            .
          </Text>

          <Text size="sm" c="dimmed">
            Jenis tugas: {taskLabel}
          </Text>
        </Stack>
      ),

      labels: {
        confirm: "Ambil Tugas",
        cancel: "Batal",
      },

      confirmProps: {
        loading: claimMutation.isPending,
      },

      onConfirm: () => {
        claimMutation.mutate(assignmentId, {
          onSuccess: () => {
            router.push("/internal/driver/tugas/aktif");
          },
        });
      },
    });
  }

  if (isPending) {
    return (
      <Stack gap="md">
        <Skeleton height={36} />

        <Skeleton height={100} />
        <Skeleton height={100} />
        <Skeleton height={100} />
      </Stack>
    );
  }

  if (isError) {
    return (
      <Card withBorder radius="lg" p="lg">
        <Stack gap="xs">
          <Text fw={600} c="red">
            Gagal memuat tugas
          </Text>

          <Text size="sm" c="dimmed">
            {error instanceof Error ? error.message : "Terjadi kesalahan."}
          </Text>
        </Stack>
      </Card>
    );
  }

  return (
    <Stack gap="md">
      <Stack gap={2}>
        <Text fw={700} size="lg">
          Tugas Tersedia
        </Text>

        <Text size="sm" c="dimmed">
          Pilih tugas pickup atau delivery yang tersedia.
        </Text>
      </Stack>

      {/* FILTER */}

      <Group justify="space-between" align="flex-end">
        <Select
          label="Jenis Tugas"
          data={taskTypeOptions}
          value={taskType}
          onChange={(value) => {
            if (!value) return;

            handleTaskTypeChange(value as TaskType | "ALL");
          }}
          w={180}
        />

        <ActionIcon variant="light" size="lg" onClick={() => handleSortOrderChange(sortOrder === "desc" ? "asc" : "desc")} aria-label="Ubah urutan">
          <IconArrowsSort size={18} />
        </ActionIcon>
      </Group>

      {/* EMPTY */}

      {items.length === 0 && (
        <Card withBorder radius="lg" p="xl">
          <Text size="sm" c="dimmed" ta="center">
            Belum ada tugas Driver tersedia saat ini.
          </Text>
        </Card>
      )}

      {/* ITEMS */}

      {items.map((item) => {
        const taskLabel = getTaskTypeLabel(item.taskType);

        return (
          <Card key={item.id} withBorder radius="lg" p="md">
            <Stack gap="sm">
              <Group justify="space-between" align="flex-start">
                <Stack gap={3}>
                  <Badge variant="light" color={item.taskType === "PICKUP" ? "blue" : "green"} w="fit-content">
                    {taskLabel}
                  </Badge>

                  <Text fw={600}>{item.order.orderCode}</Text>
                </Stack>

                <Button
                  size="xs"
                  variant="light"
                  loading={claimMutation.isPending}
                  onClick={() => handleClaim(item.id, item.order.orderCode, taskLabel)}
                >
                  Ambil Tugas
                </Button>
              </Group>

              <Text size="xs" c="dimmed">
                {formatFieldOpsDate(item.createdAt)} · {formatFieldOpsTime(item.createdAt)}
              </Text>
            </Stack>
          </Card>
        );
      })}

      {/* PAGINATION */}

      {meta && meta.totalPages > 1 && (
        <Group justify="center">
          <Pagination value={page} total={meta.totalPages} onChange={setPage} />
        </Group>
      )}
    </Stack>
  );
}
