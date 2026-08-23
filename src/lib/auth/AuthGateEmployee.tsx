"use client";

import { useCurrentUser } from "@/hooks/authCustomer.hooks";
import { Role } from "@/types/api";
import { Center, Loader } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export type AuthGateEmployeeProps = {
  children: React.ReactNode;
  allowedRoles: Role[];
};

export function AuthGateEmployee({
  children,
  allowedRoles,
}: AuthGateEmployeeProps) {
  const router = useRouter();
  const { data: user, isLoading, isError } = useCurrentUser();

  const isUnauthenticated = !isLoading && (isError || !user);
  const isCustomer = !isLoading && !!user && user.accountType === "customer";
  const isWrongRole =
    !isLoading && !!user && !allowedRoles.includes(user.role as Role);
 

  useEffect(() => {
    if (isLoading) return;

    if (isUnauthenticated) {
      router.replace("/login");
      return;
    }

    if (isCustomer) {
      router.replace("/");
      return;
    }

    if (isWrongRole) {
      router.replace("/internal/forbidden");
      return;
    }
  }, [isLoading, isUnauthenticated, isCustomer, isWrongRole, router]);

  if (isLoading || isUnauthenticated || isCustomer || isWrongRole) {
    return (
      <Center mih="100vh">
        <Loader size="md" />
      </Center>
    );
  }

  return <>{children}</>;
}
