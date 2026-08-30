import type { ApiResponse } from "@/types/api";
import { api } from "./axios";
import type {
  WorkerAvailableQuery,
  WorkerClaimResponse,
  WorkerAvailablePaginated,
  WorkerActiveResponse,
  WorkerValidatePayload,
  WorkerValidateResponse,
  WorkerCompleteResponse,
  WorkerBypassPayload,
  WorkerBypassResponse,
} from "@/types/api/worker.types";

const BASE_PATH = "/internal/worker/jobs";

export class WorkerApi {
  async getAvailable(query: WorkerAvailableQuery) {
    const { data } = await api.get<WorkerAvailablePaginated>(`${BASE_PATH}/available`, {
      params: query,
    });
    return {
      data: data.data,
      meta: data.meta,
    };
  }

  async claim(assignmentId: string) {
    const { data } = await api.post<ApiResponse<WorkerClaimResponse>>(`${BASE_PATH}/${assignmentId}/claim`, {});
    return data.data;
  }

  async getActive() {
    const { data } = await api.get<ApiResponse<WorkerActiveResponse>>(`${BASE_PATH}/active`);
    return data.data;
  }

  async validateQuantities(assignmentId: string, payload: WorkerValidatePayload) {
    const { data } = await api.post<ApiResponse<WorkerValidateResponse>>(`${BASE_PATH}/${assignmentId}/validate-quantities`, payload);
    return data.data;
  }
  async requestBypass(assignmentId: string, payload: WorkerBypassPayload) {
    const { data } = await api.post<ApiResponse<WorkerBypassResponse>>(`${BASE_PATH}/${assignmentId}/bypass-requests`, payload);
    return data.data;
  }

  async complete(assignmentId: string) {
    const { data } = await api.post<ApiResponse<WorkerCompleteResponse>>(`${BASE_PATH}/${assignmentId}/complete`, {});
    return data.data;
  }
}
