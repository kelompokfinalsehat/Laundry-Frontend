import type {
  DriverAvailablePaginated,
  DriverAvailableQuery,
  DriverClaimResponse,
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
    const { data } = await api.post<ApiResponse<DriverClaimResponse>>(
      `${BASE_PATH}/${assignmentId}/claim`,{}
    );
    return data.data;
  }
}
