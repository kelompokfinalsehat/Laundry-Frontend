"use client";

import { Paper, Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { PageHeader } from "@/components/ui/PageHeader";
import { useOrderHooks } from "@/hooks/order.hooks";
import { OrderFilters } from "./OrderFilters";
import { OrderTable } from "./OrderTable";
import { Role } from "@/types/api";
import TableSkeleton from "../shared/TableSkeleton";

type Props = {
  role: Extract<Role, "OUTLET_ADMIN" | "SUPER_ADMIN">;
};

export function OrderContent({ role }: Props) {
  const { filters, sortBy, sortOrder, outlets, handleFilterChange, setSortBy, setPage, setSortOrder, orders, setPageSize, handleView, handleReset } =
    useOrderHooks(role);

  return (
    <Stack gap="lg">
      <PageHeader
        title={role === "SUPER_ADMIN" ? "Seluruh Pesanan" : "Pesanan Outlet"}
        description={role === "SUPER_ADMIN" ? "Monitoring pesanan dari seluruh outlet." : "Pantau seluruh pesanan pada outlet Anda."}
      />

      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <OrderFilters
            filters={filters}
            sortBy={sortBy}
            sortOrder={sortOrder}
            outlets={role === "SUPER_ADMIN" ? (outlets.data?.data ?? []) : []}
            showOutletFilter={role === "SUPER_ADMIN"}
            onChange={handleFilterChange}
            onSortByChange={(value) => {
              setSortBy(value);

              setPage(1);
            }}
            onSortOrderChange={(value) => {
              setSortOrder(value);

              setPage(1);
            }}
            onReset={handleReset}
          />

          <AsyncStateView
            isLoading={orders.isLoading}
            isError={orders.isError}
            error={orders.error}
            data={orders.data}
            onRetry={() => orders.refetch()}
            isEmpty={(response) => response.data.length === 0}
            emptyTitle="Pesanan tidak ditemukan"
            emptyDescription="Tidak ada pesanan yang sesuai dengan filter yang dipilih."
            skeleton={<TableSkeleton />}
          >
            {(response) => (
              <OrderTable
                data={response.data}
                meta={response.meta}
                showOutlet={role === "SUPER_ADMIN"}
                onPageChange={setPage}
                onPageSizeChange={(value) => {
                  setPageSize(value);

                  setPage(1);
                }}
                onView={handleView}
              />
            )}
          </AsyncStateView>
        </Stack>
      </Paper>
    </Stack>
  );
}
