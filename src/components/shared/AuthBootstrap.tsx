"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/useAuthStore";
import { AuthApi } from "@/lib/api/auth.api";
import { ROLE_HOME } from "@/lib/constants/routes";
import type { Role } from "@/types/api";

const authApi = new AuthApi();

export function AuthBootstrap({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.clearUser);
  const router = useRouter();
  const pathname = usePathname();

  const { data, isError, isSuccess } = useQuery({
    queryKey: ["auth", "me"],
    queryFn: authApi.me,
    retry: false,
  });

  useEffect(() => {
    if (isSuccess && data) setUser(data);
    if (isError) clearUser();
  }, [isSuccess, isError, data, setUser, clearUser]);


  useEffect(() => {
    if (!isSuccess || !data) return;

    const isEmployee = data.accountType !== "customer";

  
    if (!isEmployee) {
      if (pathname === "/login") {
        router.replace("/");
      }
      return;
    }

   
    const home = ROLE_HOME[data.role as Role] ?? "/internal/login";

   
    if (pathname === "/internal/login" || pathname === "/") {
      router.replace(home);
    }
  }, [isSuccess, data, pathname, router]);

  return <>{children}</>;
}
