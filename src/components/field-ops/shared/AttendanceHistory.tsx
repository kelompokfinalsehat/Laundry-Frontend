"use client";

import { ActionIcon, Group, Loader, Pagination, Paper, Select, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconArrowsSort } from "@tabler/icons-react";

// Sesuaikan path import ini dengan struktur folder Anda
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";
import { useHistoryList } from "@/hooks/attendance.hooks";

export function AttendanceHistoryList() {
  const { historyQuery, page, period, sortOrder, setPage, handlePeriodChange, handleSortChange } = useHistoryList();

  return (
    <Stack gap="md">
      {/* --- BAGIAN FILTER UI --- */}
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

      {/* --- BAGIAN LOADING STATE --- */}
      {historyQuery.isPending && (
        <Paper withBorder radius="md" p="xl">
          <Group justify="center">
            <Loader />
          </Group>
        </Paper>
      )}

      {/* --- BAGIAN ERROR STATE --- */}
      {historyQuery.isError && (
        <Paper withBorder radius="md" p="lg">
          <Text size="sm" c="red" ta="center">
            {historyQuery.error.message}
          </Text>
        </Paper>
      )}

      {/* --- BAGIAN EMPTY STATE --- */}
      {historyQuery.isSuccess && historyQuery.data.data.length === 0 && (
        <Paper withBorder radius="md" p="lg">
          <Text size="sm" c="dimmed" ta="center">
            Belum ada riwayat absensi.
          </Text>
        </Paper>
      )}

      {/* --- BAGIAN RENDER DATA --- */}
      {historyQuery.isSuccess &&
        historyQuery.data.data.map((attendance) => (
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
      {historyQuery.isSuccess && historyQuery.data.meta.totalItems > 0 && (
        <>
          <Text size="xs" c="dimmed" ta="center">
            Menampilkan {(historyQuery.data.meta.page - 1) * historyQuery.data.meta.pageSize + 1}–
            {Math.min(historyQuery.data.meta.page * historyQuery.data.meta.pageSize, historyQuery.data.meta.totalItems)}{" "}
            dari {historyQuery.data.meta.totalItems} data
          </Text>

          <Group justify="center">
            {" "}
            {historyQuery.data.meta.totalPages > 1 && (
              <Pagination
                value={page}
                onChange={setPage}
                total={historyQuery.data.meta.totalPages}
                size="sm"
                radius={"lg"}
              />
            )}
          </Group>
        </>
      )}
    </Stack>
  );
}
