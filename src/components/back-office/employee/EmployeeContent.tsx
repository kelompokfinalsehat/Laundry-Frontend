"use client";

import {
  Center,
  Loader,
  Pagination,
  Stack,
  Text,
} from "@mantine/core";
import { useState } from "react";

import { useEmployees } from "@/hooks/employee.hooks";
import { useOutlets } from "@/hooks/outlet.hooks";

import type {
  EmployeeQuery,
} from "@/types/api/employee.types";

import { EmployeeFilters } from "./EmployeeFilters";
import { EmployeeTable } from "./EmployeeTable";

const PAGE_SIZE = 10;

type EmployeeFiltersState = Pick<
  EmployeeQuery,
  | "search"
  | "role"
  | "accountStatus"
  | "workStatus"
  | "outletId"
>;

export function EmployeeContent() {
  const [page, setPage] = useState(1);

  const [filters, setFilters] =
    useState<EmployeeFiltersState>({});

  const {
    data,
    isLoading,
    isError,
  } = useEmployees({
    page,
    pageSize: PAGE_SIZE,
    ...filters,
  });

  const {
    data: outletData,
  } = useOutlets({
    page: 1,
    pageSize: 100,
    sortBy: "name",
    sortOrder: "asc",
  });

  const handleFilterChange = (
    key: keyof EmployeeFiltersState,
    value: string | null,
  ) => {
    setPage(1);

    setFilters((current) => ({
      ...current,
      [key]: value || undefined,
    }));
  };

  const handleReset = () => {
    setPage(1);
    setFilters({});
  };

  return (
    <Stack gap="lg">
      <div>
        <Text fw={700} size="xl">
          Karyawan
        </Text>

        <Text
          size="sm"
          c="var(--color-text-secondary)"
        >
          Kelola akun internal dan penempatan karyawan.
        </Text>
      </div>

      <EmployeeFilters
        filters={filters}
        outlets={outletData?.data ?? []}
        onChange={handleFilterChange}
        onReset={handleReset}
      />

      {isLoading && (
        <Center py="xl">
          <Loader />
        </Center>
      )}

      {isError && (
        <Text c="red">
          Gagal memuat data karyawan.
        </Text>
      )}

      {!isLoading && !isError && (
        <>
          {data?.data.length === 0 ? (
            <Center py="xl">
              <Text c="var(--color-text-secondary)">
                Tidak ada karyawan yang sesuai.
              </Text>
            </Center>
          ) : (
            <EmployeeTable
              data={data?.data ?? []}
            />
          )}

          {data?.meta &&
            data.meta.totalPages > 1 && (
              <Center>
                <Pagination
                  value={page}
                  onChange={setPage}
                  total={data.meta.totalPages}
                />
              </Center>
            )}
        </>
      )}
    </Stack>
  );
}