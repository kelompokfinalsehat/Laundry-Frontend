import type { ApiResponse, PaginatedResponse } from "@/types/api";

import { api } from "./axios";

import type {
  EmployeePerformanceData,
  EmployeePerformanceQuery,
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
  ): Promise<PaginatedResponse<EmployeePerformanceData>> {
    const response = await api.get<
      PaginatedResponse<EmployeePerformanceData>
    >(`${BASE_URL}/employee-performance`, {
      params,
    });

    return response.data;
  }
}
