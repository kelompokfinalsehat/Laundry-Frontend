import { api } from "./axios";
import {
  CreateOutletPayload,
  Outlet,
  OutletListResponse,
  OutletQuery,
} from "@/types/api/outlet.types";

export class OutletApi {
  async getOutlets(params?: OutletQuery): Promise<OutletListResponse> {
    const response = await api.get("/internal/outlets", {
      params,
    });

    return response.data;
  }
  async getOutlet(outletId: string): Promise<Outlet> {
    const response = await api.get(`/internal/outlets/${outletId}`);

    return response.data.data;
  }

  async createOutlet(payload: CreateOutletPayload): Promise<Outlet> {
    const response = await api.post("/internal/outlets", payload);

    return response.data.data;
  }
  async updateOutlet(
    outletId: string,
    payload: CreateOutletPayload,
  ): Promise<Outlet> {
    const response = await api.patch(`/internal/outlets/${outletId}`, payload);

    return response.data.data;
  }
  async deleteOutlet(outletId: string): Promise<void> {
    await api.delete(`/internal/outlets/${outletId}/deactivate`);
  }
}
