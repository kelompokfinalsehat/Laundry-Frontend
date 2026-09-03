import type { ApiResponse, PaginatedResponse } from "@/types/api";

import { api } from "./axios";

import type {
  CreateLaundryPricingPayload,
  CreateShippingRatePayload,
  LaundryPricing,
  ShippingRate,
  ShippingRateQuery,
  UpdateLaundryPricingPayload,
  UpdateShippingRatePayload,
} from "@/types/api/pricing.types";

const BASE_URL = "/internal/pricing";

export class PricingApi {
  async getLaundryPricing(): Promise<LaundryPricing> {
    const response = await api.get<ApiResponse<LaundryPricing>>(
      `${BASE_URL}/laundry`,
    );

    return response.data.data;
  }

  async createLaundryPricing(
    payload: CreateLaundryPricingPayload,
  ): Promise<LaundryPricing> {
    const response = await api.post<ApiResponse<LaundryPricing>>(
      `${BASE_URL}/laundry`,
      payload,
    );

    return response.data.data;
  }

  async updateLaundryPricing(
    id: string,
    payload: UpdateLaundryPricingPayload,
  ): Promise<LaundryPricing> {
    const response = await api.patch<ApiResponse<LaundryPricing>>(
      `${BASE_URL}/laundry/${id}`,
      payload,
    );

    return response.data.data;
  }

  async getShippingRates(
    params?: ShippingRateQuery,
  ): Promise<PaginatedResponse<ShippingRate>> {
    const response = await api.get<PaginatedResponse<ShippingRate>>(
      `${BASE_URL}/shipping`,
      {
        params,
      },
    );

    return response.data;
  }

  async getShippingRateById(id: string): Promise<ShippingRate> {
    const response = await api.get<ApiResponse<ShippingRate>>(
      `${BASE_URL}/shipping/${id}`,
    );

    return response.data.data;
  }

  async createShippingRate(
    payload: CreateShippingRatePayload,
  ): Promise<ShippingRate> {
    const response = await api.post<ApiResponse<ShippingRate>>(
      `${BASE_URL}/shipping`,
      payload,
    );

    return response.data.data;
  }

  async updateShippingRate(
    id: string,
    payload: UpdateShippingRatePayload,
  ): Promise<ShippingRate> {
    const response = await api.patch<ApiResponse<ShippingRate>>(
      `${BASE_URL}/shipping/${id}`,
      payload,
    );

    return response.data.data;
  }

  async deactivateShippingRate(id: string): Promise<ShippingRate> {
    const response = await api.patch<ApiResponse<ShippingRate>>(
      `${BASE_URL}/shipping/${id}/deactivate`,
    );

    return response.data.data;
  }
}
