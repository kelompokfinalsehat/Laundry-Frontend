

import { ApiResponse, PaginatedResponse } from "@/types/api";
import type {
  ApproveBypassPayload,
  BypassDetail,
  BypassItem,
  BypassListItem,
  BypassQuery,
} from "@/types/api/bypass.types";
import { api } from "./axios";

export class BypassApi {
  async getBypassRequests(
    query: BypassQuery,
  ) {
    const response =
      await api.get<PaginatedResponse<BypassListItem>>(
        "/internal/bypass-requests",
        {
          params: query,
        },
      );

    return response.data;
  }

  async getBypassRequestById(
    bypassId: string,
  ) {
    const response =
      await api.get<ApiResponse<BypassDetail>>(
        `/internal/bypass-requests/${bypassId}`,
      );

    return response.data;
  }

  async approveBypassRequest(
    bypassId: string,
    payload: ApproveBypassPayload,
  ) {
    const response =
      await api.post<ApiResponse<BypassItem>>(
        `/internal/bypass-requests/${bypassId}/approve`,
        payload,
      );

    return response.data;
  }

  async rejectBypassRequest(
    bypassId: string,
  ) {
    const response =
      await api.post<ApiResponse<BypassItem>>(
        `/internal/bypass-requests/${bypassId}/reject`,
      );

    return response.data;
  }
};