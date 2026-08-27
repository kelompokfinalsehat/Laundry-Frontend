"use client";

import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import { BypassQuery, BypassSortBy } from "@/types/api/bypass.types";
import { SortOrder } from "@/types/api";

type BypassFiltersState = Pick<BypassQuery, "search" | "status" | "stationType">;

type Props = {
  filters: BypassFiltersState;
  sortBy: NonNullable<BypassQuery["sortBy"]>;
  sortOrder: NonNullable<BypassQuery["sortOrder"]>;
  onChange: (key: keyof BypassFiltersState, value: string | null) => void;
  onSortByChange: (value: BypassSortBy) => void;
  onSortOrderChange: (value: SortOrder) => void;
  onReset: () => void;
};

const STATUS_OPTIONS = [
  {
    value: "PENDING",
    label: "Menunggu",
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

const STATION_TYPE_OPTIONS = [
  {
    value: "WASHING",
    label: "Washing",
  },
  {
    value: "IRONING",
    label: "Ironing",
  },
  {
    value: "PACKING",
    label: "Packing",
  },
];

const SORT_OPTIONS = [
  {
    value: "createdAt",
    label: "Tanggal dibuat",
  },
  {
    value: "decidedAt",
    label: "Tanggal keputusan",
  },
];

export function BypassFilters({ filters, sortBy, sortOrder, onChange, onSortByChange, onSortOrderChange, onReset }: Props) {
  return (
    <>
      <Group align="flex-end" wrap="wrap" gap="sm">
        <TextInput
          label="Cari"
          placeholder="Kode pesanan atau worker"
          leftSection={<IconSearch size={16} />}
          value={filters.search ?? ""}
          onChange={(event) => onChange("search", event.currentTarget.value || null)}
          style={{
            flex: 1,
            minWidth: 220,
          }}
        />

        <Select
          label="Urutkan"
          value={sortBy}
          data={SORT_OPTIONS}
          onChange={(value) => {
            if (value === "createdAt" || value === "decidedAt") {
              onSortByChange(value);
            }
          }}
          w={180}
        />

        <Select
          label="Urutan"
          value={sortOrder}
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
          onChange={(value) => {
            if (value === "asc" || value === "desc") {
              onSortOrderChange(value);
            }
          }}
          w={180}
        />

        <Tooltip label="Reset filter">
          <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
            <IconRefresh size={16} />
          </ActionIcon>
        </Tooltip>
      </Group>

      <Group align="flex-end" wrap="wrap" gap="sm">
        <Select
          label="Status"
          placeholder="Semua status"
          clearable
          data={STATUS_OPTIONS}
          value={filters.status ?? null}
          onChange={(value) => onChange("status", value)}
        />

        <Select
          label="Station"
          placeholder="Semua station"
          clearable
          data={STATION_TYPE_OPTIONS}
          value={filters.stationType ?? null}
          onChange={(value) => onChange("stationType", value)}
        />
      </Group>
    </>
  );
}
