"use client";

import { Card, Group, SimpleGrid, Stack, Text } from "@mantine/core";

import type { SalesReport } from "@/types/api/report.types";

type Props = {
  report: SalesReport;
};

function formatCurrency(value: string | number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value));
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("id-ID").format(value);
}

export function SalesReportSummary({ report }: Props) {
  return (
    <SimpleGrid
      cols={{
        base: 1,
        sm: 2,
        lg: 3,
      }}
    >
      <Card withBorder radius="md" padding="lg">
        <Stack gap={4}>
          <Text size="sm" c="var(--color-text-secondary)">
            Total Pendapatan
          </Text>

          <Text size="xl" fw={700} c="var(--color-text-primary)">
            {formatCurrency(report.summary.totalRevenue)}
          </Text>
        </Stack>
      </Card>

      <Card withBorder radius="md" padding="lg">
        <Stack gap={4}>
          <Text size="sm" c="var(--color-text-secondary)">
            Total Pesanan
          </Text>

          <Text size="xl" fw={700} c="var(--color-text-primary)">
            {formatNumber(report.summary.totalOrders)}
          </Text>
        </Stack>
      </Card>

      <Card withBorder radius="md" padding="lg">
        <Stack gap={4}>
          <Text size="sm" c="var(--color-text-secondary)">
            Rata-rata Nilai Pesanan
          </Text>

          <Text size="xl" fw={700} c="var(--color-text-primary)">
            {formatCurrency(report.summary.averageOrderValue)}
          </Text>
        </Stack>
      </Card>
    </SimpleGrid>
  );
}
