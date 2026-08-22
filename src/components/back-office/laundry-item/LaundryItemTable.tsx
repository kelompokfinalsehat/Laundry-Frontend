"use client";

import {
  ActionIcon,
  Group,
  Menu,
  Paper,
  ScrollArea,
  Table,
  Text,
} from "@mantine/core";

import {
  IconDotsVertical,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";

import { ServerPagination } from "@/components/ui/ServerPagination";

import type {
  LaundryItem,
} from "@/types/api/laundry-item.types";
import { PaginationMeta } from "@/types/api/pagination.type";


type Props = {
  data: LaundryItem[];
  meta: PaginationMeta;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  onEdit: (item: LaundryItem) => void;
  onDeactivate: (item: LaundryItem) => void;
};

export function LaundryItemTable({
  data,
  meta,
  onPageChange,
  onPageSizeChange,
  onEdit,
  onDeactivate,
}: Props) {
  return (
    <Paper
      withBorder
      radius="md"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <ScrollArea>
        <Table
          striped
          highlightOnHover
          miw={650}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Nama Item</Table.Th>
              <Table.Th>Dibuat</Table.Th>
              <Table.Th ta="right">
                Aksi
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((item) => (
              <Table.Tr key={item.id}>
                <Table.Td>
                  <Text
                    size="sm"
                    fw={600}
                  >
                    {item.name}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm">
                    {new Date(
                      item.createdAt,
                    ).toLocaleDateString(
                      "id-ID",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      },
                    )}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Group
                    justify="flex-end"
                    gap={4}
                  >
                    <Menu
                      shadow="md"
                      width={160}
                      position="bottom-end"
                    >
                      <Menu.Target>
                        <ActionIcon
                          variant="subtle"
                          aria-label="Aksi item"
                        >
                          <IconDotsVertical
                            size={18}
                          />
                        </ActionIcon>
                      </Menu.Target>

                      <Menu.Dropdown>
                        <Menu.Item
                          leftSection={
                            <IconEdit size={16} />
                          }
                          onClick={() =>
                            onEdit(item)
                          }
                        >
                          Edit
                        </Menu.Item>

                        <Menu.Item
                          color="red"
                          leftSection={
                            <IconTrash size={16} />
                          }
                          onClick={() =>
                            onDeactivate(item)
                          }
                        >
                          Nonaktifkan
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>

      <ServerPagination
        page={meta.page}
        pageSize={meta.pageSize as 10 | 20 | 50}
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </Paper>
  );
}