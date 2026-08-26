import {
  useQuery,
} from "@tanstack/react-query";

import { ReportApi } from "@/lib/api/report.api";

import type {
  EmployeePerformanceQuery,
  SalesQuery,
} from "@/types/api/report.types";

const reportApi = new ReportApi();

export const SALES_REPORT_QUERY_KEY =
  ["sales-report"];

export const EMPLOYEE_PERFORMANCE_QUERY_KEY =
  ["employee-performance-report"];

export function useSalesReport(
  params: SalesQuery,
) {
  return useQuery({
    queryKey: [
      ...SALES_REPORT_QUERY_KEY,
      params,
    ],

    queryFn: () =>
      reportApi.getSalesReport(params),

    enabled: Boolean(params.period),
  });
}

export function useEmployeePerformance(
  params?: EmployeePerformanceQuery,
) {
  return useQuery({
    queryKey: [
      ...EMPLOYEE_PERFORMANCE_QUERY_KEY,
      params,
    ],

    queryFn: () =>
      reportApi.getEmployeePerformance(params),
  });
}