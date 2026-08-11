import {
  GoogleLoginPayload,
  LoginCustomerResponse,
  MeResponse,
  MessageResponse,
  RegisterCustomerResponse,
  ResetPasswordCustomerPayload,
  VerificationPayload,
  VerifyEmailPayload,
} from "@/types/api";
import { api } from "./axios";
import {
  LoginCustomerSchema,
  RegisterCustomerSchema,
} from "../validation/auth.validation";

export class AuthApi {
  async registerCustomer(payload: RegisterCustomerSchema) {
    const { data } = await api.post<{ data: RegisterCustomerResponse }>(
      "/auth/register",
      payload,
    );
    return data.data;
  }

  async loginCustomer(payload: LoginCustomerSchema) {
    const { data } = await api.post<{
      data: LoginCustomerResponse;
    }>("/auth/login", payload);

    return data.data;
  }

  async loginWithGoogle(payload: GoogleLoginPayload) {
    const { data } = await api.post<{ data: LoginCustomerResponse }>(
      "/auth/login/google",
      payload,
    );
    return data.data;
  }

  async verifyCustomerEmail(payload: VerifyEmailPayload) {
    const { data } = await api.post<{ data: MessageResponse }>(
      "/auth/verify-email",
      payload,
    );
    return data.data;
  }

  async resendCustomerVerification(payload: VerificationPayload) {
    const { data } = await api.post<{ data: MessageResponse }>(
      "/auth/resend-verification",
      payload,
    );
    return data.data;
  }

  async forgotPasswordCustomer(payload: VerificationPayload) {
    const { data } = await api.post<{ data: MessageResponse }>(
      "/auth/forgot-password",
      payload,
    );
    return data.data;
  }

  async resetPasswordCustomer(payload: ResetPasswordCustomerPayload) {
    const { data } = await api.post<{ data: MessageResponse }>(
      "/auth/reset-password",
      payload,
    );
    return data.data;
  }

  async me() {
    const {data}= await api.get<MeResponse>("/auth/me");

    console.log("[AUTH API] response:", data);
  console.log("[AUTH API] user:", data.data);

    return data.data;
  }

  async logout() {
    const {data} = await api.post<{ data: MessageResponse }>("/auth/logout");
    return data.data;
  }
}
