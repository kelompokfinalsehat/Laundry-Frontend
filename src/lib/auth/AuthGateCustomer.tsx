"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Center, Loader } from "@mantine/core";
import { useCurrentUser } from "@/hooks/auth.hooks";

type AuthGateProps = {
  children: React.ReactNode;
};

export function AuthGate({ children }: AuthGateProps) {
  const router = useRouter();

  const { data: user, isLoading, isError } = useCurrentUser();

 useEffect(() => {
  if (isLoading) return;

  if (isError || !user) {
    const currentPath = window.location.pathname + window.location.search;
    router.replace(`/login?intended_url=${encodeURIComponent(currentPath)}`);
    return;
  }

  if (!user.isEmailVerified) {
    router.replace("/login?reason=email-not-verified");
    return;
  }

  if (user.accountType !== "customer") {
    router.replace("/login");
    return;
  }
}, [user, isLoading, isError, router]);

  if (isLoading || !user) {
    return (
      <Center mih="100vh">
        <Loader size="md" />
      </Center>
    );
  }

  if (!user || isError || !user.isEmailVerified || user.accountType !== "customer") {
    return null;
  }

  return <>{children}</>;
}
