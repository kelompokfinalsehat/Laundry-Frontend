"use client";

import { Card, SimpleGrid, Stack, Text } from "@mantine/core";
import { EmployeePerformanceSummary as EmployeePerformanceSummaryType } from "@/types/api/report.types";

type Props = { summary: EmployeePerformanceSummaryType };

const formatNumber = (value: number) => new Intl.NumberFormat("id-ID", { maximumFractionDigits: 1 }).format(value);

export function EmployeePerformanceSummary({ summary }: Props) {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 3, xl: 5 }}>
      <Card withBorder radius="md" padding="lg">
        <Stack gap={4}>
          <Text size="sm" c="var(--color-text-secondary)">
            Karyawan Produktif
          </Text>
          <Text size="xl" fw={700}>
            {formatNumber(summary.totalEmployees)}
          </Text>
          <Text size="xs" c="var(--color-text-secondary)">
            Karyawan aktif bekerja
          </Text>
        </Stack>
      </Card>

      <Card withBorder radius="md" padding="lg">
        <Stack gap={4}>
          <Text size="sm" c="var(--color-text-secondary)">
            Total Pekerjaan Selesai
          </Text>
          <Text size="xl" fw={700}>
            {formatNumber(summary.totalCompletedJobs)}
          </Text>
          <Text size="xs" c="var(--color-text-secondary)">
            Worker {formatNumber(summary.workerCompletedJobs)} · Driver {formatNumber(summary.driverCompletedJobs)}
          </Text>
        </Stack>
      </Card>

      <Card withBorder radius="md" padding="lg">
        <Stack gap={4}>
          <Text size="sm" c="var(--color-text-secondary)">
            Rata-rata per Karyawan
          </Text>
          <Text size="xl" fw={700}>
            {formatNumber(summary.averageJobsPerEmployee)}
          </Text>
          <Text size="xs" c="var(--color-text-secondary)">
            Pekerjaan selesai per karyawan
          </Text>
        </Stack>
      </Card>

      <Card withBorder radius="md" padding="lg" style={{ gridColumn: "span 2" }}>
        <Stack gap={4}>
          <Text size="sm" c="var(--color-text-secondary)">
            Performa Tertinggi
          </Text>
          <Text size="xl" fw={700}>
            {summary.topPerformer?.employeeName ?? "Belum ada data"}
          </Text>
          {summary.topPerformer && (
            <Text size="xs" c="var(--color-text-secondary)">
              {summary.topPerformer.role === "WORKER" ? "Worker" : "Driver"} · {formatNumber(summary.topPerformer.completedJobs)} pekerjaan selesai
            </Text>
          )}
        </Stack>
      </Card>
    </SimpleGrid>
  );
}
