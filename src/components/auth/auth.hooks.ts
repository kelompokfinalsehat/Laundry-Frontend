"use client";

import { AuthApi } from "@/lib/api/auth.api";import { EmailVerificationSchema, LoginCustomerSchema, RegisterCustomerSchema } from "@/lib/validation/auth";
import { GoogleLoginPayload,  ResendVerificationPayload, VerifyEmailPayload,} from "@/types/api";
;
import { useMutation } from "@tanstack/react-query";


const authApi = new AuthApi();

export function useRegisterCustomer() {
  return useMutation({
    mutationFn: (payload: RegisterCustomerSchema) =>
      authApi.registerCustomer(payload),
  });
}

export function useLoginCustomer() {
  return useMutation({
    mutationFn: (payload: LoginCustomerSchema) =>
      authApi.loginCustomer(payload),
  });
}

export function useLoginWithGoogle() {
  return useMutation({
    mutationFn: (payload: GoogleLoginPayload)=>
      authApi.loginWithGoogle(payload)
  });
}

export function useVerifyCustomerEmail() {
  return useMutation({
    mutationFn: (payload: VerifyEmailPayload) =>
      authApi.verifyCustomerEmail(payload),
  });
}

export function useResendCustomerVerification() {
  return useMutation({
    mutationFn: (payload: ResendVerificationPayload) =>
      authApi.resendCustomerVerification(payload),
  });
}
