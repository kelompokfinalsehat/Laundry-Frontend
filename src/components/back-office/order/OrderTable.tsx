"use client";

import {
  ActionIcon,
  Badge,
  Group,
  Table,
  Text,
} from "@mantine/core";

import { IconChevronRight } from "@tabler/icons-react";

import { ServerPagination } from "@/components/ui/ServerPagination";

import type {
  CustomerStatus,
  OrderListItem,
} from "@/types/api/order.types";

import type { PaginationMeta } from "@/types/api/pagination.type";

type Props = {
  data: OrderListItem[];
  meta: PaginationMeta;
  showOutlet: boolean;
  onPageChange: (page: number) => void;
  onPageSizeChange: (
    pageSize: 10 | 20 | 50,
  ) => void;
  onView: (orderId: string) => void;
};

const CUSTOMER_STATUS: Record<
  CustomerStatus,
  {
    label: string;
    color: string;
  }
> = {
  SCHEDULED: {
    label: "Terjadwal",
    color: "blue",
  },
  WAITING_DRIVER_PICKUP: {
    label: "Menunggu Driver",
    color: "yellow",
  },
  ON_THE_WAY_TO_OUTLET: {
    label: "Menuju Outlet",
    color: "cyan",
  },
  ARRIVED_AT_OUTLET: {
    label: "Tiba di Outlet",
    color: "indigo",
  },
  WASHING: {
    label: "Pencucian",
    color: "blue",
  },
  IRONING: {
    label: "Penyetrikaan",
    color: "violet",
  },
  PACKING: {
    label: "Pengemasan",
    color: "grape",
  },
  WAITING_PAYMENT: {
    label: "Menunggu Pembayaran",
    color: "orange",
  },
  READY_FOR_DELIVERY: {
    label: "Siap Diantar",
    color: "teal",
  },
  ON_THE_WAY_TO_CUSTOMER: {
    label: "Dalam Pengantaran",
    color: "cyan",
  },
  RECEIVED_BY_CUSTOMER: {
    label: "Diterima Pelanggan",
    color: "green",
  },
  OVERDUE: {
    label: "Jatuh Tempo",
    color: "red",
  },
  WAITING_CUSTOMER_CONFIRMATION: {
    label: "Menunggu Konfirmasi Pelanggan",
    color: "orange",
  },
};

const PAYMENT_STATUS = {
  UNPAID: {
    label: "Belum Dibayar",
    color: "red",
  },
  PAID: {
    label: "Sudah Dibayar",
    color: "green",
  },
} as const;

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function OrderTable({
  data,
  meta,
  showOutlet,
  onPageChange,
  onPageSizeChange,
  onView,
}: Props) {
  return (
    <>
      <Table.ScrollContainer
        minWidth={showOutlet ? 1200 : 1050}
      >
        <Table
          highlightOnHover
          verticalSpacing="sm"
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Kode Pesanan</Table.Th>
              <Table.Th>Pelanggan</Table.Th>

              {showOutlet && (
                <Table.Th>Outlet</Table.Th>
              )}

              <Table.Th>Jadwal Pickup</Table.Th>
              <Table.Th>Status Pesanan</Table.Th>
              <Table.Th>Status Pembayaran</Table.Th>

              <Table.Th ta="right">
                Aksi
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((order) => {
              const customerStatus =
                CUSTOMER_STATUS[
                  order.customerStatus
                ];

              const paymentStatus =
                order.bill
                  ? PAYMENT_STATUS[
                      order.bill.paymentStatus
                    ]
                  : null;

              return (
                <Table.Tr key={order.id}>
                  <Table.Td>
                    <Text
                      size="sm"
                      fw={600}
                      c="var(--color-text-primary)"
                    >
                      {order.orderCode}
                    </Text>
                  </Table.Td>

                  <Table.Td>
                    <Text
                      size="sm"
                      fw={600}
                      c="var(--color-text-primary)"
                    >
                      {order.customer.name}
                    </Text>

                    <Text
                      size="xs"
                      c="var(--color-text-secondary)"
                    >
                      {order.customer.email}
                    </Text>
                  </Table.Td>

                  {showOutlet && (
                    <Table.Td>
                      <Text size="sm">
                        {order.outlet.name}
                      </Text>
                    </Table.Td>
                  )}

                  <Table.Td>
                    <Text
                      size="sm"
                      c="var(--color-text-secondary)"
                    >
                      {formatDateTime(
                        order.pickupScheduledAt,
                      )}
                    </Text>
                  </Table.Td>

                  <Table.Td>
                    <Badge
                      variant="light"
                      color={customerStatus.color}
                    >
                      {customerStatus.label}
                    </Badge>
                  </Table.Td>

                  <Table.Td>
                    {paymentStatus ? (
                      <Badge
                        variant="light"
                        color={paymentStatus.color}
                      >
                        {paymentStatus.label}
                      </Badge>
                    ) : (
                      <Text
                        size="sm"
                        c="var(--color-text-secondary)"
                      >
                        -
                      </Text>
                    )}
                  </Table.Td>

                  <Table.Td ta="right">
                    <Group
                      gap={4}
                      justify="flex-end"
                    >
                      <ActionIcon
                        variant="subtle"
                        color="rinseBlue"
                        aria-label={`Lihat pesanan ${order.orderCode}`}
                        onClick={() =>
                          onView(order.id)
                        }
                      >
                        <IconChevronRight size={18} />
                      </ActionIcon>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={
          meta.pageSize as 10 | 20 | 50
        }
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
}