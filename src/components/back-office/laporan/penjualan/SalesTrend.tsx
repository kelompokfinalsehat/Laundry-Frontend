"use client";

import { Paper, Stack, Text } from "@mantine/core";

import { BarChart } from "@mantine/charts";

import type { SalesPeriod, SalesTrendItem } from "@/types/api/report.types";

type Props = {
  data: SalesTrendItem[];
  period: SalesPeriod;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

const formatCompactCurrency = (value: number) => {
  if (value >= 1_000_000) {
    return `Rp${value / 1_000_000} jt`;
  }

  if (value >= 1_000) {
    return `Rp${value / 1_000} rb`;
  }

  return `Rp${value}`;
};

function getPeriodDescription(period: SalesPeriod) {
  switch (period) {
    case "DAY":
      return "Ringkasan pendapatan berdasarkan hari";

    case "MONTH":
      return "Ringkasan pendapatan selama bulan terpilih";

    case "YEAR":
      return "Ringkasan pendapatan selama tahun terpilih";
  }
}

export function SalesTrend({ data, period }: Props) {
  const highestRevenue = Math.max(...data.map((item) => item.revenue), 0);

  return (
    <Paper
      withBorder
      radius="md"
      p="md"
      h="100%"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="sm">
        <div>
          <Text fw={600}>Tren Pendapatan</Text>

          <Text size="sm" c="var(--color-text-secondary)">
            {getPeriodDescription(period)}
          </Text>
        </div>

        <BarChart
          h={300}
          data={data}
          dataKey="label"
          series={[
            {
              name: "revenue",
              label: "Pendapatan",
              color: "rinseBlue",
            },
          ]}
          valueFormatter={formatCurrency}
          withLegend={false}
          withTooltip
          yAxisProps={{
            width: 70,
            tickFormatter: formatCompactCurrency,
          }}
          tooltipProps={{
            content: ({ label, payload }) => {
              if (!payload?.length) {
                return null;
              }

              const revenue = payload[0]?.value;

              return (
                <Paper withBorder shadow="sm" radius="md" p="sm">
                  <Text size="sm" fw={600}>
                    {label}
                  </Text>

                  <Text size="xs" c="var(--color-text-secondary)">
                    Pendapatan
                  </Text>

                  <Text fw={700}>{formatCurrency(Number(revenue ?? 0))}</Text>
                </Paper>
              );
            },
          }}
        />

        <Text size="sm" c="var(--color-text-secondary)">
          Pendapatan tertinggi: {formatCurrency(highestRevenue)}
        </Text>
      </Stack>
    </Paper>
  );
}
