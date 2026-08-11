import {
  GoogleLoginPayload,
  LoginResponse,
  MessageResponse,
  RegisterCustomerResponse,
  ResendVerificationPayload,
  VerifyEmailPayload,
  VerifyEmailResponse,
} from "@/types/api";
import { api } from "./axios";
import {LoginCustomerSchema, RegisterCustomerSchema } from "../validation/auth";

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
      data: LoginResponse;
    }>("/auth/login", payload);

    return data.data;
  }

  async loginWithGoogle(payload: GoogleLoginPayload) {
    const { data } = await api.post<{ data: LoginResponse }>(
      "/auth/login/google",
      payload,
    );
    return data.data;
  }

  async verifyCustomerEmail(payload: VerifyEmailPayload) {
    const { data } = await api.post<{ data: VerifyEmailResponse }>(
      "/auth/verify-email",
      payload,
    );
    return data.data;
  }

  async resendCustomerVerification(payload: ResendVerificationPayload) {
    const { data } = await api.post<{ data: MessageResponse }>(
      "/auth/resend-verification",
      payload,
    );
    return data.data;
  }
}
