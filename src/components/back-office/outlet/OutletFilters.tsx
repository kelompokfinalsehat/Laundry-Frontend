import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { IconRefresh, IconSearch } from "@tabler/icons-react";

interface OutletFiltersProps {
  search: string;
  sortBy: "name" | "createdAt";
  sortOrder: "asc" | "desc";
  onSearchChange: (value: string) => void;
  onSortByChange: (value: "name" | "createdAt") => void;
  onSortOrderChange: (value: "asc" | "desc") => void;
  onReset: () => void;
}

export function OutletFilters({ search, sortBy, sortOrder, onSearchChange, onSortByChange, onSortOrderChange, onReset }: OutletFiltersProps) {
  return (
    <Group align="end" wrap="wrap" gap="sm">
      <TextInput
        label="Cari Outlet"
        placeholder="Cari nama outlet"
        leftSection={<IconSearch size={16} />}
        value={search}
        onChange={(event) => onSearchChange(event.currentTarget.value)}
        style={{ flex: 1, minWidth: 280 }}
      />

      <Select
        label="Urutkan"
        value={sortBy}
        onChange={(value) => {
          if (value === "name" || value === "createdAt") {
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
        w={180}
      />

      <Select
        label="Urutan"
        value={sortOrder}
        onChange={(value) => {
          if (value === "asc" || value === "desc") {
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
        w={180}
      />

      <Tooltip label="Reset filter">
        <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
          <IconRefresh size={16} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
