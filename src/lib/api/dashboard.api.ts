import { api } from "./axios";
import { DashboardQuery, DashboardResponse } from "@/types/api/dashboard.type";

export class DashboardApi {
  async getDashboard(params?: DashboardQuery): Promise<DashboardResponse> {
    const response = await api.get("/internal/dashboard", {
      params,
    });

    return response.data.data;
  }
}
