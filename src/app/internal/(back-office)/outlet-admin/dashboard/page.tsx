"use client";

import { DashboardContent } from "@/components/back-office/dashboard/DashboardContent";
import { useAuthStore } from "@/stores/useAuthStore";

export default function Page() {
  const user = useAuthStore((state) => state.user);
  return <DashboardContent role={user?.role!} title="Dashboard Outlet" description="Ringkasan operasional outlet." />;
}
