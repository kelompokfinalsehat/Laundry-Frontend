"use client";

import {
  ActionIcon,
  Group,
  Select,
  TextInput,
  Tooltip,
} from "@mantine/core";

import { DateInput } from "@mantine/dates";

import {
  IconRefresh,
  IconSearch,
} from "@tabler/icons-react";

import type {
  OrderQuery,
} from "@/types/api/order.types";

type ReceptionFiltersState = Pick<
  OrderQuery,
  | "search"
  | "startDate"
  | "endDate"
>;

type Props = {
  query: OrderQuery;

  onChange: <
    Key extends keyof ReceptionFiltersState,
  >(
    key: Key,
    value: ReceptionFiltersState[Key],
  ) => void;

  onSortByChange: (
    value: NonNullable<OrderQuery["sortBy"]>,
  ) => void;

  onSortOrderChange: (
    value: NonNullable<OrderQuery["sortOrder"]>,
  ) => void;

  onReset: () => void;
};

const SORT_OPTIONS = [
  {
    value: "pickupScheduledAt",
    label: "Jadwal pickup",
  },
  {
    value: "createdAt",
    label: "Tanggal dibuat",
  },
  {
    value: "orderCode",
    label: "Kode pesanan",
  },
];

export function ReceptionFilters({
  query,
  onChange,
  onSortByChange,
  onSortOrderChange,
  onReset,
}: Props) {
  return (
    <Group
      align="end"
      wrap="wrap"
      gap="sm"
    >
      <TextInput
        label="Cari"
        placeholder="Kode pesanan atau pelanggan"
        leftSection={<IconSearch size={16} />}
        value={query.search ?? ""}
        onChange={(event) =>
          onChange(
            "search",
            event.currentTarget.value || undefined,
          )
        }
      />

      <DateInput
        label="Dari Tanggal"
        placeholder="Pilih tanggal"
        clearable
        value={query.startDate ?? null}
        valueFormat="DD MMM YYYY"
        onChange={(value) =>
          onChange(
            "startDate",
            value ?? undefined,
          )
        }
      />

      <DateInput
        label="Sampai Tanggal"
        placeholder="Pilih tanggal"
        clearable
        value={query.endDate ?? null}
        valueFormat="DD MMM YYYY"
        onChange={(value) =>
          onChange(
            "endDate",
            value ?? undefined,
          )
        }
      />

      <Select
        label="Urutkan"
        value={query.sortBy ?? "pickupScheduledAt"}
        data={SORT_OPTIONS}
        onChange={(value) => {
          if (
            value === "createdAt" ||
            value === "pickupScheduledAt" ||
            value === "orderCode"
          ) {
            onSortByChange(value);
          }
        }}
      />

      <Select
        label="Urutan"
        value={query.sortOrder ?? "asc"}
        data={[
          {
            value: "asc",
            label: "Menaik",
          },
          {
            value: "desc",
            label: "Menurun",
          },
        ]}
        onChange={(value) => {
          if (
            value === "asc" ||
            value === "desc"
          ) {
            onSortOrderChange(value);
          }
        }}
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