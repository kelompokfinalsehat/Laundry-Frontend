"use client";

import {
  ActionIcon,
  Group,
  Table,
  Text,
} from "@mantine/core";

import {
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";

import {
  ServerPagination,
} from "@/components/ui/ServerPagination";

import type {
  ShippingRate,
} from "@/types/api/pricing.types";

import type {
  PaginationMeta,
} from "@/types/api/pagination.type";

type Props = {
  data: ShippingRate[];

  meta: PaginationMeta;

  onPageChange: (
    page: number,
  ) => void;

  onPageSizeChange: (
    pageSize: 10 | 20 | 50,
  ) => void;

  onEdit: (
    shippingRate: ShippingRate,
  ) => void;

  onDeactivate: (
    shippingRate: ShippingRate,
  ) => void;
};

function formatCurrency(
  value: string,
) {
  return new Intl.NumberFormat(
    "id-ID",
    {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    },
  ).format(
    Number(value),
  );
}

function formatDistance(
  value: number,
) {
  const kilometers =
    value / 1000;

  return `≤ ${kilometers} km`;
}

function formatDateTime(
  value: string,
) {
  return new Intl.DateTimeFormat(
    "id-ID",
    {
      dateStyle: "medium",
      timeStyle: "short",
    },
  ).format(
    new Date(value),
  );
}

export function ShippingRateTable({
  data,
  meta,
  onPageChange,
  onPageSizeChange,
  onEdit,
  onDeactivate,
}: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={700}>
        <Table
          highlightOnHover
          verticalSpacing="sm"
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                Batas Jarak
              </Table.Th>

              <Table.Th>
                Harga
              </Table.Th>

              <Table.Th>
                Dibuat Pada
              </Table.Th>

              <Table.Th ta="right">
                Aksi
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map(
              (shippingRate) => (
                <Table.Tr
                  key={shippingRate.id}
                >
                  <Table.Td>
                    <Text
                      size="sm"
                      fw={600}
                      c="var(--color-text-primary)"
                    >
                      {formatDistance(
                        shippingRate.maxDistanceMeters,
                      )}
                    </Text>
                  </Table.Td>

                  <Table.Td>
                    <Text
                      size="sm"
                      fw={600}
                      c="var(--color-text-primary)"
                    >
                      {formatCurrency(
                        shippingRate.price,
                      )}
                    </Text>
                  </Table.Td>

                  <Table.Td>
                    <Text
                      size="sm"
                      c="var(--color-text-secondary)"
                    >
                      {formatDateTime(
                        shippingRate.createdAt,
                      )}
                    </Text>
                  </Table.Td>

                  <Table.Td ta="right">
                    <Group
                      justify="flex-end"
                      gap="xs"
                      wrap="nowrap"
                    >
                      <ActionIcon
                        variant="subtle"
                        color="rinseBlue"
                        aria-label={`Edit tarif ${shippingRate.maxDistanceMeters} meter`}
                        onClick={() =>
                          onEdit(
                            shippingRate,
                          )
                        }
                      >
                        <IconEdit size={18} />
                      </ActionIcon>

                      <ActionIcon
                        variant="subtle"
                        color="red"
                        aria-label={`Nonaktifkan tarif ${shippingRate.maxDistanceMeters} meter`}
                        onClick={() =>
                          onDeactivate(
                            shippingRate,
                          )
                        }
                      >
                        <IconTrash size={18} />
                      </ActionIcon>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              ),
            )}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={
          meta.pageSize as
            | 10
            | 20
            | 50
        }
        totalItems={
          meta.totalItems
        }
        totalPages={
          meta.totalPages
        }
        onPageChange={
          onPageChange
        }
        onPageSizeChange={
          onPageSizeChange
        }
      />
    </>
  );
}