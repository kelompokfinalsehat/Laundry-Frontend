"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { backOfficeAuthApi } from "@/lib/api/backOfficeAuth.api";
import { useAuthStore } from "@/stores/useAuthStore";

export const BACK_OFFICE_AUTH_QUERY_KEY = ["back-office", "auth", "me"];

export function useBackOfficeCurrentUser() {
  return useQuery({
    queryKey: BACK_OFFICE_AUTH_QUERY_KEY,
    queryFn: backOfficeAuthApi.me,
    retry: false,
  });
}

export function useBackOfficeLogout() {
  const queryClient = useQueryClient();
  const clearUser = useAuthStore((state) => state.clearUser);

  return useMutation({
    mutationFn: backOfficeAuthApi.logout,

    onSuccess: () => {
      clearUser();

      queryClient.setQueryData(BACK_OFFICE_AUTH_QUERY_KEY, null);
      queryClient.invalidateQueries({
        queryKey: ["auth", "me"],
      });
    },
  });
}