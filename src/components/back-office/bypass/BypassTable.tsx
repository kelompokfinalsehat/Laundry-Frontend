"use client";

import {
  ActionIcon,
  Badge,
  Group,
  Table,
  Text,
  UnstyledButton,
} from "@mantine/core";
import {
  IconChevronDown,
  IconChevronRight,
  IconChevronUp,
} from "@tabler/icons-react";

import { ServerPagination } from "@/components/ui/ServerPagination";
import {
  BypassListItem,
  BypassSortBy,
} from "@/types/api/bypass.types";
import {
  BypassStatus,
  PaginatedResponse,
  SortOrder,
  StationType,
} from "@/types/api";

type Props = {
  data: BypassListItem[];
  meta: PaginatedResponse<BypassListItem>["meta"];
  sortBy: BypassSortBy;
  sortOrder: SortOrder;
  onSort: (column: BypassSortBy) => void;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50) => void;
  onSelect: (bypass: BypassListItem) => void;
};

function SortableHeader({
  label,
  column,
  sortBy,
  sortOrder,
  onSort,
}: {
  label: string;
  column: BypassSortBy;
  sortBy: BypassSortBy;
  sortOrder: SortOrder;
  onSort: (column: BypassSortBy) => void;
}) {
  const isActive = sortBy === column;

  return (
    <Table.Th>
      <UnstyledButton
        onClick={() => onSort(column)}
        style={{
          width: "100%",
        }}
      >
        <Group
          gap={6}
          wrap="nowrap"
        >
          <Text
            size="sm"
            fw={600}
          >
            {label}
          </Text>

          {isActive &&
            (sortOrder === "asc" ? (
              <IconChevronUp size={15} />
            ) : (
              <IconChevronDown size={15} />
            ))}
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

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

export function BypassTable({
  data,
  meta,
  sortBy,
  sortOrder,
  onSort,
  onPageChange,
  onPageSizeChange,
  onSelect,
}: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={900}>
        <Table
          highlightOnHover
          verticalSpacing="sm"
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                Pesanan
              </Table.Th>

              <Table.Th>
                Worker
              </Table.Th>

              <Table.Th>
                Station
              </Table.Th>

              <Table.Th>
                Status
              </Table.Th>

              <SortableHeader
                label="Dibuat Pada"
                column="createdAt"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
              />

              <SortableHeader
                label="Diputuskan Pada"
                column="decidedAt"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
              />

              <Table.Th ta="right">
                Aksi
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((bypass) => (
              <Table.Tr key={bypass.id}>
                <Table.Td>
                  <Text
                    size="sm"
                    fw={600}
                    c="var(--color-text-primary)"
                  >
                    {bypass.order.orderCode}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text
                    size="sm"
                    fw={600}
                    c="var(--color-text-primary)"
                  >
                    {bypass.workerAssignment.worker?.name}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text
                    size="sm"
                    c="var(--color-text-secondary)"
                  >
                    {getStationLabel(
                      bypass.stationType
                    )}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Badge
                    variant="light"
                    color={getStatusColor(
                      bypass.status
                    )}
                  >
                    {getStatusLabel(
                      bypass.status
                    )}
                  </Badge>
                </Table.Td>

                <Table.Td>
                  <Text size="sm">
                    {formatDateTime(
                      bypass.createdAt
                    )}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm">
                    {formatDateTime(
                      bypass.decidedAt
                    )}
                  </Text>
                </Table.Td>

                <Table.Td ta="right">
                  <ActionIcon
                    variant="subtle"
                    onClick={() =>
                      onSelect(bypass)
                    }
                    aria-label="Lihat detail bypass"
                  >
                    <IconChevronRight size={18} />
                  </ActionIcon>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={
          meta.pageSize as 10 | 20 | 50
        }
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={
          onPageSizeChange
        }
      />
    </>
  );
}