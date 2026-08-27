"use client";

import { ActionIcon, Badge, Button, Group, Pagination, Paper, Select, Stack, Text } from "@mantine/core";

import { IconArrowsSort } from "@tabler/icons-react";
import { useState } from "react";

import { ClaimAssignmentModal } from "./ClaimAssignmentModal";

export type AvailableItem = {
  id: string;
  badgeLabel: string;
  orderCode: string;
  createdAt: string;
};

type FilterOption = {
  value: string;
  label: string;
};

type AvailableAssignmentsProps = {
  filterLabel: string;
  filterOptions: FilterOption[];
  filterValue: string;

  items: AvailableItem[];

  emptyText: string;

  page: number;
  totalPages: number;
  totalItems: number;

  isClaiming?: boolean;

  onFilterChange: (value: string | null) => void;
  onSortChange: () => void;
  onPageChange: (page: number) => void;
  onClaim: (assignmentId: string) => void;
};

export function AvailableAssignments({
  filterLabel,
  filterOptions,
  filterValue,
  items,
  emptyText,
  page,
  totalPages,
  totalItems,
  isClaiming = false,
  onFilterChange,
  onSortChange,
  onPageChange,
  onClaim,
}: AvailableAssignmentsProps) {
  const [selectedItem, setSelectedItem] = useState<AvailableItem | null>(null);

  function handleCloseModal() {
    if (isClaiming) return;

    setSelectedItem(null);
  }

  function handleConfirmClaim() {
    if (!selectedItem) return;

    onClaim(selectedItem.id);
  }

  return (
    <>
      <Stack gap="md">
        <Group justify="space-between" align="flex-end">
          <Select label={filterLabel} data={filterOptions} value={filterValue} onChange={onFilterChange} w={180} />

          <ActionIcon variant="light" color="gray" size="lg" onClick={onSortChange} aria-label="Ubah urutan tugas">
            <IconArrowsSort size={18} />
          </ActionIcon>
        </Group>

        {items.length === 0 ? (
          <Paper withBorder radius="md" p="xl">
            <Text size="sm" c="dimmed" ta="center">
              {emptyText}
            </Text>
          </Paper>
        ) : (
          items.map((item) => (
            <Paper key={item.id} withBorder radius="md" p="md">
              <Group justify="space-between">
                <Group gap="xs">
                  <Badge color="yellow.7" variant="light">
                    {item.badgeLabel}
                  </Badge>

                  <Text size="sm" fw={600}>
                    {item.orderCode}
                  </Text>
                </Group>

                <Button size="xs" variant="light" onClick={() => setSelectedItem(item)}>
                  Ambil Tugas
                </Button>
              </Group>
            </Paper>
          ))
        )}

        {totalPages > 1 && (
          <Group justify="center">
            <Pagination value={page} total={totalPages} onChange={onPageChange} />
          </Group>
        )}

        <Text size="xs" c="dimmed" ta="center">
          Total {totalItems} tugas tersedia
        </Text>
      </Stack>

      <ClaimAssignmentModal item={selectedItem} isClaiming={isClaiming} onClose={handleCloseModal} onConfirm={handleConfirmClaim} />
    </>
  );
}
