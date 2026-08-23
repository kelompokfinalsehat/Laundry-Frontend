import type {
  AttendanceHistoryItem,
  AttendanceHistoryQuery,
  AttendanceStatusResponse,
  ClockInResponse,
  ClockOutResponse,
} from "@/types/api/attendance.types";
import { api } from "./axios";

// Endpoint yang bukan LIST menggunakan ini.
type SingleResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

type ListResponse<T> = {
  success: boolean;
  message: string;
  data: T[];
  meta: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
};

// BASE_PATH ini mengarah ke endpoint di BE
const BASE_PATH = "/internal/attendance";

export class AttendanceApi {
  async clockIn() {
    const { data } = await api.post<SingleResponse<ClockInResponse>>(`${BASE_PATH}/clock-in`, {});
    return data.data;
  }

  async clockOut() {
    const { data } = await api.post<SingleResponse<ClockOutResponse>>(`${BASE_PATH}/clock-out`, {});
    return data.data;
  }

  async getStatus() {
    const { data } = await api.get<SingleResponse<AttendanceStatusResponse>>(`${BASE_PATH}/status`);
    return data.data;
  }
  async getHistory(query: AttendanceHistoryQuery) {
    const { data } = await api.get<ListResponse<AttendanceHistoryItem>>(`${BASE_PATH}/history`, {
      params: query,
    });
    return { data: data.data, meta: data.meta };
  }
}
