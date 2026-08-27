import type { ApiResponse } from "@/types/api";

import { api } from "./axios";

import type {
  EmployeePerformanceQuery,
  PaginatedEmployeePerformanceResponse,
  SalesQuery,
  SalesReport,
} from "@/types/api/report.types";

const BASE_URL = "/internal/reports";

export class ReportApi {
  async getSalesReport(params: SalesQuery): Promise<SalesReport> {
    const response = await api.get<ApiResponse<SalesReport>>(
      `${BASE_URL}/sales`,
      {
        params,
      },
    );

    return response.data.data;
  }

  async getEmployeePerformance(
    params?: EmployeePerformanceQuery,
  ): Promise<PaginatedEmployeePerformanceResponse> {
    const response = await api.get<
      PaginatedEmployeePerformanceResponse
    >(`${BASE_URL}/employee-performance`, {
      params,
    });

    return response.data;
  }
}
