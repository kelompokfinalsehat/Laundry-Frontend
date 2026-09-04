"use client";

import { Paper, Stack } from "@mantine/core";
import { EmployeeLoginForm } from "@/components/internalAuth/EmployeeLoginForm";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const backOfficeRole = ["OUTLET_ADMIN", "SUPER_ADMIN"];

export default function EmployeeLoginPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!user || !backOfficeRole.includes(user.role)) {
      return;
    }

    router.replace(
      user.role === "OUTLET_ADMIN"
        ? "/internal/outlet-admin/dashboard"
        : "/internal/super-admin/dashboard"
    );
  }, [user, router]);

  return (
    <Paper maw={420} mx="auto" mt={64} p={32} radius="md" withBorder>
      <Stack gap="md">
        <EmployeeLoginForm />
      </Stack>
    </Paper>
  );
}