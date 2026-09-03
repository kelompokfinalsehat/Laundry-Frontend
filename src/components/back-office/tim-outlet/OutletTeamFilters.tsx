"use client";

import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import type { SortOrder } from "@/types/api";
import type { EmployeeRole, StationType, WorkStatus } from "@/types/api";
import type { OutletTeamQuery, OutletTeamSortBy } from "@/types/api/employee.types";

type OutletTeamFiltersState = Pick<OutletTeamQuery, "search" | "role" | "workStatus" | "stationType">;
type FilterKey = keyof OutletTeamFiltersState;

type Props = {
  filters: OutletTeamFiltersState;
  sortBy: NonNullable<OutletTeamQuery["sortBy"]>;
  sortOrder: NonNullable<OutletTeamQuery["sortOrder"]>;
  onChange: <Key extends FilterKey>(key: Key, value: OutletTeamFiltersState[Key]) => void;
  onSortByChange: (value: OutletTeamSortBy) => void;
  onSortOrderChange: (value: SortOrder) => void;
  onReset: () => void;
};

const ROLE_OPTIONS = [
  {
    value: "WORKER",
    label: "Worker",
  },
  {
    value: "DRIVER",
    label: "Driver",
  },
];

const WORK_STATUS_OPTIONS = [
  {
    value: "AVAILABLE",
    label: "Tersedia",
  },
  {
    value: "BUSY",
    label: "Sedang bekerja",
  },
  {
    value: "OFF_DUTY",
    label: "Tidak bertugas",
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
    value: "name",
    label: "Nama",
  },
  {
    value: "role",
    label: "Role",
  },
  {
    value: "workStatus",
    label: "Status kerja",
  },
];

export function OutletTeamFilters({ filters, sortBy, sortOrder, onChange, onSortByChange, onSortOrderChange, onReset }: Props) {
  return (
    <>
      <Group align="flex-end" wrap="wrap" gap="sm">
        <TextInput
          label="Cari"
          placeholder="Cari nama atau email"
          leftSection={<IconSearch size={16} />}
          value={filters.search ?? ""}
          onChange={(event) => onChange("search", event.currentTarget.value || undefined)}
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
            if (value === "name" || value === "role" || value === "workStatus") {
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
              value: "asc",
              label: "Menaik",
            },
            {
              value: "desc",
              label: "Menurun",
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
          label="Role"
          placeholder="Semua role"
          clearable
          data={ROLE_OPTIONS}
          value={filters.role ?? null}
          onChange={(value) => {
            if (value === "WORKER" || value === "DRIVER") {
              onChange("role", value as EmployeeRole);

              return;
            }

            onChange("role", undefined);
          }}
        />

        <Select
          label="Status Kerja"
          placeholder="Semua status"
          clearable
          data={WORK_STATUS_OPTIONS}
          value={filters.workStatus ?? null}
          onChange={(value) => {
            if (value === "AVAILABLE" || value === "BUSY" || value === "OFF_DUTY") {
              onChange("workStatus", value as WorkStatus);

              return;
            }

            onChange("workStatus", undefined);
          }}
        />

        <Select
          label="Station"
          placeholder="Semua station"
          clearable
          data={STATION_TYPE_OPTIONS}
          value={filters.stationType ?? null}
          onChange={(value) => {
            if (value === "WASHING" || value === "IRONING" || value === "PACKING") {
              onChange("stationType", value as StationType);

              return;
            }

            onChange("stationType", undefined);
          }}
          disabled={filters.role === "DRIVER"}
        />
      </Group>
    </>
  );
}
