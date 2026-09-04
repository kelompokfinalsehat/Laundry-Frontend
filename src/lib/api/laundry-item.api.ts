import { ApiResponse, PaginatedResponse } from "@/types/api";
import { api } from "./axios";

import type {
  CreateLaundryItemPayload,
  LaundryItem,
  LaundryItemQuery,
  UpdateLaundryItemPayload,
} from "@/types/api/laundry-item.types";

const BASE_URL = "/internal/laundry-items";

export class LaundryItemApi {
  async getLaundryItems(
    params?: LaundryItemQuery,
  ): Promise<PaginatedResponse<LaundryItem>> {
    const response = await api.get<PaginatedResponse<LaundryItem>>(BASE_URL, {
      params,
    });

    return response.data;
  }

  async getLaundryItemById(id: string): Promise<LaundryItem> {
    const response = await api.get<ApiResponse<LaundryItem>>(`${BASE_URL}/${id}`);

    return response.data.data;
  }

  async createLaundryItem(
    payload: CreateLaundryItemPayload,
  ): Promise<LaundryItem> {
    const response = await api.post<ApiResponse<LaundryItem>>(BASE_URL, payload);

    return response.data.data;
  }

  async updateLaundryItem(
    id: string,
    payload: UpdateLaundryItemPayload,
  ): Promise<LaundryItem> {
    const response = await api.patch(
      `${BASE_URL}/${id}`,
      payload,
    );

    return response.data.data;
  }

  async deactivateLaundryItem(id: string): Promise<LaundryItem> {
    const response = await api.patch<ApiResponse<LaundryItem>>(
      `${BASE_URL}/${id}/deactivate`,
    );

    return response.data.data;
  }
}
