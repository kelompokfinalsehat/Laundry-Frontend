import { AuthEmployeeApi } from "@/lib/api/authEmployee.api";
import {
  AcceptInvitationPayload,
  ResetPasswordCustomerPayload,
  VerificationPayload,
} from "@/types/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AUTH_ME_QUERY_KEY } from "./authCustomer.hooks";

const authEmployeeApi = new AuthEmployeeApi();

export function useLoginEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authEmployeeApi.login,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY });
    },
  });
}

export function useAcceptEmployeeInvitation() {
  return useMutation({
    mutationFn: (payload: AcceptInvitationPayload) =>
      authEmployeeApi.acceptInvitation(payload),
  });
}

export function useForgotPasswordEmployee() {
  return useMutation({
    mutationFn: (payload: VerificationPayload) =>
      authEmployeeApi.forgotPassword(payload),
  });
}

export function useResetPasswordEmployee() {
  return useMutation({
    mutationFn: (payload: ResetPasswordCustomerPayload) =>
      authEmployeeApi.resetPassword(payload),
  });
}




