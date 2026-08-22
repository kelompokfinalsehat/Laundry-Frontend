"use client";

import { Grid, Stack } from "@mantine/core";
import { useDashboard } from "@/hooks/dashboard.hooks";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { PageHeader } from "@/components/ui/PageHeader";
import { DashboardSummary } from "./DashboardSummary";
import { RevenueTrendChart } from "./RevenueTrendChart";
import { OrderOverview } from "./OrderOverview";
import { RecentOrders } from "./RecentOrders";
import { PendingReceive } from "./PendingReceive";
import { PendingBypass } from "./PendingBypass";

export function DashboardContent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const dashboard = useDashboard();

  return (
    <Stack gap="md">
      <PageHeader
        title={title}
        description={description}
      />

      <AsyncStateView
        isLoading={dashboard.isLoading}
        isError={dashboard.isError}
        error={dashboard.error}
        data={dashboard.data}
        onRetry={() => dashboard.refetch()}
      >
        {(data) => (
          <Stack gap="md">
            <DashboardSummary summary={data.summary} />

            <Grid gap="md">
              <Grid.Col span={{ base: 12, lg: 8 }}>
                <RevenueTrendChart
                  data={data.revenueTrend}
                />
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 4 }}>
                <OrderOverview
                  data={data.orderOverview}
                />
              </Grid.Col>
            </Grid>

            <Grid gap="md">
              <Grid.Col span={{ base: 12, lg: 7 }}>
                <RecentOrders
                  data={data.recentOrders}
                />
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 5 }}>
                <Stack gap="md">
                  <PendingReceive
                    data={data.pendingReceive}
                  />

                  <PendingBypass
                    data={data.pendingBypass}
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