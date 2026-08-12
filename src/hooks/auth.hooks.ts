"use client";

import { AuthApi } from "@/lib/api/authCustomer.api";
import {
  LoginCustomerSchema,
  RegisterCustomerSchema,
} from "@/lib/validation/auth.validation";
import {
  GoogleLoginPayload,
  ResetPasswordCustomerPayload,
  VerificationPayload,
  VerifyEmailPayload,
} from "@/types/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
    mutationFn: (payload: GoogleLoginPayload) =>
      authApi.loginWithGoogle(payload),
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
    mutationFn: (payload: VerificationPayload) =>
      authApi.resendCustomerVerification(payload),
  });
}

export function useForgotPasswordCustomer() {
  return useMutation({
    mutationFn: (payload: VerificationPayload) =>
      authApi.forgotPasswordCustomer(payload),
  });
}

export function useResetPasswordCustomer() {
  return useMutation({
    mutationFn: (payload: ResetPasswordCustomerPayload) =>
      authApi.resetPasswordCustomer(payload),
  });
}

export function useCurrentUser() {
  return useQuery({
    queryKey: ["auth", "me"],  
    queryFn: authApi.me,         
    retry: false,
    staleTime: 5 * 60 * 1000,    
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      // hapus cache /me, supaya AuthGate & komponen lain langsung tahu user sudah logout
      queryClient.setQueryData(["auth", "me"], null);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
}
