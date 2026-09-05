"use client";

import { Center, Paper, Stack } from "@mantine/core";
import { EmployeeLoginForm } from "@/components/internalAuth/EmployeeLoginForm";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const backOfficeRole = ["OUTLET_ADMIN", "SUPER_ADMIN"];

export default function EmployeeLoginPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  const isBackOfficeUser =
    !!user && backOfficeRole.includes(user.role);

  useEffect(() => {
    if (!isBackOfficeUser) {
      return;
    }

    router.replace(
      user.role === "OUTLET_ADMIN"
        ? "/internal/outlet-admin/dashboard"
        : "/internal/super-admin/dashboard"
    );
  }, [isBackOfficeUser, user, router]);

  if (isBackOfficeUser) {
    return (
      <Center mih="100vh">
        <div />
      </Center>
    );
  }

  return (
    <Center mih="100vh" px="md">
      <Paper
        w="100%"
        maw={420}
        p={32}
        radius="md"
        withBorder
      >
        <Stack gap="md">
          <EmployeeLoginForm />
        </Stack>
      </Paper>
    </Center>
  );
}