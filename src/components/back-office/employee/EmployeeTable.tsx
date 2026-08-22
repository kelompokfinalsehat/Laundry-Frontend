"use client";

import { Badge, Paper, ScrollArea, Table, Text } from "@mantine/core";

import type { Employee } from "@/types/api/employee.types";

type Props = {
  data: Employee[];
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

const WORK_STATUS: Record<
  Employee["workStatus"],
  { label: string; color: string }
> = {
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
};

export function EmployeeTable({ data }: Props) {
  return (
    <Paper
      withBorder
      radius="md"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <ScrollArea>
        <Table striped highlightOnHover miw={850}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Nama</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Outlet</Table.Th>
              <Table.Th>Status Akun</Table.Th>
              <Table.Th>Status Kerja</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((employee) => {
              const account = ACCOUNT_STATUS[employee.accountStatus] ?? {
                label: employee.accountStatus ?? "-",
                color: "gray",
              };

              const work = WORK_STATUS[employee.workStatus] ?? {
                label: employee.workStatus ?? "-",
                color: "gray",
              };

              return (
                <Table.Tr key={employee.id}>
                  <Table.Td>
                    <Text size="sm" fw={600}>
                      {employee.name}
                    </Text>
                  </Table.Td>

                  <Table.Td>
                    <Text size="sm">{employee.email}</Text>
                  </Table.Td>

                  <Table.Td>
                    <Text size="sm">
                      {ROLE_LABEL[employee.role] ?? employee.role}
                    </Text>
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
                    <Badge variant="light" color={work.color}>
                      {work.label}
                    </Badge>
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
}
