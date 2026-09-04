"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/useAuthStore";
import { AuthApi } from "@/lib/api/auth.api";

const authApi = new AuthApi();

export function AuthBootstrap({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.clearUser);

  // queryKey WAJIB sama persis dengan yang dipakai useCurrentUser (auth.hooks.ts)
  const { data, isError, isSuccess } = useQuery({
    queryKey: ["auth", "me"],
    queryFn: authApi.me,
    retry: false,
  });

  useEffect(() => {
    if (isSuccess && data) setUser(data);
    if (isError) clearUser();
  }, [isSuccess, isError, data, setUser, clearUser]);

  return <>{children}</>;
}
