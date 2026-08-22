"use client";

import type { EmployeeQuery } from "@/types/api/employee.types";
import {
  Button,
  Group,
  Select,
  TextInput,
} from "@mantine/core";
import {
  IconSearch,
  IconX,
} from "@tabler/icons-react";

type EmployeeFiltersState = Pick<
  EmployeeQuery,
  | "search"
  | "role"
  | "accountStatus"
  | "workStatus"
  | "outletId"
>;

type Props = {
  filters: EmployeeFiltersState;
  outlets: {
    id: string;
    name: string;
  }[];
  onChange: (
    key: keyof EmployeeFiltersState,
    value: string | null,
  ) => void;
  onReset: () => void;
};

export function EmployeeFilters({
  filters,
  outlets,
  onChange,
  onReset,
}: Props) {
  return (
    <Group align="end">
      <TextInput
        label="Cari"
        placeholder="Nama atau email"
        leftSection={<IconSearch size={16} />}
        value={filters.search ?? ""}
        onChange={(event) =>
          onChange(
            "search",
            event.currentTarget.value || null,
          )
        }
      />

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
        onChange={(value) =>
          onChange("role", value)
        }
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
        onChange={(value) =>
          onChange("accountStatus", value)
        }
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
        onChange={(value) =>
          onChange("workStatus", value)
        }
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
        onChange={(value) =>
          onChange("outletId", value)
        }
      />

      <Button
        variant="default"
        leftSection={<IconX size={16} />}
        onClick={onReset}
      >
        Reset
      </Button>
    </Group>
  );
}