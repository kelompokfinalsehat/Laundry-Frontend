"use client";

import { ProfileApi } from "@/lib/api/profileCustomer.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AUTH_ME_QUERY_KEY } from "./authCustomer.hooks";

const profileApi = new ProfileApi();

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: profileApi.updateProfile,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY }),
  });
}

export function useUpdateProfilePhoto() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: profileApi.updateProfilePhoto,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY }),
  });
}

export function useRequestEmailChange() {
  return useMutation({ mutationFn: profileApi.requestEmailChange });
}

export function useConfirmEmailChange() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: profileApi.confirmEmailChange,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY }),
  });
}