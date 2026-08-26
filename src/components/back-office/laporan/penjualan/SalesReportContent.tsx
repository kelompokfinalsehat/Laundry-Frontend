"use client";

import { Stack, Title } from "@mantine/core";

import { useState } from "react";

import { AsyncStateView } from "@/components/ui/AsyncStateView";

import { useSalesReport } from "@/hooks/report.hooks";

import type { SalesPeriod, SalesQuery } from "@/types/api/report.types";
import { SalesReportFilters } from "./SalesReportFilters";
import { useOutlets } from "@/hooks/outlet.hooks";
import { SalesReportSummary } from "./SalesReportSummary";
import { PageHeader } from "@/components/ui/PageHeader";
import { SalesReportBreakdown } from "./SalesReportBreakdown";
import { SalesTrend } from "./SalesTrend";

const getInitialQuery = (): SalesQuery => {
  const now = new Date();

  return {
    period: "MONTH",
    month: now.getMonth() + 1,
    year: now.getFullYear(),
  };
};

function formatLocalDate(date: Date) {
  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function SalesReportContent() {
  const [query, setQuery] = useState<SalesQuery>(getInitialQuery);

  const { data, isLoading, isError, error, refetch } = useSalesReport(query);

  const { data: outletsData } = useOutlets({
    page: 1,
    pageSize: 100,
  });

  const outletOptions =
    outletsData?.data.map((outlet) => ({
      value: outlet.id,
      label: outlet.name,
    })) ?? [];

  const handlePeriodChange = (period: SalesPeriod) => {
    const now = new Date();

    setQuery((previous) => {
      const outletId = previous.outletId;

      switch (period) {
        case "DAY":
          return {
            period,
            date: formatLocalDate(now),
            outletId,
          };

        case "MONTH":
          return {
            period,
            month: now.getMonth() + 1,
            year: now.getFullYear(),
            outletId,
          };

        case "YEAR":
          return {
            period,
            year: now.getFullYear(),
            outletId,
          };
      }
    });
  };

  const handleDateChange = (date: string | null) => {
    setQuery((previous) => ({
      ...previous,
      date: date ?? undefined,
    }));
  };

  const handleMonthChange = (month: number | null) => {
    setQuery((previous) => ({
      ...previous,
      month: month ?? undefined,
    }));
  };

  const handleYearChange = (year: number | null) => {
    setQuery((previous) => ({
      ...previous,
      year: year ?? undefined,
    }));
  };

  const handleOutletChange = (outletId: string | null) => {
    setQuery((previous) => ({
      ...previous,
      outletId: outletId ?? undefined,
    }));
  };

  return (
    <Stack gap="lg">
      <PageHeader
        title="Laporan Penjualan"
        description="Monitor laporan penjualan dalam sistem."
      />

      <SalesReportFilters
        query={query}
        outletOptions={outletOptions}
        onPeriodChange={handlePeriodChange}
        onDateChange={handleDateChange}
        onMonthChange={handleMonthChange}
        onYearChange={handleYearChange}
        onOutletChange={handleOutletChange}
      />

      <AsyncStateView
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={data}
        onRetry={refetch}
      >
        {(report) => (
          <Stack gap="lg">
            <SalesReportSummary report={report} />
            <SalesTrend data={report.trend} period={report.period.type} />
            <SalesReportBreakdown data={report.breakdown} />
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}
