"use client";

import { Stack, Tabs } from "@mantine/core";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { AsyncStateView } from "@/components/ui/AsyncStateView";

import {
  useCreateOrder,
  useOrders,
  useReceiveOrder,
} from "@/hooks/order.hooks";

import type {
  CreateOrderPayload,
  CustomerStatus,
  OrderListItem,
  OrderQuery,
} from "@/types/api/order.types";

import { CreateOrderModal } from "./CreateOrderModal";
import { ReceptionFilters } from "./ReceptionFilters";
import { ReceptionTable } from "./ReceptionTable";
import { ReceiveOrderModal } from "./ReceiveOrderModal";
import { notifications } from "@mantine/notifications";

const DEFAULT_PAGE_SIZE = 10;

type ReceptionStage = "WAITING_RECEIPT" | "READY_TO_CREATE";

const STAGE_STATUS: Record<ReceptionStage, CustomerStatus> = {
  WAITING_RECEIPT: "ON_THE_WAY_TO_OUTLET",

  READY_TO_CREATE: "ARRIVED_AT_OUTLET",
};

export function ReceptionContent() {
  const router = useRouter();

  const [stage, setStage] = useState<ReceptionStage>("WAITING_RECEIPT");

  const [selectedOrderToReceive, setSelectedOrderToReceive] =
    useState<OrderListItem | null>(null);

  const [selectedOrderToCreate, setSelectedOrderToCreate] =
    useState<OrderListItem | null>(null);

  const [query, setQuery] = useState<OrderQuery>({
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
    customerStatus: STAGE_STATUS.WAITING_RECEIPT,
    sortBy: "pickupScheduledAt",
    sortOrder: "asc",
  });

  const tableMode = stage === "WAITING_RECEIPT" ? "RECEIVE" : "CREATE_ORDER";

  const { data, isLoading, isError, error, refetch } = useOrders(query);

  const receiveOrderMutation = useReceiveOrder();

  const createOrderMutation = useCreateOrder();

  const handleStageChange = (value: string | null) => {
    if (value !== "WAITING_RECEIPT" && value !== "READY_TO_CREATE") {
      return;
    }

    setStage(value);

    setQuery((previous) => ({
      ...previous,
      page: 1,
      customerStatus: STAGE_STATUS[value],
    }));
  };

  const handleQueryChange = <Key extends keyof OrderQuery>(
    key: Key,
    value: OrderQuery[Key],
  ) => {
    setQuery((previous) => ({
      ...previous,
      [key]: value,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setQuery((previous) => ({
      ...previous,
      page,
    }));
  };

  const handlePageSizeChange = (pageSize: 10 | 20 | 50) => {
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
      customerStatus: STAGE_STATUS[stage],
      sortBy: "pickupScheduledAt",
      sortOrder: "asc",
    });
  };

  const handleReceive = (order: OrderListItem) => {
    setSelectedOrderToReceive(order);
  };

  const handleReceiveConfirm = async () => {
    if (!selectedOrderToReceive) {
      return;
    }

    await receiveOrderMutation.mutateAsync(selectedOrderToReceive.id, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Pesanan berhasil diterima.",
          color: "green",
        });
      },
      onError: (err) => {
        notifications.show({
          title: "Gagal",
          message:
            err instanceof Error ? err.message : "Gagal menerima pesanan.",
          color: "red",
        });
      },
    });

    setSelectedOrderToReceive(null);
  };

  const handleCreateOrder = (order: OrderListItem) => {
    setSelectedOrderToCreate(order);
  };

  const handleCreateOrderSubmit = async (
    orderId: string,
    payload: CreateOrderPayload,
  ) => {
    await createOrderMutation.mutateAsync(
      {
        orderId,
        payload,
      },
      {
        onSuccess: () => {
          notifications.show({
            title: "Berhasil",
            message: "Order berhasil dibuat.",
            color: "green",
          });
        },
        onError: (err) => {
          notifications.show({
            title: "Gagal",
            message:
              err instanceof Error ? err.message : "Gagal membuat order.",
            color: "red",
          });
        },
      },
    );

    setSelectedOrderToCreate(null);
  };

  const handleView = (orderId: string) => {
    router.push(`/internal/outlet-admin/pesanan/${orderId}`);
  };

  return (
    <>
      <Stack gap="lg">
        <Tabs value={stage} onChange={handleStageChange}>
          <Tabs.List>
            <Tabs.Tab value="WAITING_RECEIPT">Menunggu Diterima</Tabs.Tab>

            <Tabs.Tab value="READY_TO_CREATE">Siap Dibuatkan Order</Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <ReceptionFilters
          query={query}
          onChange={handleQueryChange}
          onSortByChange={(value) => handleQueryChange("sortBy", value)}
          onSortOrderChange={(value) => handleQueryChange("sortOrder", value)}
          onReset={handleReset}
        />

        <AsyncStateView
          isLoading={isLoading}
          isError={isError}
          error={error}
          data={data}
          onRetry={refetch}
          isEmpty={(result) => result.data.length === 0}
        >
          {(result) => (
            <ReceptionTable
              data={result.data}
              meta={result.meta}
              mode={tableMode}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
              onReceive={handleReceive}
              onCreateOrder={handleCreateOrder}
              onView={handleView}
            />
          )}
        </AsyncStateView>
      </Stack>

      <ReceiveOrderModal
        opened={selectedOrderToReceive !== null}
        order={selectedOrderToReceive}
        isLoading={receiveOrderMutation.isPending}
        onClose={() => setSelectedOrderToReceive(null)}
        onConfirm={handleReceiveConfirm}
      />

      <CreateOrderModal
        opened={selectedOrderToCreate !== null}
        order={selectedOrderToCreate}
        isSubmitting={createOrderMutation.isPending}
        onClose={() => setSelectedOrderToCreate(null)}
        onSubmit={handleCreateOrderSubmit}
      />
    </>
  );
}
