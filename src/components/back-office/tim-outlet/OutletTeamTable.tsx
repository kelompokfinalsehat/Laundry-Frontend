"use client";

import { Badge, Stack, Table, Text } from "@mantine/core";
import { ServerPagination } from "@/components/ui/ServerPagination";
import { OutletTeamItem } from "@/types/api/employee.types";
import { EmployeeRole, PaginatedResponse } from "@/types/api";

type Props = {
  data: OutletTeamItem[];
  meta: PaginatedResponse<OutletTeamItem>["meta"];
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50 | 100) => void;
};

function getRoleLabel(role: Exclude<EmployeeRole, "OUTLET_ADMIN">) {
  const roleMap = {
    WORKER: "Worker",
    DRIVER: "Driver",
  };

  return roleMap[role];
}

function getWorkStatusLabel(status: OutletTeamItem["workStatus"]) {
  if (!status) {
    return "Belum tersedia";
  }

  const statusMap = {
    AVAILABLE: "Tersedia",
    BUSY: "Sedang bekerja",
    OFF_DUTY: "Tidak bertugas",
  };

  return statusMap[status];
}

function getWorkStatusColor(status: OutletTeamItem["workStatus"]) {
  if (!status) {
    return "gray";
  }

  const colorMap = {
    AVAILABLE: "green",
    BUSY: "blue",
    OFF_DUTY: "gray",
  };

  return colorMap[status];
}

function getStationLabel(stationType: string) {
  const stationMap: Record<string, string> = {
    WASHING: "Washing",
    IRONING: "Ironing",
    PACKING: "Packing",
  };

  return stationMap[stationType] ?? stationType;
}

function getTaskTypeLabel(taskType: string) {
  const taskTypeMap: Record<string, string> = {
    PICKUP: "Pickup",
    DELIVERY: "Delivery",
  };

  return taskTypeMap[taskType] ?? taskType;
}

function getAssignmentStatusLabel(status: string) {
  const statusMap: Record<string, string> = {
    ASSIGNED: "Ditugaskan",
    IN_PROGRESS: "Sedang dikerjakan",
    ON_HOLD_BYPASS: "Menunggu bypass",
  };

  return statusMap[status] ?? status;
}

function getAssignmentStatusColor(status: string) {
  const colorMap: Record<string, string> = {
    ASSIGNED: "yellow",
    IN_PROGRESS: "blue",
    ON_HOLD_BYPASS: "orange",
  };

  return colorMap[status] ?? "gray";
}

export function OutletTeamTable({ data, meta, onPageChange, onPageSizeChange }: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={850}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Karyawan</Table.Th>

              <Table.Th>Role</Table.Th>

              <Table.Th>Status Kerja</Table.Th>

              <Table.Th>Tugas Saat Ini</Table.Th>

              <Table.Th>Status Tugas</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((employee) => {
              const workerTask = employee.workerTasks[0];

              const driverTask = employee.driverTasks[0];

              const currentTask = workerTask ?? driverTask;

              const taskLabel = workerTask ? getStationLabel(workerTask.stationType) : driverTask ? getTaskTypeLabel(driverTask.taskType) : null;

              return (
                <Table.Tr key={employee.id}>
                  <Table.Td>
                    <Stack gap={2}>
                      <Text size="sm" fw={600} c="var(--color-text-primary)">
                        {employee.name}
                      </Text>

                      <Text size="xs" c="var(--color-text-secondary)">
                        {employee.email}
                      </Text>
                    </Stack>
                  </Table.Td>

                  <Table.Td>
                    <Text size="sm">{getRoleLabel(employee.role)}</Text>
                  </Table.Td>

                  <Table.Td>
                    <Badge color={getWorkStatusColor(employee.workStatus)} variant="light">
                      {getWorkStatusLabel(employee.workStatus)}
                    </Badge>
                  </Table.Td>

                  <Table.Td>
                    {taskLabel ? (
                      <Text size="sm">{taskLabel}</Text>
                    ) : (
                      <Text size="sm" c="var(--color-text-secondary)">
                        Tidak ada tugas aktif
                      </Text>
                    )}
                  </Table.Td>

                  <Table.Td>
                    {currentTask ? (
                      <Badge color={getAssignmentStatusColor(currentTask.status)} variant="light">
                        {getAssignmentStatusLabel(currentTask.status)}
                      </Badge>
                    ) : (
                      <Text size="sm" c="var(--color-text-secondary)">
                        -
                      </Text>
                    )}
                  </Table.Td>
                </Table.Tr>
              );
            })}
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
