"use client";

import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import { UseFormReturnType } from "@mantine/form";
import { FilterLaundryItemValues } from "@/lib/validation/laundry-item.validation";

type Props = {
  form: UseFormReturnType<FilterLaundryItemValues>;
  onReset: () => void;
};

export function LaundryItemFilters({ form, onReset }: Props) {
  return (
    <Group align="flex-end" wrap="wrap">
      <TextInput label="Cari" placeholder="Cari nama item..." leftSection={<IconSearch size={16} />} {...form.getInputProps("search")} style={{ flex: 1, minWidth: 220 }} />

      <Select
        label="Urutkan"
        data={[
          {
            value: "createdAt",
            label: "Tanggal dibuat",
          },
          {
            value: "name",
            label: "Nama",
          },
        ]}
        w={180}
        {...form.getInputProps("sortBy")}
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
        {...form.getInputProps("sortOrder")}
      />

      <Tooltip label="Reset filter">
        <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
          <IconRefresh size={16} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
