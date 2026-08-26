"use client";

import type { EmployeeQuery } from "@/types/api/employee.types";

import {
  ActionIcon,
  Button,
  Group,
  Select,
  TextInput,
  Tooltip,
} from "@mantine/core";

import { IconRefresh, IconSearch, IconX } from "@tabler/icons-react";

type EmployeeFiltersState = Pick<
  EmployeeQuery,
  "search" | "role" | "accountStatus" | "workStatus" | "outletId"
>;

type Props = {
  filters: EmployeeFiltersState;

  sortBy: NonNullable<EmployeeQuery["sortBy"]>;

  sortOrder: NonNullable<EmployeeQuery["sortOrder"]>;

  outlets: {
    id: string;
    name: string;
  }[];

  onChange: (key: keyof EmployeeFiltersState, value: string | null) => void;

  onSortByChange: (value: NonNullable<EmployeeQuery["sortBy"]>) => void;

  onSortOrderChange: (value: NonNullable<EmployeeQuery["sortOrder"]>) => void;

  onReset: () => void;
};

export function EmployeeFilters({
  filters,
  sortBy,
  sortOrder,
  outlets,
  onChange,
  onSortByChange,
  onSortOrderChange,
  onReset,
}: Props) {
  return (
    <>
      <Group align="end" wrap="wrap" gap="sm">
        <TextInput
          label="Cari"
          placeholder="Nama atau email"
          leftSection={<IconSearch size={16} />}
          value={filters.search ?? ""}
          onChange={(event) =>
            onChange("search", event.currentTarget.value || null)
          }
          style={{ flex: 1, minWidth: 280 }}
        />
        <Select
          label="Urutkan"
          value={sortBy}
          data={[
            {
              value: "createdAt",
              label: "Tanggal dibuat",
            },
            {
              value: "name",
              label: "Nama",
            },
            {
              value: "email",
              label: "Email",
            },
            {
              value: "role",
              label: "Role",
            },
            {
              value: "accountStatus",
              label: "Status akun",
            },
          ]}
          onChange={(value) => {
            if (
              value === "name" ||
              value === "email" ||
              value === "role" ||
              value === "accountStatus" ||
              value === "createdAt"
            ) {
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
          label="Role"
          placeholder="Semua role"
          clearable
          data={[
            {
              value: "OUTLET_ADMIN",
              label: "Outlet Admin",
            },
            {
              value: "WORKER",
              label: "Worker",
            },
            {
              value: "DRIVER",
              label: "Driver",
            },
          ]}
          value={filters.role ?? null}
          onChange={(value) => onChange("role", value)}
        />

        <Select
          label="Status Akun"
          placeholder="Semua status"
          clearable
          data={[
            {
              value: "INVITED",
              label: "Diundang",
            },
            {
              value: "ACTIVE",
              label: "Aktif",
            },
            {
              value: "INACTIVE",
              label: "Tidak Aktif",
            },
          ]}
          value={filters.accountStatus ?? null}
          onChange={(value) => onChange("accountStatus", value)}
        />

        <Select
          label="Status Kerja"
          placeholder="Semua status"
          clearable
          data={[
            {
              value: "OFF_DUTY",
              label: "Off Duty",
            },
            {
              value: "AVAILABLE",
              label: "Tersedia",
            },
            {
              value: "BUSY",
              label: "Sibuk",
            },
          ]}
          value={filters.workStatus ?? null}
          onChange={(value) => onChange("workStatus", value)}
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
      </Group>
    </>
  );
}
