import { FilterOutletAttendanceValues } from "@/lib/validation/employee.validation";
import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";
import { IconRefresh, IconSearch } from "@tabler/icons-react";

type Props = {
  form: UseFormReturnType<FilterOutletAttendanceValues>;
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

const STATUS_OPTIONS = [
  {
    value: "NOT_CLOCKED_IN",
    label: "Belum absen",
  },
  {
    value: "CLOCKED_IN",
    label: "Sedang bertugas",
  },
  {
    value: "CLOCKED_OUT",
    label: "Sudah pulang",
  },
];

export function AttendanceFilters({ form, onReset }: Props) {
  return (
    <Group align="flex-end" wrap="wrap" gap="sm">
      <TextInput
        label="Cari"
        placeholder="Cari nama atau email"
        leftSection={<IconSearch size={16} />}
        style={{
          flex: 1,
          minWidth: 220,
        }}
        {...form.getInputProps("search")}
      />
      <DatePickerInput label="Tanggal" placeholder="Pilih tanggal" valueFormat="DD MMM YYYY" clearable w={180} {...form.getInputProps("date")} />
      <Select label="Role" placeholder="Semua role" clearable data={ROLE_OPTIONS} w={160} {...form.getInputProps("role")} />
      <Select label="Status" placeholder="Semua status" clearable data={STATUS_OPTIONS} w={180} {...form.getInputProps("status")} />
      <Tooltip label="Reset filter">
        <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
          <IconRefresh size={16} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
