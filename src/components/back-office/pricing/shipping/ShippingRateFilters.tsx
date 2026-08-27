"use client";

import { ActionIcon, Grid, Select, TextInput } from "@mantine/core";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import { SortOrder } from "@/types/api";
import type { ShippingRateQuery, ShippingRateSortBy } from "@/types/api/pricing.types";

type FiltersState = Pick<ShippingRateQuery, "search">;

type Props = {
  filters: FiltersState;
  sortBy: ShippingRateSortBy;
  sortOrder: SortOrder;
  onChange: (key: keyof FiltersState, value: ShippingRateQuery[keyof FiltersState]) => void;
  onSortByChange: (value: ShippingRateSortBy) => void;
  onSortOrderChange: (value: SortOrder) => void;
  onReset: () => void;
};

const SORT_BY_OPTIONS: {
  value: ShippingRateSortBy;
  label: string;
}[] = [
  {
    value: "maxDistanceMeters",
    label: "Batas Jarak",
  },
  {
    value: "price",
    label: "Harga",
  },
  {
    value: "createdAt",
    label: "Tanggal Dibuat",
  },
];

const SORT_ORDER_OPTIONS: {
  value: SortOrder;
  label: string;
}[] = [
  {
    value: "asc",
    label: "Menaik",
  },
  {
    value: "desc",
    label: "Menurun",
  },
];

export function ShippingRateFilters({ filters, sortBy, sortOrder, onChange, onSortByChange, onSortOrderChange, onReset }: Props) {
  return (
    <Grid align="flex-end">
      <Grid.Col
        span={{
          base: 12,
          md: 4,
        }}
      >
        <TextInput
          label="Cari"
          placeholder="Cari berdasarkan harga atau jarak"
          leftSection={<IconSearch size={16} />}
          value={filters.search ?? ""}
          onChange={(event) => onChange("search", event.currentTarget.value)}
        />
      </Grid.Col>

      <Grid.Col
        span={{
          base: 12,
          md: 3,
        }}
      >
        <Select
          label="Urutkan Berdasarkan"
          data={SORT_BY_OPTIONS}
          value={sortBy}
          onChange={(value) => {
            if (!value) {
              return;
            }

            onSortByChange(value as ShippingRateSortBy);
          }}
          allowDeselect={false}
        />
      </Grid.Col>

      <Grid.Col
        span={{
          base: 10,
          md: 3,
        }}
      >
        <Select
          label="Urutan"
          data={SORT_ORDER_OPTIONS}
          value={sortOrder}
          onChange={(value) => {
            if (!value) {
              return;
            }

            onSortOrderChange(value as SortOrder);
          }}
          allowDeselect={false}
        />
      </Grid.Col>

      <Grid.Col
        span={{
          base: 2,
          md: 2,
        }}
      >
        <ActionIcon variant="default" size="lg" aria-label="Reset filter" onClick={onReset}>
          <IconRefresh size={18} />
        </ActionIcon>
      </Grid.Col>
    </Grid>
  );
}
