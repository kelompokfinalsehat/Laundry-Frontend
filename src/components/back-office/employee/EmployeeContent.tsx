"use client";

import { useState } from "react";

import { Button, Paper, Stack } from "@mantine/core";

import { IconPlus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useDebouncedValue } from "@mantine/hooks";

import { PageHeader } from "@/components/ui/PageHeader";
import { AsyncStateView } from "@/components/ui/AsyncStateView";

import { useEmployees } from "@/hooks/employee.hooks";
import { useOutlets } from "@/hooks/outlet.hooks";

import { EmployeeFilters } from "./EmployeeFilters";
import { EmployeeTable } from "./EmployeeTable";

import type { EmployeeQuery } from "@/types/api/employee.types";

type EmployeeFiltersState = Pick<
  EmployeeQuery,
  "search" | "role" | "accountStatus" | "workStatus" | "outletId"
>;

export function EmployeeContent() {
  const router = useRouter();

  const [page, setPage] = useState(1);

  const [pageSize, setPageSize] = useState<10 | 20 | 50>(10);

  const [filters, setFilters] = useState<EmployeeFiltersState>({});

  const [debouncedSearch] = useDebouncedValue(filters.search ?? "", 400);

  const [sortBy, setSortBy] =
    useState<NonNullable<EmployeeQuery["sortBy"]>>("createdAt");

  const [sortOrder, setSortOrder] =
    useState<NonNullable<EmployeeQuery["sortOrder"]>>("desc");

  const employees = useEmployees({
    page,
    pageSize,
    ...filters,
    search: debouncedSearch || undefined,
    sortBy,
    sortOrder,
  });

  const outlets = useOutlets({
    page: 1,
    pageSize: 50,
    sortBy: "name",
    sortOrder: "asc",
  });

  const handleFilterChange = (
    key: keyof EmployeeFiltersState,
    value: string | null,
  ) => {
    setFilters((current) => ({
      ...current,
      [key]: value || undefined,
    }));

    setPage(1);
  };

  const handleReset = () => {
    setFilters({});
    setSortBy("createdAt");
    setSortOrder("desc");
    setPage(1);
  };

  return (
    <Stack gap="lg">
      <PageHeader
        title="Karyawan"
        description="Kelola akun internal dan penempatan karyawan."
        action={
          <Button
            leftSection={<IconPlus size={16} />}
            onClick={() => router.push("/internal/super-admin/karyawan/undang")}
          >
            Undang Karyawan
          </Button>
        }
      />

      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <EmployeeFilters
            filters={filters}
            sortBy={sortBy}
            sortOrder={sortOrder}
            outlets={outlets.data?.data ?? []}
            onChange={handleFilterChange}
            onSortByChange={(value) => {
              setSortBy(value);
              setPage(1);
            }}
            onSortOrderChange={(value) => {
              setSortOrder(value);
              setPage(1);
            }}
            onReset={handleReset}
          />

          <AsyncStateView
            isLoading={employees.isLoading}
            isError={employees.isError}
            error={employees.error}
            data={employees.data}
            onRetry={() => employees.refetch()}
            isEmpty={(response) => response.data.length === 0}
            emptyTitle="Karyawan tidak ditemukan"
            emptyDescription="Tidak ada karyawan yang sesuai dengan filter yang dipilih."
          >
            {(response) => (
              <EmployeeTable
                data={response.data}
                meta={response.meta}
                onPageChange={setPage}
                onPageSizeChange={(value) => {
                  setPageSize(value);
                  setPage(1);
                }}
                onView={(employeeId) =>
                  router.push(`/internal/super-admin/karyawan/${employeeId}`)
                }
              />
            )}
          </AsyncStateView>
        </Stack>
      </Paper>
    </Stack>
  );
}
