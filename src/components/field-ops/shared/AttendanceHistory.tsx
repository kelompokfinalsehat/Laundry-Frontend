"use client";

import { ActionIcon, Group, Pagination, Paper, Select, Skeleton, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconArrowsSort } from "@tabler/icons-react";

import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";
import { useHistoryList } from "@/hooks/attendance.hooks";
import { AsyncStateView } from "@/components/ui/AsyncStateView";

export function AttendanceHistoryList() {
  const {
    items,
    meta,
    isPending,
    isError,
    error,
    refetch,
    page,
    period,
    sortOrder,
    setPage,
    handlePeriodChange,
    handleSortChange,
  } = useHistoryList();

  return (
    <Stack gap="md">
      {/* --- BAGIAN FILTER UI (selalu tampil, tidak ikut loading/error) --- */}
      <Group justify="space-between" align="flex-end">
        <Select
          label="Riwayat Absensi"
          value={period}
          onChange={handlePeriodChange}
          data={[
            { value: "ALL", label: "Semua" },
            { value: "THIS_WEEK", label: "Minggu Ini" },
            { value: "THIS_MONTH", label: "Bulan Ini" },
          ]}
          w={160}
        />

        <ActionIcon
          variant="light"
          size="lg"
          aria-label={sortOrder === "desc" ? "Urutkan dari terlama" : "Urutkan dari terbaru"}
          onClick={handleSortChange}
        >
          <IconArrowsSort size={18} />
        </ActionIcon>
      </Group>

      {/* --- BAGIAN LIST: loading/error/empty/sukses ditangani AsyncStateView,
          sama seperti pola di AttendanceStatus.tsx --- */}
      <AsyncStateView
        isLoading={isPending}
        isError={isError}
        error={error}
        data={items}
        isEmpty={(data) => data.length === 0}
        onRetry={refetch}
        emptyTitle="Belum ada riwayat"
        emptyDescription="Belum ada riwayat absensi pada periode ini."
        skeleton={
          <Stack gap="sm">
            <Skeleton height={72} radius="md" />
            <Skeleton height={72} radius="md" />
            <Skeleton height={72} radius="md" />
          </Stack>
        }
      >
        {(list) => (
          <Stack gap="md">
            {list.map((attendance) => (
              <Paper key={attendance.id} withBorder radius="md" p="md">
                <Stack gap="sm">
                  <Text fw={600} size="sm">
                    {formatFieldOpsDate(attendance.attendanceDate)}
                  </Text>

                  <SimpleGrid cols={2}>
                    <Stack gap={2}>
                      <Text size="xs" c="dimmed" tt="uppercase">
                        Masuk
                      </Text>
                      <Text size="sm" fw={500}>
                        {formatFieldOpsTime(attendance.clockInAt)}
                      </Text>
                    </Stack>

                    <Stack gap={2}>
                      <Text size="xs" c="dimmed" tt="uppercase">
                        Pulang
                      </Text>
                      <Text size="sm" fw={500}>
                        {formatFieldOpsTime(attendance.clockOutAt)}
                      </Text>
                    </Stack>
                  </SimpleGrid>
                </Stack>
              </Paper>
            ))}

            {/* --- BAGIAN PAGINATION --- */}
            {meta && meta.totalItems > 0 && (
              <>
                <Text size="xs" c="dimmed" ta="center">
                  Menampilkan {(meta.page - 1) * meta.pageSize + 1}–
                  {Math.min(meta.page * meta.pageSize, meta.totalItems)} dari {meta.totalItems} data
                </Text>

                {meta.totalPages > 1 && (
                  <Group justify="center">
                    <Pagination value={page} onChange={setPage} total={meta.totalPages} size="sm" radius="lg" />
                  </Group>
                )}
              </>
            )}
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}