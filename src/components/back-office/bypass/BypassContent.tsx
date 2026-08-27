"use client";

import { Paper, Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useBypassHooks } from "@/hooks/bypass.hooks";
import { PageHeader } from "@/components/ui/PageHeader";
import { BypassFilters } from "./BypassFilters";
import { BypassTable } from "./BypassTable";
import TableSkeleton from "../shared/TableSkeleton";

export function BypassContent() {
  const {
    query,
    handleFilterChange,
    handleSortByChange,
    handleSortOrderChange,
    handleReset,
    isLoading,
    isError,
    data,
    error,
    refetch,
    handlePageChange,
    handlePageSizeChange,
    handleSelectBypass,
  } = useBypassHooks();
  return (
    <Stack gap="lg">
      <PageHeader title="Permintaan Bypass" description="Kelola permintaan bypass yang diajukan karyawan." />
      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <BypassFilters
            filters={{
              search: query.search,
              status: query.status,
              stationType: query.stationType,
            }}
            sortBy={query.sortBy ?? "createdAt"}
            sortOrder={query.sortOrder ?? "desc"}
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
            isEmpty={(result) => result.data.length === 0}
            skeleton={
                <TableSkeleton />
            }
          >
            {(result) => (
              <BypassTable
                data={result.data}
                meta={result.meta}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                onSelect={handleSelectBypass}
              />
            )}
          </AsyncStateView>
        </Stack>
      </Paper>
    </Stack>
  );
}
