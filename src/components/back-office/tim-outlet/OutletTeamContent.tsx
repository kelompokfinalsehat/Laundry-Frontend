"use client";

import { Paper, Stack } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useState } from "react";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { PageHeader } from "@/components/ui/PageHeader";
import { useCurrentOutletTeam } from "@/hooks/employee.hooks";
import TableSkeleton from "../shared/TableSkeleton";
import { OutletTeamFilters } from "./OutletTeamFilters";
import { OutletTeamTable } from "./OutletTeamTable";
import type { SortOrder } from "@/types/api";
import type { OutletTeamQuery, OutletTeamSortBy } from "@/types/api/employee.types";

const DEFAULT_PAGE_SIZE = 10;

type FilterState = Pick<OutletTeamQuery, "search" | "role" | "workStatus" | "stationType">;

type FilterKey = keyof FilterState;

export function OutletTeamContent() {
  const [query, setQuery] = useState<OutletTeamQuery>({
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
    sortBy: "name",
    sortOrder: "asc",
  });

  const [debouncedSearch] = useDebouncedValue(query.search ?? "", 400);

  const { data, isLoading, isError, error, refetch } = useCurrentOutletTeam({
    ...query,
    search: debouncedSearch || undefined,
  });

  const handleFilterChange = <Key extends FilterKey>(key: Key, value: FilterState[Key]) => {
    setQuery((previous) => {
      if (key === "role" && value === "DRIVER") {
        return {
          ...previous,
          role: "DRIVER",
          stationType: undefined,
          page: 1,
        };
      }

      return {
        ...previous,
        [key]: value,
        page: 1,
      };
    });
  };

  const handleSortByChange = (sortBy: OutletTeamSortBy) => {
    setQuery((previous) => ({
      ...previous,
      sortBy,
      page: 1,
    }));
  };

  const handleSortOrderChange = (sortOrder: SortOrder) => {
    setQuery((previous) => ({
      ...previous,
      sortOrder,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setQuery((previous) => ({
      ...previous,
      page,
    }));
  };

  const handlePageSizeChange = (pageSize: 10 | 20 | 50 | 100) => {
    setQuery((previous) => ({
      ...previous,
      page: 1,
      pageSize,
    }));
  };

  const handleReset = () => {
    setQuery({
      page: 1,
      pageSize: DEFAULT_PAGE_SIZE,
      sortBy: "name",
      sortOrder: "asc",
    });
  };

  return (
    <Stack gap="lg">
      <PageHeader title="Tim Outlet" description={"Pantau anggota tim dan status pekerjaan saat ini."} />

      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <OutletTeamFilters
            filters={{
              search: query.search,
              role: query.role,
              workStatus: query.workStatus,
              stationType: query.stationType,
            }}
            sortBy={query.sortBy ?? "name"}
            sortOrder={query.sortOrder ?? "asc"}
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
            skeleton={<TableSkeleton />}
          >
            {(result) => <OutletTeamTable data={result.data} meta={result.meta} onPageChange={handlePageChange} onPageSizeChange={handlePageSizeChange} />}
          </AsyncStateView>
        </Stack>
      </Paper>
    </Stack>
  );
}
