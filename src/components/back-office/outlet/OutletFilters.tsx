import {
  Group,
  Select,
  TextInput,
} from "@mantine/core";

import { IconSearch } from "@tabler/icons-react";

interface OutletFiltersProps {
  search: string;

  sortBy: "name" | "createdAt";

  sortOrder: "asc" | "desc";

  onSearchChange: (
    value: string,
  ) => void;

  onSortByChange: (
    value: "name" | "createdAt",
  ) => void;

  onSortOrderChange: (
    value: "asc" | "desc",
  ) => void;
}

export function OutletFilters({
  search,
  sortBy,
  sortOrder,
  onSearchChange,
  onSortByChange,
  onSortOrderChange,
}: OutletFiltersProps) {
  return (
    <Group
      align="end"
      wrap="wrap"
      gap="sm"
    >
      <TextInput
        label="Cari Outlet"
        placeholder="Cari nama outlet"
        leftSection={
          <IconSearch size={16} />
        }
        value={search}
        onChange={(event) =>
          onSearchChange(
            event.currentTarget.value,
          )
        }
      />

      <Select
        label="Urutkan Berdasarkan"
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
            label: "Nama outlet",
          },
        ]}
      />

      <Select
        label="Urutkan"
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
            label: "Terbaru",
          },
          {
            value: "asc",
            label: "Terlama",
          },
        ]}
      />
    </Group>
  );
}