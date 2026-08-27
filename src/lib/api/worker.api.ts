import type {
  WorkerActiveAssignment,
  WorkerAvailableAssignment,
  WorkerAvailableQuery,
  WorkerClaimResponse,
  WorkerCompleteResponse,
  WorkerRequestBypassPayload,
  WorkerRequestBypassResponse,
  WorkerValidateQuantitiesPayload,
  WorkerValidateQuantitiesResponse,
} from "@/types/api/worker.types";

import type { ApiResponse, PaginatedResponse } from "@/types/api";

import { api } from "./axios";

const BASE_PATH = "/internal/worker";

type PaginatedApiResponse<T> = ApiResponse<T[]> & {
  meta: PaginatedResponse<T>["meta"];
};

export class WorkerApi {
  /* =======================================================
     AVAILABLE
  ======================================================= */

  async getAvailable(query: WorkerAvailableQuery) {
    const { data } = await api.get<PaginatedApiResponse<WorkerAvailableAssignment>>(`${BASE_PATH}/jobs/available`, {
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
    const { data } = await api.post<ApiResponse<WorkerClaimResponse>>(`${BASE_PATH}/jobs/${assignmentId}/claim`, {});

    return data.data;
  }

  /* =======================================================
     ACTIVE
  ======================================================= */

  async getActive() {
    const { data } = await api.get<ApiResponse<WorkerActiveAssignment | null>>(`${BASE_PATH}/jobs/active`);

    return data.data;
  }

  /* =======================================================
     VALIDATE
  ======================================================= */

  async validateQuantities(assignmentId: string, payload: WorkerValidateQuantitiesPayload) {
    const { data } = await api.post<ApiResponse<WorkerValidateQuantitiesResponse>>(`${BASE_PATH}/jobs/${assignmentId}/validate-quantities`, payload);

    return data.data;
  }

  /* =======================================================
     BYPASS
  ======================================================= */

  async requestBypass(assignmentId: string, payload: WorkerRequestBypassPayload) {
    const { data } = await api.post<ApiResponse<WorkerRequestBypassResponse>>(`${BASE_PATH}/jobs/${assignmentId}/bypass-requests`, payload);

    return data.data;
  }

  /* =======================================================
     COMPLETE
  ======================================================= */

  async completeAssignment(assignmentId: string) {
    const { data } = await api.post<ApiResponse<WorkerCompleteResponse>>(`${BASE_PATH}/jobs/${assignmentId}/complete`, {});

    return data.data;
  }
}
