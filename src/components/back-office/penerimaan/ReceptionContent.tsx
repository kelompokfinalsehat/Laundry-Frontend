"use client";

import { Stack } from "@mantine/core";

import {
  useDisclosure,
} from "@mantine/hooks";

import { useState } from "react";

import {
  AsyncStateView,
} from "@/components/ui/AsyncStateView";

import {
  useOrders,
  useReceiveOrder,
} from "@/hooks/order.hooks";

import type {
  OrderListItem,
  OrderQuery,
} from "@/types/api/order.types";

import {
  ReceiveOrderModal,
} from "./ReceiveOrderModal";

import {
  ReceptionFilters,
} from "./ReceptionFilters";

import {
  ReceptionTable,
} from "./ReceptionTable";
import { useRouter } from "next/navigation";

const DEFAULT_PAGE_SIZE = 10;

export function ReceptionContent() {
  const router = useRouter();
  const [
    query,
    setQuery,
  ] = useState<OrderQuery>({
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
    customerStatus: "ON_THE_WAY_TO_OUTLET",
    sortBy: "pickupScheduledAt",
    sortOrder: "asc",
  });

  const [
    selectedOrder,
    setSelectedOrder,
  ] = useState<OrderListItem | null>(
    null,
  );

  const [
    opened,
    {
      open,
      close,
    },
  ] = useDisclosure(false);

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useOrders(query);

  const receiveOrder =
    useReceiveOrder();

  const handleQueryChange = <
    Key extends keyof OrderQuery,
  >(
    key: Key,
    value: OrderQuery[Key],
  ) => {
    setQuery((previous) => ({
      ...previous,
      [key]: value,
      page: 1,
    }));
  };

  const handlePageChange = (
    page: number,
  ) => {
    setQuery((previous) => ({
      ...previous,
      page,
    }));
  };

  const handlePageSizeChange = (
    pageSize: 10 | 20 | 50,
  ) => {
    setQuery((previous) => ({
      ...previous,
      page: 1,
      pageSize,
    }));
  };

  const handleReset = () => {
    setQuery({
      page: 1,
      pageSize: DEFAULT_PAGE_SIZE,
      customerStatus:
        "ON_THE_WAY_TO_OUTLET",
      sortBy: "pickupScheduledAt",
      sortOrder: "asc",
    });
  };

  const handleReceive = (
    order: OrderListItem,
  ) => {
    setSelectedOrder(order);
    open();
  };

  const handleCloseModal = () => {
    if (receiveOrder.isPending) {
      return;
    }

    close();
    setSelectedOrder(null);
  };

  const handleConfirmReceive = async () => {
    if (!selectedOrder) {
      return;
    }

    await receiveOrder.mutateAsync(
      selectedOrder.id,
    );

    handleCloseModal();
  };

  const handleView = (
  orderId: string,
) => {
  router.push(
    `/internal/outlet-admin/pesanan/${orderId}`,
  );
};

  return (
    <>
      <Stack gap="lg">
        <ReceptionFilters
          query={query}
          onChange={handleQueryChange}
          onSortByChange={(value) =>
            handleQueryChange(
              "sortBy",
              value,
            )
          }
          onSortOrderChange={(value) =>
            handleQueryChange(
              "sortOrder",
              value,
            )
          }
          onReset={handleReset}
        />

        <AsyncStateView
          isLoading={isLoading}
          isError={isError}
          error={error}
          data={data}
          onRetry={refetch}
          isEmpty={(result) =>
            result.data.length === 0
          }
          emptyTitle="Tidak ada pesanan"
          emptyDescription="Tidak ada pesanan yang sedang dalam proses penerimaan."
        >
          {(result) => (
            <ReceptionTable
              data={result.data}
              meta={result.meta}
              onPageChange={
                handlePageChange
              }
              onPageSizeChange={
                handlePageSizeChange
              }
              onReceive={
                handleReceive
              }
              onView={handleView}
            />
          )}
        </AsyncStateView>
      </Stack>

      <ReceiveOrderModal
        opened={opened}
        order={selectedOrder}
        isLoading={
          receiveOrder.isPending
        }
        onClose={handleCloseModal}
        onConfirm={
          handleConfirmReceive
        }
      />
    </>
  );
}