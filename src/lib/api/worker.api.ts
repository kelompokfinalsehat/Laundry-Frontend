import type { ApiResponse } from "@/types/api";
import { api } from "./axios";
import type {
  WorkerAvailableQuery,
  WorkerClaimResponse,
  WorkerkAvailablePaginated,
} from "@/types/api/worker.types";

const BASE_PATH = "/internal/worker/jobs";

export class WorkerApi {
  async getAvailable(query: WorkerAvailableQuery) {
    const { data } = await api.get<WorkerkAvailablePaginated>(`${BASE_PATH}/available`, {
      params: query,
    });
    return {
      data: data.data,
      meta: data.meta,
    };
  }

  async claim(assignmentId: string) {
    const { data } = await api.post<ApiResponse<WorkerClaimResponse>>(
      `${BASE_PATH}/${assignmentId}/claim`,{}
    );
    return data.data;
  }
}
