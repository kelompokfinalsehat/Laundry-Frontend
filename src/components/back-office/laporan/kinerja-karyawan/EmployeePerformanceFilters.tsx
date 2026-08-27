"use client";

import { ActionIcon, Group, Paper, Select, Stack, TextInput, Tooltip } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import { EmployeePerformanceQuery, EmployeePerformanceSortBy } from "@/types/api/report.types";
import { SortOrder } from "@/types/api";

type EmployeePerformanceFiltersState = Pick<EmployeePerformanceQuery, "search" | "role" | "stationType" | "outletId" | "startDate" | "endDate">;

type Props = {
  filters: EmployeePerformanceFiltersState;
  sortBy: NonNullable<EmployeePerformanceQuery["sortBy"]>;
  sortOrder: NonNullable<EmployeePerformanceQuery["sortOrder"]>;
  outlets?: {
    id: string;
    name: string;
  }[];
  onChange: (key: keyof EmployeePerformanceFiltersState, value: string | null) => void;
  onSortByChange: (value: EmployeePerformanceSortBy) => void;
  onSortOrderChange: (value: SortOrder) => void;
  onReset: () => void;
};

const ROLE_OPTIONS = [
  {
    value: "DRIVER",
    label: "Driver",
  },
  {
    value: "WORKER",
    label: "Worker",
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
    value: "completedJobs",
    label: "Pekerjaan selesai",
  },
  {
    value: "name",
    label: "Nama karyawan",
  },
];

export function EmployeePerformanceFilters({
  filters,
  sortBy,
  sortOrder,
  outlets = [],
  onChange,
  onSortByChange,
  onSortOrderChange,
  onReset,
}: Props) {
  return (
    <Paper
      p="md"
      withBorder
      radius="md"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="md">
        <Group align="end" wrap="wrap" gap="sm">
          <TextInput
            label="Cari"
            placeholder="Cari nama karyawan"
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
              if (value === "completedJobs" || value === "name") {
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

        <Group align="flex-end" grow>
          <Select
            label="Role"
            placeholder="Semua role"
            clearable
            data={ROLE_OPTIONS}
            value={filters.role ?? null}
            onChange={(value) => onChange("role", value)}
          />

          <Select
            label="Station"
            placeholder="Semua station"
            clearable
            data={STATION_TYPE_OPTIONS}
            value={filters.stationType ?? null}
            onChange={(value) => onChange("stationType", value)}
            disabled={filters.role === "DRIVER"}
          />

          <Select
            label="Outlet"
            placeholder="Semua outlet"
            clearable
            searchable
            data={outlets.map((outlet) => ({
              value: outlet.id,
              label: outlet.name,
            }))}
            value={filters.outletId ?? null}
            onChange={(value) => onChange("outletId", value)}
          />

          <DatePickerInput
            label="Dari Tanggal"
            placeholder="Pilih tanggal"
            clearable
            value={filters.startDate ?? null}
            valueFormat="DD MMM YYYY"
            onChange={(value) => onChange("startDate", value)}
          />

          <DatePickerInput
            label="Sampai Tanggal"
            placeholder="Pilih tanggal"
            clearable
            value={filters.endDate ?? null}
            valueFormat="DD MMM YYYY"
            onChange={(value) => onChange("endDate", value)}
          />
        </Group>
      </Stack>
    </Paper>
  );
}
