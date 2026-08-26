"use client";

import { Group, NumberInput, Paper, Select, Stack } from "@mantine/core";

import type { SalesPeriod, SalesQuery } from "@/types/api/report.types";
import { DateInput } from "@mantine/dates";

type OutletOption = {
  value: string;
  label: string;
};

type Props = {
  query: SalesQuery;
  outletOptions: OutletOption[];

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

const monthOptions = [
  {
    value: "1",
    label: "Januari",
  },
  {
    value: "2",
    label: "Februari",
  },
  {
    value: "3",
    label: "Maret",
  },
  {
    value: "4",
    label: "April",
  },
  {
    value: "5",
    label: "Mei",
  },
  {
    value: "6",
    label: "Juni",
  },
  {
    value: "7",
    label: "Juli",
  },
  {
    value: "8",
    label: "Agustus",
  },
  {
    value: "9",
    label: "September",
  },
  {
    value: "10",
    label: "Oktober",
  },
  {
    value: "11",
    label: "November",
  },
  {
    value: "12",
    label: "Desember",
  },
];

export function SalesReportFilters({
  query,
  outletOptions,
  onPeriodChange,
  onDateChange,
  onMonthChange,
  onYearChange,
  onOutletChange,
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
            <DateInput
              label="Tanggal"
              placeholder="Pilih tanggal"
              clearable
              value={query.date ?? null}
              valueFormat="DD MMM YYYY"
              onChange={onDateChange}
            />
          )}

          {query.period === "MONTH" && (
            <>
              <Select
                label="Bulan"
                data={monthOptions}
                value={query.month?.toString() ?? null}
                onChange={(value) =>
                  onMonthChange(value ? Number(value) : null)
                }
              />

              <NumberInput
                label="Tahun"
                min={2025}
                max={2100}
                value={query.year ?? ""}
                onChange={(value) =>
                  onYearChange(typeof value === "number" ? value : null)
                }
              />
            </>
          )}

          {query.period === "YEAR" && (
            <NumberInput
              label="Tahun"
              min={2025}
              max={2100}
              value={query.year ?? ""}
              onChange={(value) =>
                onYearChange(typeof value === "number" ? value : null)
              }
            />
          )}

          <Select
            label="Outlet"
            placeholder="Semua outlet"
            data={outletOptions}
            value={query.outletId ?? null}
            onChange={onOutletChange}
            clearable
          />
        </Group>
      </Stack>
    </Paper>
  );
}
