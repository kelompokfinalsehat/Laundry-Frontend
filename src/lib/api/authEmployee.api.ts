import {
  AcceptInvitationPayload,
  ApiResponse,
  EmployeeLoginResponse,
  ResetPasswordCustomerPayload,
  VerificationPayload,
} from "@/types/api";
import { api } from "./axios";
import { EmployeeLoginSchema } from "../validation/auth.validation";

export type AcceptInvitationResponse = {
  message: string;
};

export class AuthEmployeeApi {
  async login(payload: EmployeeLoginSchema) {
    const { data } = await api.post<ApiResponse<EmployeeLoginResponse>>(
      "/auth/employee/login",
      payload,
    );
    return data.data;
  }

  async acceptInvitation(payload: AcceptInvitationPayload) {
    const { data } = await api.post<{
      data: AcceptInvitationResponse;
    }>("/auth/employee/accept-invitation", payload);

    return data.data;
  }

  async forgotPassword(payload: VerificationPayload) {
    const { data } = await api.post<ApiResponse<null>>(
      "/auth/employee/forgot-password",
      payload,
    );
    return data;
  }

  async resetPassword(payload: ResetPasswordCustomerPayload) {
    const { data } = await api.post<ApiResponse<null>>(
      "/auth/employee/reset-password",
      payload,
    );
    return data;
  }
<<<<<<< HEAD

  async me() {
    const { data } = await api.get<MeResponse>("/auth/employee/me");
    return data.data;
  }

  async logout() {
    const { data } = await api.post<{ data: MessageResponse }>(
      "/auth/employee/logout",
    );
    return data.data;
  }
=======
 
>>>>>>> origin/develop
}
