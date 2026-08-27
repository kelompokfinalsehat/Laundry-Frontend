"use client";

import { ActionIcon, Badge, Button, Card, Group, Pagination, Select, Skeleton, Stack, Text } from "@mantine/core";

import { modals } from "@mantine/modals";

import { IconArrowsSort } from "@tabler/icons-react";

import { useRouter } from "next/navigation";

import { useClaimAssignment, useWorkerAvailableAssignments } from "@/hooks/worker.hooks";

import type { StationType } from "@/types/api/worker.types";

import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";

const stationOptions = [
  {
    value: "ALL",
    label: "Semua",
  },
  {
    value: "WASHING",
    label: "Washing",
  },
  {
    value: "IRONING",
    label: "Ironing",
  },
  {
    value: "PACKING",
    label: "Packing",
  },
];

function getStationLabel(stationType: StationType) {
  switch (stationType) {
    case "WASHING":
      return "Washing";

    case "IRONING":
      return "Ironing";

    case "PACKING":
      return "Packing";
  }
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

    stationType,
    sortOrder,

    handleStationTypeChange,
    handleSortOrderChange,
  } = useWorkerAvailableAssignments();

  const claimMutation = useClaimAssignment();

  function handleClaim(assignmentId: string, orderCode: string, stationLabel: string) {
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
            Station: {stationLabel}
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
            router.push("/internal/worker/tugas/aktif");
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
          Pilih tugas yang tersedia untuk mulai bekerja.
        </Text>
      </Stack>

      {/* FILTER */}

      <Group justify="space-between" align="flex-end">
        <Select
          label="Station"
          data={stationOptions}
          value={stationType}
          onChange={(value) => {
            if (!value) return;

            handleStationTypeChange(value as StationType | "ALL");
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
            Belum ada tugas Worker tersedia saat ini.
          </Text>
        </Card>
      )}

      {/* ITEMS */}

      {items.map((item) => {
        const stationLabel = getStationLabel(item.stationType);

        return (
          <Card key={item.id} withBorder radius="lg" p="md">
            <Stack gap="sm">
              <Group justify="space-between" align="flex-start">
                <Stack gap={3}>
                  <Badge variant="light" color="yellow" w="fit-content">
                    {stationLabel}
                  </Badge>

                  <Text fw={600}>{item.order.orderCode}</Text>
                </Stack>

                <Button
                  size="xs"
                  variant="light"
                  loading={claimMutation.isPending}
                  onClick={() => handleClaim(item.id, item.order.orderCode, stationLabel)}
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
