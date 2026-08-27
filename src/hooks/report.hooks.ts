import { useQuery } from "@tanstack/react-query";
import type {
  EmployeePerformanceQuery,
  EmployeePerformanceSortBy,
  SalesPeriod,
  SalesQuery,
} from "@/types/api/report.types";
import { ReportApi } from "@/lib/api/report.api";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { useOutlets } from "./outlet.hooks";
import { SortOrder } from "@/types/api";

const reportApi = new ReportApi();

export const SALES_REPORT_QUERY_KEY = ["sales-report"];

export const EMPLOYEE_PERFORMANCE_QUERY_KEY = ["employee-performance-report"];

export function useSalesReport(params: SalesQuery) {
  return useQuery({
    queryKey: [...SALES_REPORT_QUERY_KEY, params],

    queryFn: () => reportApi.getSalesReport(params),

    enabled: Boolean(params.period),
  });
}

export function useEmployeePerformance(params?: EmployeePerformanceQuery) {
  return useQuery({
    queryKey: [...EMPLOYEE_PERFORMANCE_QUERY_KEY, params],

    queryFn: () => reportApi.getEmployeePerformance(params),
  });
}
const getInitialQuery = (): EmployeePerformanceQuery => ({
  page: 1,
  pageSize: 10,
  sortBy: "completedJobs",
  sortOrder: "desc",
});

type EmployeePerformanceFilterKey =
  | "search"
  | "role"
  | "stationType"
  | "outletId"
  | "startDate"
  | "endDate";

export function useEmployeePerformanceHooks() {
  const [query, setQuery] = useState<EmployeePerformanceQuery>(getInitialQuery);
  const [debouncedSearch] = useDebouncedValue(query.search ?? "", 400);
  const { data, isLoading, isError, error, refetch } = useEmployeePerformance({
    ...query,
    search: debouncedSearch || undefined,
  });

  const { data: outletsData } = useOutlets({
    page: 1,
    pageSize: 100,
  });

  const handleFilterChange = (
    key: EmployeePerformanceFilterKey,
    value: string | null,
  ) => {
    setQuery((previous) => {
      if (key === "role" && value === "DRIVER") {
        return {
          ...previous,
          role: "DRIVER",
          stationType: undefined,
          page: 1,
        };
      }

      if (key === "role") {
        return {
          ...previous,
          role: value === "WORKER" ? "WORKER" : undefined,
          page: 1,
        };
      }

      if (key === "stationType") {
        return {
          ...previous,
          stationType:
            value === "WASHING" || value === "IRONING" || value === "PACKING"
              ? value
              : undefined,
          page: 1,
        };
      }

      return {
        ...previous,
        [key]: value ?? undefined,
        page: 1,
      };
    });
  };

  const handleSortByChange = (sortBy: EmployeePerformanceSortBy) => {
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
    setQuery(getInitialQuery());
  };
  return {
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
  };
}

function getInitialSalesQuery(): SalesQuery {
  const now = new Date();

  return {
    period: "MONTH",
    month: now.getMonth() + 1,
    year: now.getFullYear(),
  };
}

function formatLocalDate(date: Date) {
  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
export function useSalesHooks() {
  const [query, setQuery] = useState<SalesQuery>(getInitialSalesQuery);

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
  return {
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
  };
}
