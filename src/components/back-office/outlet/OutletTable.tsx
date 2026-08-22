import { ActionIcon, Badge, Table, Text, Group } from "@mantine/core";

import { IconEdit, IconTrash } from "@tabler/icons-react";

import { EmptyState } from "@/components/ui/EmptyState";
import { ServerPagination } from "@/components/ui/ServerPagination";

import type { Outlet } from "@/types/api/outlet.types";
import { PaginationMeta } from "@/types/api/pagination.type";

interface OutletTableProps {
  data: Outlet[];
  meta: PaginationMeta;

  onPageChange: (page: number) => void;

  onPageSizeChange: (size: 10 | 20 | 50) => void;

  onEdit: (id: string) => void;

  onDelete: (outlet: Outlet) => void;
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

export function OutletTable({
  data,
  meta,
  onPageChange,
  onPageSizeChange,
  onEdit,
  onDelete,
}: OutletTableProps) {
  return (
    <>
      <Table.ScrollContainer minWidth={700}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Nama Outlet</Table.Th>
              <Table.Th>Alamat</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Dibuat</Table.Th>

              <Table.Th ta="right">Aksi</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((outlet) => (
              <Table.Tr key={outlet.id}>
                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {outlet.name}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)" lineClamp={1}>
                    {outlet.address}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Badge
                    color={outlet.isActive ? "green" : "gray"}
                    variant="light"
                  >
                    {outlet.isActive ? "Aktif" : "Tidak Aktif"}
                  </Badge>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {formatDate(outlet.createdAt)}
                  </Text>
                </Table.Td>

                <Table.Td ta="right">
                  <Group gap={4} justify="flex-end">
                    <ActionIcon
                      variant="subtle"
                      color="rinseBlue"
                      aria-label={`Edit ${outlet.name}`}
                      onClick={() => onEdit(outlet.id)}
                    >
                      <IconEdit size={18} />
                    </ActionIcon>
                    {outlet.isActive && (
                      <ActionIcon
                        variant="subtle"
                        color="red"
                        aria-label={`Nonaktifkan ${outlet.name}`}
                        onClick={() => onDelete(outlet)}
                      >
                        <IconTrash size={18} />
                      </ActionIcon>
                    )}
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      {data.length === 0 && <EmptyState />}

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
