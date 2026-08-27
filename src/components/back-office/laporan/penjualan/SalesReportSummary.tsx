"use client";

import { Card, SimpleGrid, Stack, Text } from "@mantine/core";
import { SalesReport } from "@/types/api/report.types";

type Props = { report: SalesReport };

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);

const formatNumber = (value: number) => new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(value);

function formatPercent(value: number | null) {
  if (value === null) return "Tidak ada pembanding";
  return `${value > 0 ? "+" : ""}${value.toFixed(1)}% vs periode sebelumnya`;
}

function SummaryCard({ label, value, comparison }: { label: string; value: string; comparison?: number | null }) {
  return (
    <Card withBorder radius="md" padding="lg" style={{ backgroundColor: "var(--color-surface)" }}>
      <Stack gap={4}>
        <Text size="sm" c="var(--color-text-secondary)">
          {label}
        </Text>
        <Text size="xl" fw={700} c="var(--color-text-primary)">
          {value}
        </Text>
        {comparison !== undefined && (
          <Text size="xs" c={comparison !== null && comparison < 0 ? "red" : "var(--color-text-secondary)"}>
            {formatPercent(comparison)}
          </Text>
        )}
      </Stack>
    </Card>
  );
}

export function SalesReportSummary({ report }: Props) {
  const { summary, comparison } = report;

  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 3, xl: 5 }}>
      <SummaryCard label="Total Pendapatan" value={formatCurrency(summary.totalRevenue)} comparison={comparison.revenueChangePercent} />
      <SummaryCard label="Total Pesanan" value={formatNumber(summary.totalOrders)} comparison={comparison.orderChangePercent} />
      <SummaryCard
        label="Rata-rata Nilai Pesanan"
        value={formatCurrency(summary.averageOrderValue)}
        comparison={comparison.averageOrderValueChangePercent}
      />
      <SummaryCard label="Total Berat Cucian" value={`${formatNumber(summary.totalWeightKg)} kg`} />
      <SummaryCard label="Pelanggan Unik" value={formatNumber(summary.uniqueCustomers)} />
    </SimpleGrid>
  );
}
