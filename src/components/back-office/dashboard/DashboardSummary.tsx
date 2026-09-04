import { Grid, Group, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconCash, IconCircleCheck, IconClipboardList, IconClock } from "@tabler/icons-react";
import type { DashboardSummary as DashboardSummaryType } from "@/types/api/dashboard.types";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export function DashboardSummary({ summary }: { summary: DashboardSummaryType }) {
  const items = [
    {
      label: "Total Pesanan",
      value: summary.totalOrders.toLocaleString("id-ID"),
      icon: IconClipboardList,
      color: "rinseBlue",
    },
    {
      label: "Pesanan Aktif",
      value: summary.activeOrders.toLocaleString("id-ID"),
      icon: IconClock,
      color: "orange",
    },
    {
      label: "Pesanan Selesai",
      value: summary.completedOrders.toLocaleString("id-ID"),
      icon: IconCircleCheck,
      color: "green",
    },
    {
      label: "Total Pendapatan",
      value: formatCurrency(summary.totalRevenue),
      icon: IconCash,
      color: "teal",
    },
  ];

  return (
    <Grid gap={"md"}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Grid.Col key={item.label} span={{ base: 12, sm: 6, lg: 3 }}>
            <Paper
              withBorder
              radius="md"
              p="md"
              h="100%"
              style={{
                backgroundColor: "var(--color-surface)",
              }}
            >
              <Group justify="space-between" align="flex-start" wrap="nowrap">
                <Stack gap={4} style={{ minWidth: 0 }}>
                  <Text size="sm" fw={500} c="var(--color-text-secondary)">
                    {item.label}
                  </Text>

                  <Text
                    size="xl"
                    fw={700}
                    c="var(--color-text-primary)"
                    style={{
                      lineHeight: 1.25,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {item.value}
                  </Text>
                </Stack>

                <ThemeIcon
                  size={40}
                  radius="md"
                  variant="light"
                  color={item.color}
                  style={{
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} stroke={1.8} />
                </ThemeIcon>
              </Group>
            </Paper>
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
