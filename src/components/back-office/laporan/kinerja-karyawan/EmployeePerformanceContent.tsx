"use client";

import { Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { EmployeePerformanceFilters } from "./EmployeePerformanceFilters";
import { EmployeePerformanceTable } from "./EmployeePerformanceTable";
import { EmployeePerformanceSummary } from "./EmployeePerformanceSummary";
import { PageHeader } from "@/components/ui/PageHeader";
import { useEmployeePerformanceHooks } from "@/hooks/report.hooks";
import { EmployeePerformanceSkeleton } from "./EmployeePerformanceSkeleton";

export function EmployeePerformanceContent() {
  const {
    query,
    outletsData,
    handleFilterChange,
    handleSortByChange,
    handleSortOrderChange,
    handleReset,
    isLoading,
    isError,
    error,
    data,
    refetch,
    handlePageChange,
    handlePageSizeChange,
  } = useEmployeePerformanceHooks();
  return (
    <Stack gap="md">
      <PageHeader title="Kinerja Karyawan" description="Monitor kinerja karyawan dalam sistem." />

      <EmployeePerformanceFilters
        filters={{
          search: query.search,
          role: query.role,
          stationType: query.stationType,
          outletId: query.outletId,
          startDate: query.startDate,
          endDate: query.endDate,
        }}
        sortBy={query.sortBy ?? "completedJobs"}
        sortOrder={query.sortOrder ?? "desc"}
        outlets={outletsData?.data ?? []}
        onChange={handleFilterChange}
        onSortByChange={handleSortByChange}
        onSortOrderChange={handleSortOrderChange}
        onReset={handleReset}
      />

      <AsyncStateView
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={data}
        onRetry={refetch}
        isEmpty={(result) => result.data.data.length === 0}
        skeleton={<EmployeePerformanceSkeleton />}
      >
        {(result) => (
          <Stack gap="md">
            <EmployeePerformanceSummary summary={result.data.summary} />

            <EmployeePerformanceTable
              data={result.data.data}
              meta={result.meta}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
            />
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}
