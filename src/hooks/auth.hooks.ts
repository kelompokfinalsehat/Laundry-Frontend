"use client";

import { AuthApi } from "@/lib/api/authCustomer.api";
import { AuthEmployeeApi } from "@/lib/api/authEmployee.api";
import {
  EmployeeLoginSchema,
  LoginCustomerSchema,
  RegisterCustomerSchema,
} from "@/lib/validation/auth.validation";
import {
  AcceptInvitationPayload,
  GoogleLoginPayload,
  ResetPasswordCustomerPayload,
  VerificationPayload,
  VerifyEmailPayload,
} from "@/types/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const authApi = new AuthApi();
const authEmployeeApi = new AuthEmployeeApi()

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

export function useLoginEmployee() {
  return useMutation({
    mutationFn: (payload: EmployeeLoginSchema) => authEmployeeApi.login(payload)
  })
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

export function useAcceptEmployeeInvitation() {
  return useMutation({
    mutationFn: (payload: AcceptInvitationPayload) =>
      authEmployeeApi.acceptInvitation(payload),
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

export function useForgotPasswordEmployee(){
  return useMutation({
    mutationFn: (payload: VerificationPayload) => authEmployeeApi.forgotPassword(payload)
  })
}

export function useResetPasswordCustomer() {
  return useMutation({
    mutationFn: (payload: ResetPasswordCustomerPayload) =>
      authApi.resetPasswordCustomer(payload),
  });
}

export function useResetPasswordEmployee(){
  return useMutation({
    mutationFn: (payload: ResetPasswordCustomerPayload) => authEmployeeApi.resetPassword(payload)
  })
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
