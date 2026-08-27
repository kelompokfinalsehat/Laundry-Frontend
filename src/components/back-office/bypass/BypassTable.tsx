"use client";

import { ActionIcon, Badge, Group, Table, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { ServerPagination } from "@/components/ui/ServerPagination";
import { BypassListItem } from "@/types/api/bypass.types";
import { BypassStatus, PaginatedResponse, StationType } from "@/types/api";

type Props = {
  data: BypassListItem[];
  meta: PaginatedResponse<BypassListItem>["meta"];
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50) => void;
  onSelect: (bypass: BypassListItem) => void;
};

function formatDateTime(value: string | null) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function getStatusLabel(status: BypassStatus) {
  const statusMap: Record<BypassStatus, string> = {
    PENDING: "Menunggu",
    APPROVED: "Disetujui",
    REJECTED: "Ditolak",
  };

  return statusMap[status];
}

function getStatusColor(status: BypassStatus) {
  const colorMap: Record<BypassStatus, string> = {
    PENDING: "yellow",
    APPROVED: "green",
    REJECTED: "red",
  };

  return colorMap[status];
}

function getStationLabel(stationType: StationType) {
  const stationMap: Record<StationType, string> = {
    WASHING: "Washing",
    IRONING: "Ironing",
    PACKING: "Packing",
  };

  return stationMap[stationType];
}

export function BypassTable({ data, meta, onPageChange, onPageSizeChange, onSelect }: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={900}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Pesanan</Table.Th>

              <Table.Th>Worker</Table.Th>

              <Table.Th>Station</Table.Th>

              <Table.Th>Status</Table.Th>

              <Table.Th>Dibuat Pada</Table.Th>

              <Table.Th>Diputuskan Pada</Table.Th>

              <Table.Th ta="right">Aksi</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((bypass) => (
              <Table.Tr key={bypass.id}>
                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {bypass.order.orderCode}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {bypass.workerAssignment.worker?.name}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {getStationLabel(bypass.stationType)}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Badge color={getStatusColor(bypass.status)} variant="light">
                    {getStatusLabel(bypass.status)}
                  </Badge>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {formatDateTime(bypass.createdAt)}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {formatDateTime(bypass.decidedAt)}
                  </Text>
                </Table.Td>

                <Table.Td ta="right">
                  <Group justify="flex-end" gap="xs" wrap="nowrap">
                    <ActionIcon variant="subtle" color="rinseBlue" aria-label={`Lihat bypass ${bypass.id}`} onClick={() => onSelect(bypass)}>
                      <IconChevronRight size={18} />
                    </ActionIcon>
                  </Group>
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
