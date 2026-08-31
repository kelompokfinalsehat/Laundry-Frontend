"use client";

import { Group, NumberInput, Paper, Select, Stack } from "@mantine/core";
import { SalesPeriod, SalesQuery } from "@/types/api/report.types";
import { DatePickerInput, MonthPickerInput, YearPickerInput } from "@mantine/dates";

type OutletOption = {
  value: string;
  label: string;
};

type Props = {
  query: SalesQuery;
  outletOptions: OutletOption[];
  isSuperAdmin: boolean;
  onPeriodChange: (period: SalesPeriod) => void;
  onDateChange: (date: string | null) => void;
  onMonthChange: (month: number | null) => void;
  onYearChange: (year: number | null) => void;
  onOutletChange: (outletId: string | null) => void;
};

const periodOptions = [
  {
    value: "DAY",
    label: "Harian",
  },
  {
    value: "MONTH",
    label: "Bulanan",
  },
  {
    value: "YEAR",
    label: "Tahunan",
  },
];

export function SalesReportFilters({ query, outletOptions, isSuperAdmin, onPeriodChange, onDateChange, onMonthChange, onYearChange, onOutletChange }: Props) {
  const initialDate = query.year && query.month ? new Date(Number(query.year), Number(query.month) - 1, 1) : new Date();
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
        <Group align="flex-end" grow>
          <Select
            label="Periode"
            data={periodOptions}
            value={query.period}
            onChange={(value) => {
              if (!value) {
                return;
              }

              onPeriodChange(value as SalesPeriod);
            }}
          />

          {query.period === "DAY" && (
            <DatePickerInput label="Tanggal" placeholder="Pilih tanggal" clearable={false} value={query.date ?? null} valueFormat="DD MMM YYYY" onChange={onDateChange} />
          )}

          {query.period === "MONTH" && (
            <MonthPickerInput
              label="Pilih Bulan & Tahun"
              value={initialDate}
              onChange={(value) => {
                onMonthChange(value ? new Date(value).getMonth() + 1 : null);
                onYearChange(value ? new Date(value).getFullYear() : null);
              }}
            />
          )}

          {query.period === "YEAR" && (
            <YearPickerInput
              label="Tahun"
              minDate={new Date(2025, 0, 1)}
              value={query.year ? new Date(query.year, 0, 1) : new Date()}
              onChange={(value) => onYearChange(value ? new Date(value).getFullYear() : null)}
            />
          )}

          {isSuperAdmin && <Select label="Outlet" placeholder="Semua outlet" data={outletOptions} value={query.outletId ?? null} onChange={onOutletChange} clearable />}
        </Group>
      </Stack>
    </Paper>
  );
}
