import type {
  AttendanceHistoryPaginated,
  AttendanceHistoryQuery,
  AttendanceStatusResponse,
  ClockInResponse,
  ClockOutResponse,
} from "@/types/api/attendance.types";
import { api } from "./axios";
import { ApiResponse } from "@/types/api";

// BASE_PATH ini mengarah ke endpoint di BE
const BASE_PATH = "/internal/attendance";

export class AttendanceApi {
  async clockIn() {
    const { data } = await api.post<ApiResponse<ClockInResponse>>(`${BASE_PATH}/clock-in`, {});
    return data.data;
  }

  async clockOut() {
    const { data } = await api.post<ApiResponse<ClockOutResponse>>(`${BASE_PATH}/clock-out`, {});
    return data.data;
  }

  async getStatus() {
    const { data } = await api.get<ApiResponse<AttendanceStatusResponse>>(`${BASE_PATH}/status`);
    return data.data;
  }

  async getHistory(query: AttendanceHistoryQuery) {
    const { data } = await api.get<AttendanceHistoryPaginated>(`${BASE_PATH}/history`, {
      params: query,
    });
    return { data: data.data, meta: data.meta };
  }
}
