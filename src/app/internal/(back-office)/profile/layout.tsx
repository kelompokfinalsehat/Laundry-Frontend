"use client";

import { Center, Loader } from "@mantine/core";
import { BackOfficeAppShell } from "@/components/back-office/shared/BackOfficeAppShell";
import { useBackOfficeCurrentUser } from "@/hooks/backOfficeAuth.hooks";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: user, isLoading } = useBackOfficeCurrentUser();

  if (isLoading || !user) {
    return (
      <Center mih="100vh">
        <Loader size="md" />
      </Center>
    );
  }

  const role =
    user.role === "SUPER_ADMIN"
      ? "SUPER_ADMIN"
      : "OUTLET_ADMIN";

  return (
    <BackOfficeAppShell role={role}>
      {children}
    </BackOfficeAppShell>
  );
}