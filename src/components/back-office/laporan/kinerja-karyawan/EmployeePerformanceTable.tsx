"use client";

import { Badge, Paper, Table, Text } from "@mantine/core";
import { ServerPagination } from "@/components/ui/ServerPagination";
import { EmployeePerformanceItem } from "@/types/api/report.types";
import { PaginatedResponse } from "@/types/api";

type Props = {
  data: EmployeePerformanceItem[];
  meta: PaginatedResponse<EmployeePerformanceItem>["meta"];
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50 | 100) => void;
};

const formatNumber = (value: number) => new Intl.NumberFormat("id-ID", { maximumFractionDigits: 1 }).format(value);

function getRoleLabel(role: EmployeePerformanceItem["role"]) {
  return role === "DRIVER" ? "Driver" : "Worker";
}

function getRoleColor(role: EmployeePerformanceItem["role"]) {
  return role === "DRIVER" ? "blue" : "violet";
}

function formatDuration(minutes: number | null) {
  if (minutes === null) return "-";
  if (minutes < 60) return `${Math.round(minutes)} mnt`;
  return `${Math.floor(minutes / 60)} j ${Math.round(minutes % 60)} mnt`;
}

function getJobDetail(employee: EmployeePerformanceItem) {
  if (employee.role === "DRIVER") {
    return `Pickup ${employee.pickupJobs} · Delivery ${employee.deliveryJobs}`;
  }
  return `Wash ${employee.washingJobs} · Iron ${employee.ironingJobs} · Pack ${employee.packingJobs}`;
}

export function EmployeePerformanceTable({ data, meta, onPageChange, onPageSizeChange }: Props) {
  return (
    <Paper p="md" withBorder radius="md" style={{ backgroundColor: "var(--color-surface)" }}>
      <Text fw={600} mb={4}>
        Kinerja per Karyawan
      </Text>
      <Text size="sm" c="var(--color-text-secondary)" mb="md">
        Rincian pekerjaan yang selesai dan waktu penyelesaian rata-rata berdasarkan periode terpilih.
      </Text>

      <Table.ScrollContainer minWidth={900}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Nama Karyawan</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Rincian Pekerjaan</Table.Th>
              <Table.Th ta="right">Pekerjaan Selesai</Table.Th>
              <Table.Th ta="right">Rata-rata Waktu</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.map((employee) => (
              <Table.Tr key={employee.employeeId}>
                <Table.Td>
                  <Text size="sm" fw={600}>
                    {employee.employeeName}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Badge color={getRoleColor(employee.role)} variant="light">
                    {getRoleLabel(employee.role)}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {getJobDetail(employee)}
                  </Text>
                </Table.Td>
                <Table.Td ta="right">
                  <Text size="sm" fw={600}>
                    {formatNumber(employee.completedJobs)}
                  </Text>
                </Table.Td>
                <Table.Td ta="right">
                  <Text size="sm">{formatDuration(employee.averageCompletionMinutes)}</Text>
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
    </Paper>
  );
}
