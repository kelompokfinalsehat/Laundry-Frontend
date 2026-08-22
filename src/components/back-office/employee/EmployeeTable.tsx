"use client";

import { ActionIcon, Badge, Group, Table, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

import { ServerPagination } from "@/components/ui/ServerPagination";

import type { Employee } from "@/types/api/employee.types";
import type { PaginationMeta } from "@/types/api/pagination.type";

type Props = {
  data: Employee[];
  meta: PaginationMeta;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50) => void;
  onView: (employeeId: string) => void;
};

const ROLE_LABEL: Record<Employee["role"], string> = {
  OUTLET_ADMIN: "Outlet Admin",
  WORKER: "Worker",
  DRIVER: "Driver",
};

const ACCOUNT_STATUS: Record<
  Employee["accountStatus"],
  { label: string; color: string }
> = {
  INVITED: {
    label: "Diundang",
    color: "yellow",
  },
  ACTIVE: {
    label: "Aktif",
    color: "green",
  },
  INACTIVE: {
    label: "Tidak Aktif",
    color: "gray",
  },
};

const WORK_STATUS = {
  OFF_DUTY: {
    label: "Off Duty",
    color: "gray",
  },
  AVAILABLE: {
    label: "Tersedia",
    color: "blue",
  },
  BUSY: {
    label: "Sibuk",
    color: "orange",
  },
} as const;

export function EmployeeTable({
  data,
  meta,
  onPageChange,
  onPageSizeChange,
  onView,
}: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={900}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Nama</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Outlet</Table.Th>
              <Table.Th>Status Akun</Table.Th>
              <Table.Th>Status Kerja</Table.Th>
              <Table.Th ta="right">Aksi</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((employee) => {
              const account = ACCOUNT_STATUS[employee.accountStatus];

              const work = employee.workStatus
                ? WORK_STATUS[employee.workStatus]
                : null;

              return (
                <Table.Tr key={employee.id}>
                  <Table.Td>
                    <Text size="sm" fw={600} c="var(--color-text-primary)">
                      {employee.name}
                    </Text>
                  </Table.Td>

                  <Table.Td>
                    <Text size="sm" c="var(--color-text-secondary)">
                      {employee.email}
                    </Text>
                  </Table.Td>

                  <Table.Td>
                    <Text size="sm">{ROLE_LABEL[employee.role]}</Text>
                  </Table.Td>

                  <Table.Td>
                    <Text size="sm">{employee.currentOutlet?.name ?? "-"}</Text>
                  </Table.Td>

                  <Table.Td>
                    <Badge variant="light" color={account.color}>
                      {account.label}
                    </Badge>
                  </Table.Td>

                  <Table.Td>
                    {work ? (
                      <Badge variant="light" color={work.color}>
                        {work.label}
                      </Badge>
                    ) : (
                      <Text size="sm" c="var(--color-text-secondary)">
                        -
                      </Text>
                    )}
                  </Table.Td>

                  <Table.Td ta="right">
                    <Group gap={4} justify="flex-end">
                      <ActionIcon
                        variant="subtle"
                        color="rinseBlue"
                        aria-label={`Lihat ${employee.name}`}
                        onClick={() => onView(employee.id)}
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
        pageSize={meta.pageSize as 10 | 20 | 50}
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
}
