import { api } from "./axios";

import type {
  CreateLaundryItemPayload,
  LaundryItemListResponse,
  LaundryItemQuery,
  LaundryItemResponse,
  UpdateLaundryItemPayload,
} from "@/types/api/laundry-item.types";

const BASE_URL = "/internal/laundry-items";

export class LaundryItemApi {
  async getLaundryItems(
    params?: LaundryItemQuery,
  ): Promise<LaundryItemListResponse> {
    const response = await api.get<LaundryItemListResponse>(BASE_URL, {
      params,
    });

    return response.data;
  }

  async getLaundryItemById(id: string): Promise<LaundryItemResponse> {
    const response = await api.get<LaundryItemResponse>(`${BASE_URL}/${id}`);

    return response.data;
  }

  async createLaundryItem(
    payload: CreateLaundryItemPayload,
  ): Promise<LaundryItemResponse> {
    const response = await api.post<LaundryItemResponse>(BASE_URL, payload);

    return response.data;
  }

  async updateLaundryItem(
    id: string,
    payload: UpdateLaundryItemPayload,
  ): Promise<LaundryItemResponse> {
    const response = await api.patch<LaundryItemResponse>(
      `${BASE_URL}/${id}`,
      payload,
    );

    return response.data;
  }

  async deactivateLaundryItem(id: string): Promise<LaundryItemResponse> {
    const response = await api.patch<LaundryItemResponse>(
      `${BASE_URL}/${id}/deactivate`,
    );

    return response.data;
  }
}
