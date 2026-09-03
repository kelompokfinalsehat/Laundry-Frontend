"use client";

import { Badge, Group, Paper, Table, Text } from "@mantine/core";
import type { QuantityDifference } from "@/types/api/bypass.types";

type Props = {
  differences: QuantityDifference[];
};

function formatDifference(value: number) {
  if (value > 0) {
    return `+${value}`;
  }
  return value.toString();
}

export function BypassDifferenceTable({ differences }: Props) {
  return (
    <Paper
      withBorder
      radius="md"
      p="md"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Group justify="space-between" mb="xs">
        <div>
          <Text fw={600}>Perbedaan Kuantitas</Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Bandingkan data pesanan dengan kuantitas yang diajukan worker.
          </Text>
        </div>

        <Badge variant="light" color="yellow">
          {differences.length} item
        </Badge>
      </Group>

      <Table.ScrollContainer minWidth={650}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Item Laundry</Table.Th>

              <Table.Th ta="center">Kuantitas Pesanan</Table.Th>

              <Table.Th ta="center">Kuantitas Worker</Table.Th>

              <Table.Th ta="right">Selisih</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {differences.map((difference) => (
              <Table.Tr key={difference.orderItemId}>
                <Table.Td>
                  <Text size="sm" fw={500}>
                    {difference.itemName}
                  </Text>
                </Table.Td>

                <Table.Td ta="center">
                  <Text size="sm">{difference.officialQuantity}</Text>
                </Table.Td>

                <Table.Td ta="center">
                  <Text size="sm" fw={600}>
                    {difference.submittedQuantity}
                  </Text>
                </Table.Td>

                <Table.Td ta="right">
                  <Badge variant="light" color={difference.difference > 0 ? "green" : "red"}>
                    {formatDifference(difference.difference)}
                  </Badge>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Paper>
  );
}
