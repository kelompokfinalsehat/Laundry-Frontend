import type {
  DriverActiveAssignment,
  DriverAvailableAssignment,
  DriverAvailableQuery,
  DriverClaimResponse,
  DriverCompleteDeliveryResponse,
  DriverPickupCollectedResponse,
  DriverStartResponse,
} from "@/types/api/driver.types";

import type { ApiResponse, PaginatedResponse } from "@/types/api";

import { api } from "./axios";

const BASE_PATH = "/internal/driver";

type PaginatedApiResponse<T> = ApiResponse<T[]> & {
  meta: PaginatedResponse<T>["meta"];
};

export class DriverApi {
  /* =======================================================
     AVAILABLE
  ======================================================= */

  async getAvailable(query: DriverAvailableQuery) {
    const { data } = await api.get<PaginatedApiResponse<DriverAvailableAssignment>>(`${BASE_PATH}/task/available`, {
      params: query,
    });

    return {
      data: data.data,
      meta: data.meta,
    };
  }

  /* =======================================================
     CLAIM
  ======================================================= */

  async claimAssignment(assignmentId: string) {
    const { data } = await api.post<ApiResponse<DriverClaimResponse>>(`${BASE_PATH}/task/${assignmentId}/claim`, {});

    return data.data;
  }

  /* =======================================================
     ACTIVE
  ======================================================= */

  async getActive() {
    const { data } = await api.get<ApiResponse<DriverActiveAssignment | null>>(`${BASE_PATH}/task/active`);

    return data.data;
  }

  /* =======================================================
     START
  ======================================================= */

  async startAssignment(assignmentId: string) {
    const { data } = await api.post<ApiResponse<DriverStartResponse>>(`${BASE_PATH}/task/${assignmentId}/start`, {});

    return data.data;
  }

  /* =======================================================
     PICKUP COLLECTED
  ======================================================= */

  async pickupCollected(assignmentId: string) {
    const { data } = await api.post<ApiResponse<DriverPickupCollectedResponse>>(`${BASE_PATH}/task/${assignmentId}/pickup-collected`, {});

    return data.data;
  }

  /* =======================================================
     COMPLETE DELIVERY
  ======================================================= */

  async completeDelivery(assignmentId: string) {
    const { data } = await api.post<ApiResponse<DriverCompleteDeliveryResponse>>(`${BASE_PATH}/task/${assignmentId}/complete-delivery`, {});

    return data.data;
  }
}
