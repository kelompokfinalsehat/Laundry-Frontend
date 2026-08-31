"use client";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useHistoryList } from "@/hooks/worker.hooks";
import type { StationType } from "@/types/api/worker.types";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";

import { ActionIcon, Badge, Card, Grid, Group, Pagination, Paper, Select, Skeleton, Stack, Text, ThemeIcon } from "@mantine/core";

import { MonthPickerInput } from "@mantine/dates";

import { IconArrowNarrowDown, IconArrowNarrowUp, IconCalendarMonth, IconChecklist, IconClock } from "@tabler/icons-react";

import dayjs from "dayjs";

const STATION_INFO: Record<
  StationType,
  {
    label: string;
    color: string;
  }
> = {
  WASHING: {
    label: "Washing",
    color: "blue",
  },
  IRONING: {
    label: "Ironing",
    color: "yellow",
  },
  PACKING: {
    label: "Packing",
    color: "grape",
  },
};

export function WorkerHistory() {
  const {
    historyQuery,

    page,
    period,
    stationType,
    sortOrder,

    setPage,
    handlePeriodChange,
    handleStationFilter,
    handleSortChange,
  } = useHistoryList();

  return (
    <Stack gap="md">
      <Stack gap={4}>
        <Text fw={700} size="lg">
          Riwayat Tugas
        </Text>

        <Text size="sm" c="dimmed">
          Daftar tugas yang telah Anda selesaikan.
        </Text>
      </Stack>

      <AsyncStateView
        isLoading={historyQuery.isPending}
        isError={historyQuery.isError}
        error={historyQuery.error}
        data={historyQuery.data}
        onRetry={() => historyQuery.refetch()}
        emptyTitle="Belum ada riwayat tugas"
        emptyDescription="Belum ada tugas selesai pada bulan dan filter yang dipilih."
        skeleton={
          <Stack gap="md">
            <Skeleton height={88} radius="lg" />

            <Card withBorder radius="lg" p="lg">
              <Stack gap="md">
                <Skeleton height={20} width="30%" />
                <Skeleton height={20} width="50%" />
                <Skeleton height={16} width="40%" />
              </Stack>
            </Card>

            <Card withBorder radius="lg" p="lg">
              <Stack gap="md">
                <Skeleton height={20} width="30%" />
                <Skeleton height={20} width="50%" />
                <Skeleton height={16} width="40%" />
              </Stack>
            </Card>
          </Stack>
        }
      >
        {(response) => {
          const { historyList, summary } = response.data;
          const { meta } = response;

          return (
            <Stack gap="md">
              <Paper withBorder radius="lg" p="md" bg="var(--color-primary-light)">
                <Group gap="sm">
                  <ThemeIcon variant="light" radius="xl" size="lg" color="blue">
                    <IconChecklist size={18} />
                  </ThemeIcon>

                  <Stack gap={1}>
                    <Text size="xs" c="dimmed">
                      Tugas Selesai per {period}
                    </Text>

                    <Text fw={700} size="lg">
                      {summary.totalCompleted}
                    </Text>
                  </Stack>
                </Group>
              </Paper>

              <Grid gap="xs" align="flex-end">
                <Grid.Col span={5}>
                  <MonthPickerInput
                    label="Bulan"
                    placeholder="Pilih bulan"
                    value={`${period}-01`}
                    valueFormat="MMM YYYY"
                    leftSection={<IconCalendarMonth size={17} />}
                    clearable={false}
                    onChange={(value) => {
                      if (!value) return;

                      handlePeriodChange(dayjs(value).format("YYYY-MM"));
                    }}
                  />
                </Grid.Col>

                <Grid.Col span={4}>
                  <Select
                    label="Station"
                    value={stationType}
                    onChange={handleStationFilter}
                    allowDeselect={false}
                    data={[
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
                    ]}
                  />
                </Grid.Col>

                <Grid.Col span={3}>
                  <Stack gap={4}>
                    <Text size="sm" fw={500}>
                      Urutkan
                    </Text>

                    <Group gap={4} wrap="nowrap">
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
                  </Stack>
                </Grid.Col>
              </Grid>

              <Stack gap="sm">
                {historyList.map((item) => {
                  const stationInfo = STATION_INFO[item.stationType];

                  return (
                    <Card key={item.id} withBorder radius="lg" p="lg">
                      <Stack gap="md">
                        {/* Baris atas: station kiri, tanggal kanan */}
                        <Grid align="center">
                          <Grid.Col span="auto">
                            <Badge variant="light" color={stationInfo.color}>
                              {stationInfo.label}
                            </Badge>
                          </Grid.Col>

                          <Grid.Col span="content">
                            <Text size="xs" c="dimmed">
                              {formatFieldOpsDate(item.completedAt)}
                            </Text>
                          </Grid.Col>
                        </Grid>

                        {/* Baris bawah: kode order kiri, jam kanan */}
                        <Grid align="center">
                          <Grid.Col span="auto">
                            <Stack gap={2}>
                              <Text size="xs" c="dimmed">
                                Kode Order
                              </Text>

                              <Text fw={700}>{item.order.orderCode}</Text>
                            </Stack>
                          </Grid.Col>

                          <Grid.Col span="content">
                            <Group gap="xs">
                              <IconClock size={16} color="var(--color-text-secondary)" />

                              <Text size="sm" c="dimmed">
                                Selesai pukul {formatFieldOpsTime(item.completedAt)}
                              </Text>
                            </Group>
                          </Grid.Col>
                        </Grid>
                      </Stack>
                    </Card>
                  );
                })}
              </Stack>

              {meta.totalPages > 1 && (
                <Group justify="center">
                  <Pagination value={page} total={meta.totalPages} onChange={setPage} size="sm" />
                </Group>
              )}
            </Stack>
          );
        }}
      </AsyncStateView>
    </Stack>
  );
}
