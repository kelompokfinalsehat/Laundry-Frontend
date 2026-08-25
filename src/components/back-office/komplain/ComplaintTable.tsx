"use client";

import { ActionIcon, Badge, Group, Table, Text } from "@mantine/core";

import { IconEdit } from "@tabler/icons-react";

import { ServerPagination } from "@/components/ui/ServerPagination";

import type {
  ComplaintListItem,
  ComplaintStatus,
} from "@/types/api/complaint.types";

import type { PaginationMeta } from "@/types/api/pagination.type";

type Props = {
  data: ComplaintListItem[];
  meta: PaginationMeta;

  onPageChange: (page: number) => void;

  onPageSizeChange: (pageSize: 10 | 20 | 50) => void;

  onDecide: (complaint: ComplaintListItem) => void;
};

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function getStatusLabel(status: ComplaintStatus) {
  const statusMap: Record<ComplaintStatus, string> = {
    OPEN: "Menunggu",
    APPROVED: "Diterima",
    REJECTED: "Ditolak",
  };

  return statusMap[status];
}

function getStatusColor(status: ComplaintStatus) {
  const colorMap: Record<ComplaintStatus, string> = {
    OPEN: "yellow",
    APPROVED: "green",
    REJECTED: "red",
  };

  return colorMap[status];
}

function getCategoryLabel(category: ComplaintListItem["category"]) {
  const categoryMap: Record<ComplaintListItem["category"], string> = {
    TIDAK_SESUAI: "Tidak Sesuai",
    RUSAK: "Rusak",
    HILANG: "Hilang",
  };

  return categoryMap[category];
}

export function ComplaintTable({
  data,
  meta,
  onPageChange,
  onPageSizeChange,
  onDecide,
}: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={900}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Pesanan</Table.Th>

              <Table.Th>Pelanggan</Table.Th>

              <Table.Th>Kategori</Table.Th>

              <Table.Th>Status</Table.Th>

              <Table.Th>Dibuat Pada</Table.Th>

              <Table.Th ta="right">Aksi</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((complaint) => (
              <Table.Tr key={complaint.id}>
                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {complaint.order.orderCode}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {complaint.customer.name}
                  </Text>

                  <Text size="xs" c="var(--color-text-secondary)">
                    {complaint.customer.email}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {getCategoryLabel(complaint.category)}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Badge
                    color={getStatusColor(complaint.status)}
                    variant="light"
                  >
                    {getStatusLabel(complaint.status)}
                  </Badge>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {formatDateTime(complaint.createdAt)}
                  </Text>
                </Table.Td>

                <Table.Td ta="right">
                  <Group justify="flex-end" gap="xs" wrap="nowrap">
                    {complaint.status === "OPEN" && (
                      <ActionIcon
                        variant="subtle"
                        color="rinseBlue"
                        aria-label={`Tangani komplain ${complaint.order.orderCode}`}
                        onClick={() => onDecide(complaint)}
                      >
                        <IconEdit size={18} />
                      </ActionIcon>
                    )}
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
