"use client";

import { Badge, Group, Stack, Table, Text, UnstyledButton } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { ServerPagination } from "@/components/ui/ServerPagination";
import type { OutletAttendanceItem, OutletAttendanceSortBy } from "@/types/api/employee.types";
import type { PaginatedResponse } from "@/types/api";
import type { AttendanceStatus } from "@/types/api/employee.types";
import type { SortOrder } from "@/types/api";
import { useHover } from "@mantine/hooks";

type Props = {
  data: OutletAttendanceItem[];
  meta: PaginatedResponse<OutletAttendanceItem>["meta"];
  sortBy: OutletAttendanceSortBy;
  sortOrder: SortOrder;
  onSort: (column: OutletAttendanceSortBy) => void;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50 | 100) => void;
};

function getRoleLabel(role: OutletAttendanceItem["role"]) {
  const roleMap: Record<string, string> = {
    WORKER: "Worker",
    DRIVER: "Driver",
  };

  return roleMap[role] ?? role;
}

function getStatusLabel(status: AttendanceStatus) {
  const statusMap: Record<AttendanceStatus, string> = {
    NOT_CLOCKED_IN: "Belum absen",
    CLOCKED_IN: "Sedang bertugas",
    CLOCKED_OUT: "Sudah pulang",
  };

  return statusMap[status];
}

function getStatusColor(status: AttendanceStatus) {
  const colorMap: Record<AttendanceStatus, string> = {
    NOT_CLOCKED_IN: "gray",
    CLOCKED_IN: "blue",
    CLOCKED_OUT: "green",
  };

  return colorMap[status];
}

function formatTime(value: string | null) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function SortableHeader({
  label,
  column,
  sortBy,
  sortOrder,
  onSort,
}: {
  label: string;

  column: OutletAttendanceSortBy;

  sortBy: OutletAttendanceSortBy;

  sortOrder: SortOrder;

  onSort: (column: OutletAttendanceSortBy) => void;
}) {
  const isActive = sortBy === column;
    const {hovered, ref} = useHover()
  return (
    <Table.Th>
      <UnstyledButton
      ref={ref}
        onClick={() => onSort(column)}
        style={{
          width: "100%",
        }}
      >
        <Group gap={6} wrap="nowrap">
          <Text size="sm" fw={600}>
            {label}
          </Text>

          {isActive && (sortOrder === "asc" ? <IconChevronUp size={15} /> : <IconChevronDown size={15} />)}
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

export function AttendanceTable({ data, meta, sortBy, sortOrder, onSort, onPageChange, onPageSizeChange }: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={850}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <SortableHeader label="Karyawan" column="name" sortBy={sortBy} sortOrder={sortOrder} onSort={onSort} />

              <Table.Th>Role</Table.Th>

              <SortableHeader label="Jam Masuk" column="clockInAt" sortBy={sortBy} sortOrder={sortOrder} onSort={onSort} />

              <SortableHeader label="Jam Pulang" column="clockOutAt" sortBy={sortBy} sortOrder={sortOrder} onSort={onSort} />

              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((employee) => (
              <Table.Tr key={employee.employeeId}>
                <Table.Td>
                  <Stack gap={2}>
                    <Text size="sm" fw={600} c="var(--color-text-primary)">
                      {employee.employeeName}
                    </Text>

                    <Text size="xs" c="var(--color-text-secondary)">
                      {employee.employeeEmail}
                    </Text>
                  </Stack>
                </Table.Td>

                <Table.Td>
                  <Text size="sm">{getRoleLabel(employee.role)}</Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm">{formatTime(employee.clockInAt)}</Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm">{formatTime(employee.clockOutAt)}</Text>
                </Table.Td>

                <Table.Td>
                  <Badge variant="light" color={getStatusColor(employee.status)}>
                    {getStatusLabel(employee.status)}
                  </Badge>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={meta.pageSize as 10 | 20 | 50 | 100}
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
}
