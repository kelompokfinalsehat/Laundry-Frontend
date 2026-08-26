"use client";

import {
  ActionIcon,
  Button,
  Group,
  Select,
  TextInput,
  Tooltip,
} from "@mantine/core";

import { IconRefresh, IconSearch } from "@tabler/icons-react";

import type {
  ComplaintCategory,
  ComplaintQuery,
  ComplaintSortBy,
  ComplaintStatus,
  SortOrder,
} from "@/types/api/complaint.types";

type Props = {
  query: ComplaintQuery;

  onChange: <Key extends keyof ComplaintQuery>(
    key: Key,
    value: ComplaintQuery[Key],
  ) => void;

  onStatusChange: (value: ComplaintStatus | null) => void;

  onSortByChange: (value: ComplaintSortBy) => void;

  onSortOrderChange: (value: SortOrder) => void;

  onCategoryChange: (value: ComplaintCategory | null) => void;

  onReset: () => void;
};

const STATUS_OPTIONS = [
  {
    value: "OPEN",
    label: "Menunggu Keputusan",
  },
  {
    value: "APPROVED",
    label: "Disetujui",
  },
  {
    value: "REJECTED",
    label: "Ditolak",
  },
];

const CATEGORY_OPTIONS = [
  {
    value: "TIDAK_SESUAI",
    label: "Tidak Sesuai",
  },
  {
    value: "RUSAK",
    label: "Rusak",
  },
  {
    value: "HILANG",
    label: "Hilang",
  },
];

const SORT_BY_OPTIONS = [
  {
    value: "createdAt",
    label: "Tanggal Keluhan",
  },
  {
    value: "decidedAt",
    label: "Tanggal Keputusan",
  },
];

const SORT_ORDER_OPTIONS = [
  {
    value: "desc",
    label: "Terbaru",
  },
  {
    value: "asc",
    label: "Terlama",
  },
];

export function ComplaintFilters({
  query,
  onChange,
  onStatusChange,
  onSortByChange,
  onSortOrderChange,
  onReset,
  onCategoryChange,
}: Props) {
  return (
    <>
      <Group align="flex-end">
        <TextInput
          label="Cari"
          placeholder="Cari kode pesanan atau pelanggan"
          leftSection={<IconSearch size={16} />}
          value={query.search ?? ""}
          onChange={(event) => onChange("search", event.currentTarget.value)}
          style={{ flex: 1, minWidth: 280 }}
        />

        <Select
          label="Urutkan"
          data={SORT_BY_OPTIONS}
          value={query.sortBy ?? "createdAt"}
          onChange={(value) => {
            if (!value) {
              return;
            }

            onSortByChange(value as ComplaintSortBy);
          }}
          w={180}
        />

        <Select
          label="Urutan"
          data={SORT_ORDER_OPTIONS}
          value={query.sortOrder ?? "desc"}
          onChange={(value) => {
            if (!value) {
              return;
            }

            onSortOrderChange(value as SortOrder);
          }}
          w={180}
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
      <Group align="flex-end">
        <Select
          label="Status"
          placeholder="Semua status"
          clearable
          data={STATUS_OPTIONS}
          value={query.status ?? null}
          onChange={(value) => onStatusChange(value as ComplaintStatus | null)}
        />

        <Select
          label="Kategori"
          placeholder="Semua kategori"
          clearable
          data={CATEGORY_OPTIONS}
          value={query.category ?? null}
          onChange={(value) =>
            onCategoryChange(value as ComplaintCategory | null)
          }
        />
      </Group>
    </>
  );
}
