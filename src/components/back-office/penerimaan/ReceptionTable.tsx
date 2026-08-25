"use client";

import { ActionIcon, Button, Group, Table, Text } from "@mantine/core";

import { IconChevronRight } from "@tabler/icons-react";

import { ServerPagination } from "@/components/ui/ServerPagination";

import type { OrderListItem } from "@/types/api/order.types";

import type { PaginationMeta } from "@/types/api/pagination.type";

type ReceptionTableMode = "RECEIVE" | "CREATE_ORDER";

type Props = {
  data: OrderListItem[];
  meta: PaginationMeta;

  mode: ReceptionTableMode;

  onPageChange: (page: number) => void;

  onPageSizeChange: (pageSize: 10 | 20 | 50) => void;

  onReceive: (order: OrderListItem) => void;

  onCreateOrder: (order: OrderListItem) => void;

  onView: (orderId: string) => void;
};

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function ReceptionTable({
  data,
  meta,
  mode,
  onPageChange,
  onPageSizeChange,
  onReceive,
  onCreateOrder,
  onView,
}: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={800}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Kode Pesanan</Table.Th>

              <Table.Th>Pelanggan</Table.Th>

              <Table.Th>Jadwal Pickup</Table.Th>

              <Table.Th ta="right">Aksi</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((order) => (
              <Table.Tr key={order.id}>
                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {order.orderCode}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {order.customer.name}
                  </Text>

                  <Text size="xs" c="var(--color-text-secondary)">
                    {order.customer.email}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {formatDateTime(order.pickupScheduledAt)}
                  </Text>
                </Table.Td>

                <Table.Td ta="right">
                  <Group gap="xs" justify="flex-end" wrap="nowrap">
                    {mode === "RECEIVE" && (
                      <Button size="xs" onClick={() => onReceive(order)}>
                        Terima
                      </Button>
                    )}

                    {mode === "CREATE_ORDER" && (
                      <Button size="xs" onClick={() => onCreateOrder(order)}>
                        Buat Order
                      </Button>
                    )}

                    <ActionIcon
                      variant="subtle"
                      color="rinseBlue"
                      aria-label={`Lihat pesanan ${order.orderCode}`}
                      onClick={() => onView(order.id)}
                    >
                      <IconChevronRight size={18} />
                    </ActionIcon>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={meta.pageSize as 10 | 20 | 50}
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
}
