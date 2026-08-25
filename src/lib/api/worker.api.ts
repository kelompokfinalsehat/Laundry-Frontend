import type { WorkerAvailableAssignment, WorkerAvailableQuery, WorkerClaimResponse } from "@/types/api/worker.types";
import { api } from "./axios";
import { ApiResponse, PaginatedResponse } from "@/types/api";

const BASE_PATH = "/internal/worker";
type PaginatedApiResponse<T> = ApiResponse<T[]> & { meta: PaginatedResponse<T>["meta"] };

export class WorkerApi {
  async getAvailable(query: WorkerAvailableQuery) {
    const { data } = await api.get<PaginatedApiResponse<WorkerAvailableAssignment>>(`${BASE_PATH}/jobs/available`, { params: query });
    return { data: data.data, meta: data.meta };
  }

  async claimAssignment(assignmentId: string) {
    const { data } = await api.post<ApiResponse<WorkerClaimResponse>>(`${BASE_PATH}/jobs/${assignmentId}/claim`, {});
    return data.data;
  }
}
