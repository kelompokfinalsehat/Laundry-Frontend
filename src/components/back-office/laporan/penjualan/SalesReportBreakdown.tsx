"use client";

import { Paper, Progress, Stack, Table, Text } from "@mantine/core";
import { SalesBreakdownItem } from "@/types/api/report.types";

type Props = { data: SalesBreakdownItem[] };

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);

const formatNumber = (value: number) => new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(value);

export function SalesReportBreakdown({ data }: Props) {
  return (
    <Paper withBorder radius="md" p="md" style={{ backgroundColor: "var(--color-surface)" }}>
      <Stack gap="md">
        <div>
          <Text fw={600}>Penjualan per Outlet</Text>
          <Text size="sm" c="var(--color-text-secondary)">
            Perbandingan kontribusi dan performa setiap outlet pada periode terpilih.
          </Text>
        </div>

        <Table.ScrollContainer minWidth={950}>
          <Table highlightOnHover verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Outlet</Table.Th>
                <Table.Th ta="right">Pesanan</Table.Th>
                <Table.Th ta="right">Pendapatan</Table.Th>
                <Table.Th ta="right">Rata-rata Pesanan</Table.Th>
                <Table.Th ta="right">Berat</Table.Th>
                <Table.Th>Kontribusi Pendapatan</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data.map((item) => (
                <Table.Tr key={item.outletId}>
                  <Table.Td>
                    <Text size="sm" fw={600}>
                      {item.outletName}
                    </Text>
                    <Text size="xs" c="var(--color-text-secondary)">
                      {formatNumber(item.uniqueCustomers)} pelanggan unik
                    </Text>
                  </Table.Td>
                  <Table.Td ta="right">{formatNumber(item.orders)}</Table.Td>
                  <Table.Td ta="right">
                    <Text size="sm" fw={600}>
                      {formatCurrency(item.revenue)}
                    </Text>
                  </Table.Td>
                  <Table.Td ta="right">{formatCurrency(item.averageOrderValue)}</Table.Td>
                  <Table.Td ta="right">{formatNumber(item.totalWeightKg)} kg</Table.Td>
                  <Table.Td>
                    <Stack gap={4}>
                      <Text size="xs" ta="right">
                        {item.revenueSharePercent.toFixed(1)}%
                      </Text>
                      <Progress value={item.revenueSharePercent} size="sm" radius="xl" />
                    </Stack>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Stack>
    </Paper>
  );
}
