"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { backOfficeProfileApi } from "@/lib/api/backOfficeProfile.api";
import { BACK_OFFICE_AUTH_QUERY_KEY } from "./backOfficeAuth.hooks";

export function useUpdateBackOfficeProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: backOfficeProfileApi.updateProfile,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: BACK_OFFICE_AUTH_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: ["auth", "me"],
      });
    },
  });
}

export function useUpdateBackOfficeProfilePhoto() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: backOfficeProfileApi.updateProfilePhoto,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: BACK_OFFICE_AUTH_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: ["auth", "me"],
      });
    },
  });
}
