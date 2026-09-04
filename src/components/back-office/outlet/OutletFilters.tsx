import { FilterOutletValues } from "@/lib/validation/outlet.validation";
import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { IconRefresh, IconSearch } from "@tabler/icons-react";

interface OutletFiltersProps {
  form: UseFormReturnType<FilterOutletValues>;
  onReset: () => void;
}

export function OutletFilters({ form, onReset }: OutletFiltersProps) {
  return (
    <Group align="end" wrap="wrap" gap="sm">
      <TextInput
        label="Cari Outlet"
        placeholder="Cari nama outlet"
        leftSection={<IconSearch size={16} />}
        {...form.getInputProps('search')}
        style={{ flex: 1, minWidth: 280 }}
      />

      <Select
        label="Urutkan"
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
        {...form.getInputProps('sortBy')}
      />

      <Select
        label="Urutan"
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
        {...form.getInputProps('sortOrder')}
      />

      <Tooltip label="Reset filter">
        <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
          <IconRefresh size={16} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
