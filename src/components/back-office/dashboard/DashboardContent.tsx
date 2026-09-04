"use client";

import { Grid, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useDashboard } from "@/hooks/dashboard.hooks";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { PageHeader } from "@/components/ui/PageHeader";
import { DashboardSummary } from "./DashboardSummary";
import { RevenueTrendChart } from "./RevenueTrendChart";
import { OrderOverview } from "./OrderOverview";
import { RecentOrders } from "./RecentOrders";
import { PendingReceive } from "./PendingReceive";
import { PendingBypass } from "./PendingBypass";
import DashboardSkeleton from "./DashboardSkeleton";

type Props = {
  title: string;
  description: string;
  role: string;
};

export function DashboardContent({
  title,
  description,
  role,
}: Props) {
  const dashboard = useDashboard();
  const router = useRouter();

  const isOutletAdmin = role === "OUTLET_ADMIN";

  const handleOrderClick = (orderId: string) => {
    router.push(
      `${isOutletAdmin ? "/internal/outlet-admin" : "/internal/super-admin"}/pesanan/${orderId}`,
    );
  };

  const handlePendingReceiveClick = (orderId: string) => {
    if (isOutletAdmin) {
      router.push("/internal/outlet-admin/penerimaan");
      return;
    }

    router.push(`/internal/super-admin/pesanan/${orderId}`);
  };

  const handleBypassClick = (bypassId: string, orderId: string) => {
    if (isOutletAdmin) {
      router.push(`/internal/outlet-admin/bypass/${bypassId}`);
      return;
    }

    router.push(`/internal/super-admin/pesanan/${orderId}`);
  };

  const handleOrdersClick = () => {
    router.push(
      isOutletAdmin
        ? "/internal/outlet-admin/pesanan"
        : "/internal/super-admin/pesanan",
    );
  };

  const handleReceiveClick = () => {
    if (isOutletAdmin) {
      router.push("/internal/outlet-admin/penerimaan");
    }
  };

  const handleBypassListClick = () => {
    if (isOutletAdmin) {
      router.push("/internal/outlet-admin/bypass");
    }
  };

  return (
    <Stack gap="md">
      <PageHeader title={title} description={description} />

      <AsyncStateView
        isLoading={dashboard.isLoading}
        isError={dashboard.isError}
        error={dashboard.error}
        data={dashboard.data}
        onRetry={() => dashboard.refetch()}
        skeleton={<DashboardSkeleton />}
      >
        {(data) => (
          <Stack gap="md">
            <DashboardSummary summary={data.summary} />

            <Grid gap="md">
              <Grid.Col span={{ base: 12, lg: 8 }}>
                <RevenueTrendChart data={data.revenueTrend} />
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 4 }}>
                <OrderOverview data={data.orderOverview} />
              </Grid.Col>
            </Grid>

            <Grid gap="md">
              <Grid.Col span={{ base: 12, lg: 7 }}>
                <RecentOrders
                  data={data.recentOrders}
                  onSelect={handleOrderClick}
                  onViewAll={handleOrdersClick}
                />
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 5 }}>
                <Stack gap="md">
                  <PendingReceive
                    data={data.pendingReceive}
                    onSelect={handlePendingReceiveClick}
                    onViewAll={handleReceiveClick}
                  />

                  <PendingBypass
                    data={data.pendingBypass}
                    onSelect={handleBypassClick}
                    onViewAll={handleBypassListClick}
                  />
                </Stack>
              </Grid.Col>
            </Grid>
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}