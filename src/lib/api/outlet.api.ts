import { ApiResponse, PaginatedResponse } from "@/types/api";
import { api } from "./axios";
import {
  CreateOutletPayload,
  Outlet,
  OutletQuery,
  UpdateOutletPayload,
} from "@/types/api/outlet.types";

export class OutletApi {
  async getOutlets(params?: OutletQuery): Promise<PaginatedResponse<Outlet>>{
    const response = await api.get<PaginatedResponse<Outlet>>("/internal/outlets", {
      params,
    });

    return response.data;
  }
  async getOutlet(outletId: string): Promise<Outlet> {
    const response = await api.get<ApiResponse<Outlet>>(`/internal/outlets/${outletId}`);

    return response.data.data;
  }

  async createOutlet(payload: CreateOutletPayload): Promise<Outlet> {
    const response = await api.post<ApiResponse<Outlet>>("/internal/outlets", payload);

    return response.data.data;
  }
  async updateOutlet(
    outletId: string,
    payload: UpdateOutletPayload,
  ): Promise<Outlet> {
    const response = await api.patch<ApiResponse<Outlet>>(`/internal/outlets/${outletId}`, payload);

    return response.data.data;
  }
  async deleteOutlet(outletId: string): Promise<void> {
    await api.delete<ApiResponse<Outlet>>(`/internal/outlets/${outletId}/deactivate`);
  }
}
