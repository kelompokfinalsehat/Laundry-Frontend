import type { DriverAvailableAssignment, DriverAvailableQuery, DriverClaimResponse } from "@/types/api/driver.types";
import { api } from "./axios";
import { ApiResponse, PaginatedResponse } from "@/types/api";

const BASE_PATH = "/internal/driver";
type PaginatedApiResponse<T> = ApiResponse<T[]> & { meta: PaginatedResponse<T>["meta"] };
export class DriverApi {
  async getAvailable(query: DriverAvailableQuery) {
    const { data } = await api.get<PaginatedApiResponse<DriverAvailableAssignment>>(`${BASE_PATH}/task/available`, { params: query });
    return { data: data.data, meta: data.meta };
  }

  async claimAssignment(assignmentId: string) {
    const { data } = await api.post<ApiResponse<DriverClaimResponse>>(`${BASE_PATH}/task/${assignmentId}/claim`, {});
    return data.data;
  }
}
