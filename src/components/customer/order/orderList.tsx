"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Stack,
  TextInput,
  Select,
  Table,
  Badge,
  Pagination,
  Group,
  Loader,
  Text,
  Anchor,
} from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";

import { useOrders } from "@/hooks/order/order.hooks";
import {
  ORDER_STATUS_GROUP_LABELS,
  type OrderStatusGroupKey,
} from "@/lib/constants/order";

const SORT_OPTIONS = [
  {
    value: "createdAt:desc",
    label: "Terbaru",
  },
  {
    value: "createdAt:asc",
    label: "Terlama",
  },
  {
    value: "pickupDate:desc",
    label: "Tanggal pickup (terbaru)",
  },
  {
    value: "pickupDate:asc",
    label: "Tanggal pickup (terlama)",
  },
];

const STATUS_GROUP_OPTIONS = Object.entries(ORDER_STATUS_GROUP_LABELS).map(
  ([value, label]) => ({
    value,
    label,
  }),
);

export function OrderList() {
  const [page, setPage] = useState(1);

  const [searchInput, setSearchInput] = useState("");
  const [search] = useDebouncedValue(searchInput, 400);

  const [statusGroup, setStatusGroup] = useState<OrderStatusGroupKey | null>(
    null,
  );

  const [sort, setSort] = useState("createdAt:desc");

  const [sortBy, sortOrder] = sort.split(":") as [
    "createdAt" | "pickupDate",
    "asc" | "desc",
  ];

  const { data, isLoading } = useOrders({
    page,
    limit: 10,
    ...(search ? { search } : {}),
    ...(statusGroup ? { statusGroup } : {}),
    sortBy,
    sortOrder,
  });

  function handleSearchChange(value: string) {
    setSearchInput(value);
    setPage(1);
  }

  function handleStatusGroupChange(value: string | null) {
    setStatusGroup(value as OrderStatusGroupKey | null);
    setPage(1);
  }

  function handleSortChange(value: string | null) {
    if (!value) return;

    setSort(value);
    setPage(1);
  }

  return (
    <Stack gap="md">
      <Group grow>
        <TextInput
          placeholder="Cari nomor order..."
          value={searchInput}
          onChange={(e) => handleSearchChange(e.currentTarget.value)}
        />

        <Select
          placeholder="Semua status"
          data={STATUS_GROUP_OPTIONS}
          value={statusGroup}
          onChange={handleStatusGroupChange}
          clearable
        />

        <Select
          data={SORT_OPTIONS}
          value={sort}
          onChange={handleSortChange}
          allowDeselect={false}
        />
      </Group>

      {isLoading ? (
        <Group justify="center" py="xl">
          <Loader color="var(--color-primary)" />
        </Group>
      ) : data?.data.length === 0 ? (
        <Text c="var(--color-text-secondary)" ta="center" py="xl">
          Belum ada order.
        </Text>
      ) : (
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>No. Order</Table.Th>
              <Table.Th>Tanggal Pickup</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Total</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data?.data.map((order) => (
              <Table.Tr key={order.id}>
                <Table.Td>
                  <Anchor
                    component={Link}
                    href={`/pesanan/${order.id}`}
                    size="sm"
                    c="var(--color-primary)"
                  >
                    {order.orderCode}
                  </Anchor>
                </Table.Td>

                <Table.Td>
                  {new Date(order.pickupDate).toLocaleDateString("id-ID")}
                </Table.Td>

                <Table.Td>
                  <Badge
                    style={{
                      backgroundColor: "var(--color-primary-light)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {order.customerStatusLabel}
                  </Badge>
                </Table.Td>

                <Table.Td>
                  {order.totalAmount !== null
                    ? `Rp${order.totalAmount.toLocaleString("id-ID")}`
                    : "-"}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      )}

      {data && data.meta.totalPage > 1 && (
        <Group justify="center">
          <Pagination
            value={page}
            onChange={setPage}
            total={data.meta.totalPage}
          />
        </Group>
      )}
    </Stack>
  );
}
