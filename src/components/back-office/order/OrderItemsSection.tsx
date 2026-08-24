"use client";

import {
  Paper,
  Stack,
  Table,
  Text,
} from "@mantine/core";

import type {
  OrderDetail,
} from "@/types/api/order.types";

type Props = {
  orderItems: OrderDetail["orderItems"];
};

export function OrderItemsSection({
  orderItems,
}: Props) {
  return (
    <Paper
      withBorder
      p="lg"
      radius="md"
    >
      <Stack gap="md">
        <Text fw={600}>
          Item Laundry
        </Text>

        {orderItems.length === 0 ? (
          <Text
            size="sm"
            c="var(--color-text-secondary)"
          >
            Pesanan belum dibuat.
          </Text>
        ) : (
          <Table
            verticalSpacing="sm"
            highlightOnHover
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Item</Table.Th>

                <Table.Th ta="right">
                  Jumlah
                </Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {orderItems.map((item) => (
                <Table.Tr key={item.id}>
                  <Table.Td>
                    <Text
                      size="sm"
                      fw={500}
                      c="var(--color-text-primary)"
                    >
                      {item.laundryItem.name}
                    </Text>
                  </Table.Td>

                  <Table.Td ta="right">
                    <Text
                      size="sm"
                      c="var(--color-text-secondary)"
                    >
                      {item.quantity}
                    </Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        )}
      </Stack>
    </Paper>
  );
}