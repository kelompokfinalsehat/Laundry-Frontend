"use client";

import { Center, Paper, Stack } from "@mantine/core";
import { EmployeeLoginForm } from "@/components/internalAuth/EmployeeLoginForm";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getEmployeeHome } from "@/utils";

export default function EmployeeLoginPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  const isCheckingAuth = useAuthStore((state) => state.isInitializing);
  const isAlreadyLogin = user?.accountType === "employee";

  useEffect(() => {
    if (isCheckingAuth) return; // check auth sampai selesai.
    if (isAlreadyLogin) {
      router.replace(getEmployeeHome(user.role));
    }
  }, [isCheckingAuth, isAlreadyLogin, user, router]);

  if (isCheckingAuth) return null; // supaya ketika masih cek auth tidak menampilkan component
  if (isAlreadyLogin) return null; // supaya tidak menampilkan component saat mau pindah page
  return (
    <Center mih="100vh" px="md">
      <Paper w="100%" maw={420} p={32} radius="md" withBorder>
        <Stack gap="md">
          <EmployeeLoginForm />
        </Stack>
      </Paper>
    </Center>
  );
}
