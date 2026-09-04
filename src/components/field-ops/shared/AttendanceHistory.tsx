import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { EmptyState } from "@/components/ui/EmptyState";
import { useAttendanceHistory } from "@/hooks/attendance.hooks";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";
import { ActionIcon, Group, Pagination, Paper, SimpleGrid, Skeleton, Stack, Text } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { IconArrowNarrowDown, IconArrowNarrowUp, IconCalendar } from "@tabler/icons-react";

export function AttendanceHistory() {
  const { historyQuery, period, sortOrder, setPage, handlePeriodChange, handleSortChange } = useAttendanceHistory();
  return (
    <Stack gap={"md"}>
      {/* filter */}
      <Group justify="space-between" align="flex-end">
        <MonthPickerInput
          label="Bulan"
          placeholder="Pilih Bulan"
          value={`${period}-01`}
          onChange={handlePeriodChange}
          valueFormat="MMMM YYYY"
          leftSection={<IconCalendar size={18} />}
          maxDate={new Date()}
          w={200}
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

      <AsyncStateView
        isLoading={historyQuery.isPending}
        isError={historyQuery.isError}
        error={historyQuery.error}
        data={historyQuery.data}
        onRetry={() => historyQuery.refetch()}
        skeleton={
          <Stack gap={"md"}>
            <SimpleGrid cols={3}>
              <Skeleton height={80} radius={"md"} />
              <Skeleton height={80} radius={"md"} />
              <Skeleton height={80} radius={"md"} />
            </SimpleGrid>
            <Skeleton height={90} radius={"md"} />
            <Skeleton height={90} radius={"md"} />
          </Stack>
        }
      >
        {(response) => {
          const items = response.data.attendanceHistory;
          const summary = response.data.summary;
          const meta = response.meta;

          return (
            <Stack gap={"md"}>
              {/* summary statistic requested by mentor */}
              <SimpleGrid cols={3}>
                <Paper withBorder p={"sm"} radius={"md"} shadow="md">
                  <Text size="xs" c="dimmed" ta={"center"}>
                    Hari Efektif
                  </Text>
                  <Text fw={600} size="lg" ta={"center"}>
                    {summary.totalDays}
                  </Text>
                </Paper>

                <Paper withBorder p={"sm"} radius={"md"} shadow="md">
                  <Text size="xs" c="dimmed" ta={"center"}>
                    Hadir
                  </Text>
                  <Text fw={600} size="lg" ta={"center"}>
                    {summary.presentDays}
                  </Text>
                </Paper>

                <Paper withBorder p={"sm"} radius={"md"} shadow="md">
                  <Text size="xs" c="dimmed" ta={"center"}>
                    Tidak Hadir
                  </Text>
                  <Text fw={600} size="lg" ta={"center"}>
                    {summary.absentDays}
                  </Text>
                </Paper>
              </SimpleGrid>

              {/* history list untuk paginationnya */}
              {items.length === 0 ? (
                <EmptyState title="Belum ada riwayat" description="Belum ada riwayat absensi pada bulan ini." />
              ) : (
                <Stack gap="sm">
                  {items.map((attendance) => (
                    <Paper key={attendance.id} withBorder radius="md" p="md">
                      <Stack gap="sm">
                        <Text fw={600} size="sm">
                          {formatFieldOpsDate(attendance.attendanceDate)}
                        </Text>

                        <SimpleGrid cols={2}>
                          <Stack gap={2}>
                            <Text size="xs" c="dimmed">
                              Masuk
                            </Text>

                            <Text size="sm" fw={500}>
                              {formatFieldOpsTime(attendance.clockInAt)}
                            </Text>
                          </Stack>

                          <Stack gap={2}>
                            <Text size="xs" c="dimmed">
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
                </Stack>
              )}

              {/* button pagination */}
              {meta.totalPages > 1 && (
                <Group justify="center">
                  <Pagination value={meta.page} total={meta.totalPages} onChange={setPage} size={"sm"} />
                </Group>
              )}
            </Stack>
          );
        }}
      </AsyncStateView>
    </Stack>
  );
}
