"use client";

import {
  ActionIcon,
  Group,
  Select,
  TextInput,
  Tooltip,
} from "@mantine/core";

import {
  IconRefresh,
  IconSearch,
} from "@tabler/icons-react";

import type {
  LaundryItemQuery,
} from "@/types/api/laundry-item.types";

type LaundryItemFiltersState = Pick<
  LaundryItemQuery,
  "search"
>;

type Props = {
  filters: LaundryItemFiltersState;

  sortBy: NonNullable<
    LaundryItemQuery["sortBy"]
  >;

  sortOrder: NonNullable<
    LaundryItemQuery["sortOrder"]
  >;

  onChange: (
    key: keyof LaundryItemFiltersState,
    value: string | null,
  ) => void;

  onSortByChange: (
    value: NonNullable<
      LaundryItemQuery["sortBy"]
    >,
  ) => void;

  onSortOrderChange: (
    value: NonNullable<
      LaundryItemQuery["sortOrder"]
    >,
  ) => void;

  onReset: () => void;
};

export function LaundryItemFilters({
  filters,
  sortBy,
  sortOrder,
  onChange,
  onSortByChange,
  onSortOrderChange,
  onReset,
}: Props) {
  return (
    <Group
      align="flex-end"
      wrap="wrap"
    >
      <TextInput
        label="Cari"
        placeholder="Cari nama item..."
        leftSection={
          <IconSearch size={16} />
        }
        value={
          filters.search ?? ""
        }
        onChange={(event) =>
          onChange(
            "search",
            event.currentTarget.value,
          )
        }
        style={{
          flex: 1,
          minWidth: 220,
        }}
      />

      <Select
        label="Urutkan"
        value={sortBy}
        onChange={(value) => {
          if (
            value === "name" ||
            value === "createdAt"
          ) {
            onSortByChange(value);
          }
        }}
        data={[
          {
            value: "createdAt",
            label: "Tanggal dibuat",
          },
          {
            value: "name",
            label: "Nama",
          },
        ]}
        w={180}
      />

      <Select
        label="Urutan"
        value={sortOrder}
        onChange={(value) => {
          if (
            value === "asc" ||
            value === "desc"
          ) {
            onSortOrderChange(value);
          }
        }}
        data={[
          {
            value: "desc",
            label: "Menurun",
          },
          {
            value: "asc",
            label: "Menaik",
          },
        ]}
        w={150}
      />

      <Tooltip label="Reset filter">
        <ActionIcon
          variant="default"
          size="input-sm"
          onClick={onReset}
          aria-label="Reset filter"
        >
          <IconRefresh size={16} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}