import { ApiResponse } from "@/types/api";
import { api } from "./axios";
import { DashboardQuery, DashboardResponse } from "@/types/api/dashboard.types";

export class DashboardApi {
  async getDashboard(params?: DashboardQuery): Promise<DashboardResponse> {
    const response = await api.get<ApiResponse<DashboardResponse>>("/internal/dashboard", {
      params,
    });

    return response.data.data;
  }
}
