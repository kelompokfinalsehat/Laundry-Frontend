"use client";

import { Stack, Anchor, Group } from "@mantine/core";
import { useConfirmOrder, useOrderDetail } from "@/hooks/order/order.hooks";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { OrderInfoCard } from "./OrderInfoCard";
import { OrderBillSummaryCard } from "./OrderBillSummaryCard";
import { OrderActionsSection } from "./OrderActionsSection";
import { useRouter } from "next/navigation";
import { IconChevronLeft } from "@tabler/icons-react";
import { ApiError } from "@/lib/api/axios";
import { notifications } from "@mantine/notifications";
import { useQueryClient } from "@tanstack/react-query";

export function OrderDetailView({ id }: { id: string }) {
  const {
    data: order,
    isLoading,
    isError,
    error,
    refetch,
  } = useOrderDetail(id);
  const router = useRouter();
  const { mutate: confirmOrder, isPending } = useConfirmOrder();
  const queryClient = useQueryClient();

  function handleBack() {
    router.replace("/pesanan");
  }

  function handleConfirm() {
    confirmOrder(id, {
      onSuccess: (result) => {
        notifications.show({
          title: "Order berhasil dikonfirmasi",
          message: result.message,
          color: "green",
        });
        queryClient.invalidateQueries({ queryKey: ["orders", id] });
      },
      onError: (error) => notifications.show({
        title: "Konfirmasi order gagal",
        message: getConfirmErrorMessage(error),
        color: "red",
      }),
    });
  }

  return (
    <Stack gap="xl">
      <Anchor
        component="button"
        type="button"
        onClick={handleBack}
        fw={600}
        c="var(--c-text-primary"
      >
        <Group gap={2}>
          <IconChevronLeft stroke={2} />
          pesanan Saya
        </Group>
      </Anchor>

      <AsyncStateView
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={order}
        onRetry={() => refetch()}
        emptyTitle="Order tidak ditemukan"
        emptyDescription="Order ini mungkin sudah dihapus atau bukan milik akun kamu."
      >
        {(order) => (
          <Stack gap="xl">
            <OrderInfoCard order={order} />
            <OrderBillSummaryCard order={order} />
            <OrderActionsSection
              order={order}
              isConfirming={isPending}
              onConfirmReceived={handleConfirm}
            />
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}

function getConfirmErrorMessage(error: unknown): string {
  if (!(error instanceof ApiError)) {
    return "Gagal mengonfirmasi order.";
  }

  switch (error.code) {
    case "ORDER_FORBIDDEN":
      return "Order tidak ditemukan atau bukan milik kamu.";
    case "CONFLICT":
      return "Order belum siap dikonfirmasi.";
    case "COMPLAINT_NOT_ALLOWED":
      return "Tidak bisa konfirmasi selagi komplain masih diproses.";
    default:
      return error.message;
  }
}
