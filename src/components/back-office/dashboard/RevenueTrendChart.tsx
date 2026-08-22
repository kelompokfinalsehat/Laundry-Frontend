"use client";

import { Paper, Stack, Text } from "@mantine/core";
import { AreaChart } from "@mantine/charts";
import type { RevenueTrendItem } from "@/types/api/dashboard.types";

interface RevenueTrendChartProps {
  data: RevenueTrendItem[];
}

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

export function RevenueTrendChart({ data }: RevenueTrendChartProps) {
  const chartData = data.map((item) => ({
    ...item,
    date: new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    }).format(new Date(`${item.date}T00:00:00`)),
  }));

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
            Pendapatan 7 hari terakhir
          </Text>
        </div>

        <AreaChart
          h={300}
          data={chartData}
          dataKey="date"
          series={[
            {
              name: "revenue",
              label: "Pendapatan",
              color: "rinseBlue",
            },
          ]}
          curveType="linear"
          valueFormatter={formatCurrency}
          withLegend={false}
          withTooltip
          yAxisProps={{
            width: 70,
            tickFormatter: formatCompactCurrency,
          }}
          tooltipProps={{
            content: ({ label, payload }) => {
              if (!payload?.length) return null;

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
          Pendapatan tertinggi:{" "}
          {formatCurrency(Math.max(...data.map((item) => item.revenue), 0))}
        </Text>
      </Stack>
    </Paper>
  );
}
