"use client";

import { useState } from "react";

import { Paper, Stack } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useRouter } from "next/navigation";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { PageHeader } from "@/components/ui/PageHeader";

import { useOrders } from "@/hooks/order.hooks";
import { useOutlets } from "@/hooks/outlet.hooks";

import { OrderFilters } from "./OrderFilters";
import { OrderTable } from "./OrderTable";

import type { OrderQuery } from "@/types/api/order.types";

type Props = {
  role: "SUPER_ADMIN" | "OUTLET_ADMIN";
};

type OrderFiltersState = Pick<
  OrderQuery,
  | "search"
  | "customerStatus"
  | "paymentStatus"
  | "outletId"
  | "startDate"
  | "endDate"
>;

export function OrderContent({ role }: Props) {
  const router = useRouter();

  const [page, setPage] = useState(1);

  const [pageSize, setPageSize] =
    useState<10 | 20 | 50>(10);

  const [filters, setFilters] =
    useState<OrderFiltersState>({});

  const [debouncedSearch] = useDebouncedValue(
    filters.search ?? "",
    400,
  );

  const [sortBy, setSortBy] =
    useState<NonNullable<OrderQuery["sortBy"]>>(
      "createdAt",
    );

  const [sortOrder, setSortOrder] =
    useState<NonNullable<OrderQuery["sortOrder"]>>(
      "desc",
    );

  const orders = useOrders({
    page,
    pageSize,
    ...filters,
    search: debouncedSearch || undefined,
    sortBy,
    sortOrder,
  });

  const outlets = useOutlets({
    page: 1,
    pageSize: 50,
    sortBy: "name",
    sortOrder: "asc",
  });

  const handleFilterChange = (
    key: keyof OrderFiltersState,
    value: string | null,
  ) => {
    setFilters((current) => ({
      ...current,
      [key]: value || undefined,
    }));

    setPage(1);
  };

  const handleReset = () => {
    setFilters({});

    setSortBy("createdAt");

    setSortOrder("desc");

    setPage(1);
  };

  const handleView = (orderId: string) => {
    const basePath =
      role === "SUPER_ADMIN"
        ? "/internal/super-admin/pesanan"
        : "/internal/outlet-admin/pesanan";

    router.push(`${basePath}/${orderId}`);
  };

  return (
    <Stack gap="lg">
      <PageHeader
        title={
          role === "SUPER_ADMIN"
            ? "Seluruh Pesanan"
            : "Pesanan Outlet"
        }
        description={
          role === "SUPER_ADMIN"
            ? "Monitoring pesanan dari seluruh outlet."
            : "Pantau seluruh pesanan pada outlet Anda."
        }
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
            outlets={
              role === "SUPER_ADMIN"
                ? outlets.data?.data ?? []
                : []
            }
            showOutletFilter={
              role === "SUPER_ADMIN"
            }
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
            isEmpty={(response) =>
              response.data.length === 0
            }
            emptyTitle="Pesanan tidak ditemukan"
            emptyDescription="Tidak ada pesanan yang sesuai dengan filter yang dipilih."
          >
            {(response) => (
              <OrderTable
                data={response.data}
                meta={response.meta}
                showOutlet={
                  role === "SUPER_ADMIN"
                }
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