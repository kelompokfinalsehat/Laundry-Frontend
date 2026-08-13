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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.loginCustomer,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
    },
  });
}

export function useLoginWithGoogle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.loginWithGoogle,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
    },
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
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      queryClient.setQueryData(["auth", "me"], null);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
}
