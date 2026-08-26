"use client";

import { Paper, Table, Text } from "@mantine/core";

import type { SalesBreakdownItem } from "@/types/api/report.types";

type Props = {
  data: SalesBreakdownItem[];
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("id-ID").format(value);
}

export function SalesReportBreakdown({ data }: Props) {
  return (
    <Paper withBorder radius="md" p="lg">
      <Text fw={600} mb="md">
        Penjualan per Outlet
      </Text>

      <Table.ScrollContainer minWidth={600}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Outlet</Table.Th>

              <Table.Th ta="right">Total Pesanan</Table.Th>

              <Table.Th ta="right">Total Pendapatan</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((item) => (
              <Table.Tr key={item.outletId}>
                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {item.outletName}
                  </Text>
                </Table.Td>

                <Table.Td ta="right">
                  <Text size="sm" c="var(--color-text-secondary)">
                    {formatNumber(item.orders)}
                  </Text>
                </Table.Td>

                <Table.Td ta="right">
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {formatCurrency(item.revenue)}
                  </Text>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Paper>
  );
}
