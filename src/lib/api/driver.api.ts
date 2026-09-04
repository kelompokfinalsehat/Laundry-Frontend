import type {
  DriverHistoryPaginated,
  DriverActiveResponse,
  DriverAvailablePaginated,
  DriverAvailableQuery,
  DriverClaimResponse,
  DriverCompleteResponse,
  DriverHistoryDetailResponse,
  DriverHistoryQuery,
  DriverPickupCollectedResponse,
  DriverStartResponse,
} from "@/types/api/driver.types";
import { api } from "./axios";
import { ApiResponse } from "@/types/api";

const BASE_PATH = "/internal/driver/task";

export class DriverApi {
  async getAvailable(query: DriverAvailableQuery) {
    const { data } = await api.get<DriverAvailablePaginated>(`${BASE_PATH}/available`, {
      params: query,
    });
    return { data: data.data, meta: data.meta };
  }

  async claim(assignmentId: string) {
    const { data } = await api.post<ApiResponse<DriverClaimResponse>>(`${BASE_PATH}/${assignmentId}/claim`, {});
    return data.data;
  }

  async getActive() {
    const { data } = await api.get<ApiResponse<DriverActiveResponse>>(`${BASE_PATH}/active`);
    return data.data;
  }

  async startAssignment(assignmentId: string) {
    const { data } = await api.post<ApiResponse<DriverStartResponse>>(`${BASE_PATH}/${assignmentId}/start`, {});
    return data.data;
  }

  async pickupCollected(assignmentId: string) {
    const { data } = await api.post<ApiResponse<DriverPickupCollectedResponse>>(`${BASE_PATH}/${assignmentId}/pickup-collected`, {});
    return data.data;
  }

  async completeDelivery(assignmentId: string) {
    const { data } = await api.post<ApiResponse<DriverCompleteResponse>>(`${BASE_PATH}/${assignmentId}/complete-delivery`, {});
    return data.data;
  }
  async getHistoryList(query: DriverHistoryQuery) {
    const { data } = await api.get<DriverHistoryPaginated>(`${BASE_PATH}/history`, { params: query });
    return { data: data.data, meta: data.meta };
  }

  async getHistoryDetail(assignmentId: string) {
    const { data } = await api.get<ApiResponse<DriverHistoryDetailResponse>>(`${BASE_PATH}/history/${assignmentId}`);
    return data.data;
  }
}
