import { useQuery } from "@tanstack/react-query";
import { DashboardQuery } from "@/types/api/dashboard.types";
import { DashboardApi } from "@/lib/api/dashboard.api";

const dashboardApi = new DashboardApi();

export function useDashboard(params?: DashboardQuery) {
  return useQuery({
    queryKey: ["dashboard", params],
    queryFn: () => dashboardApi.getDashboard(params),
    refetchInterval: 30_000,
    refetchOnWindowFocus: true
  });
}
