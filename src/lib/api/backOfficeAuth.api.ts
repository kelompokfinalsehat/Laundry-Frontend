import { MeResponse, MessageResponse } from "@/types/api";
import { api } from "./axios";

export class BackOfficeAuthApi {
  async me() {
    const { data } = await api.get<MeResponse>("/internal/profile/me");

    return data.data;
  }

  async logout() {
    const { data } = await api.post<{ data: MessageResponse }>(
      "/auth/logout",
    );

    return data.data;
  }
}

export const backOfficeAuthApi = new BackOfficeAuthApi();