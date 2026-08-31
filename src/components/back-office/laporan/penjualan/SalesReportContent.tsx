"use client";

import { Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useSalesHooks } from "@/hooks/report.hooks";
import { SalesReportFilters } from "./SalesReportFilters";
import { SalesReportSummary } from "./SalesReportSummary";
import { PageHeader } from "@/components/ui/PageHeader";
import { SalesReportBreakdown } from "./SalesReportBreakdown";
import { SalesTrend } from "./SalesTrend";
import { SalesReportSkeleton } from "./SalesReportSkeleton";

export function SalesReportContent({role}: {role: string}) {
  const {
    query,
    outletOptions,
    handlePeriodChange,
    handleDateChange,
    handleMonthChange,
    handleYearChange,
    handleOutletChange,
    isLoading,
    isError,
    error,
    data,
    refetch,
  } = useSalesHooks();
  const isSuperAdmin = role === "SUPER_ADMIN"
  return (
    <Stack gap="lg">
      <PageHeader title="Laporan Penjualan" description="Monitor laporan penjualan dalam sistem." />

      <SalesReportFilters
        query={query}
        outletOptions={outletOptions}
        isSuperAdmin={isSuperAdmin}
        onPeriodChange={handlePeriodChange}
        onDateChange={handleDateChange}
        onMonthChange={handleMonthChange}
        onYearChange={handleYearChange}
        onOutletChange={handleOutletChange}
      />

      <AsyncStateView isLoading={isLoading} isError={isError} error={error} data={data} onRetry={refetch} skeleton={<SalesReportSkeleton />}>
        {(report) => (
          <Stack gap="lg">
            <SalesReportSummary report={report} />
            <SalesTrend data={report.trend} period={report.period.type} />
            {isSuperAdmin && <SalesReportBreakdown data={report.breakdown} />}
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}
