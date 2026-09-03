import type {
  ApiResponse,
  PaginatedResponse,
} from "@/types/api";

import { api } from "./axios";

import type {
  ComplaintDetail,
  ComplaintListItem,
  ComplaintQuery,
  DecideComplaintPayload,
} from "@/types/api/complaint.types";

const BASE_URL = "/internal/complaints";

export class ComplaintApi {
  async getComplaints(
    params?: ComplaintQuery,
  ): Promise<
    PaginatedResponse<ComplaintListItem>
  > {
    const response = await api.get<
      PaginatedResponse<ComplaintListItem>
    >(
      BASE_URL,
      {
        params,
      },
    );

    return response.data;
  }

  async getComplaintById(
    complaintId: string,
  ): Promise<ComplaintDetail> {
    const response = await api.get<
      ApiResponse<ComplaintDetail>
    >(
      `${BASE_URL}/${complaintId}`,
    );

    return response.data.data;
  }

  async decideComplaint(
    complaintId: string,
    payload: DecideComplaintPayload,
  ): Promise<ComplaintDetail> {
    const response = await api.patch<
      ApiResponse<ComplaintDetail>
    >(
      `${BASE_URL}/${complaintId}/decision`,
      payload,
    );

    return response.data.data;
  }
}