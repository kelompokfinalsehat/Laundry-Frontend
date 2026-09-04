"use client";

import {
  useCreatePayment,
  useLatestPayment,
  useOrderDetail,
} from "@/hooks/order/order.hooks";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { BillDetailContent } from "./billDetailContent";
import { Anchor, Box, Group, Stack, Text } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export function BillDetailView({ id }: { id: string }) {
  const {
    data: order,
    isLoading,
    isError,
    error,
    refetch,
  } = useOrderDetail(id);

  const router = useRouter();

  function handleBack() {
    router.replace(`/pesanan/${id}`);
  }

  const createPayment = useCreatePayment(id);

  const { refetch: refetchLatestPayment } = useLatestPayment(id);

  const handlePayment = () => {
    createPayment.mutate(undefined, {
      onSuccess: (payment) => {
        window.location.href = payment.redirectUrl;
      },

      onError: async (error) => {
        if (error.code !== "PAYMENT_ALREADY_PENDING") {
          return;
        }

        const { data: latestPayment } = await refetchLatestPayment();

        if (!latestPayment?.redirectUrl) {
          return;
        }

        window.location.href = latestPayment.redirectUrl;
      },
    });
  };

  return (
    <Box maw={720} mx="auto" py={{ base: 16, sm: 32 }}>
      <Stack gap="lg">
        <Anchor
          component="button"
          type="button"
          onClick={handleBack}
          fw={600}
          c="var(--c-text-primary"
        >
          <Group gap={2}>
            <IconChevronLeft stroke={2} />
            pesanan
          </Group>
        </Anchor>

        <AsyncStateView
          isLoading={isLoading}
          isError={isError}
          error={error}
          data={order}
          onRetry={() => refetch()}
          emptyTitle="Tagihan tidak ditemukan"
          emptyDescription="Order ini mungkin sudah dihapus atau bukan milik akun kamu."
        >
          {(order) =>
            !order.bill ? (
              <Text c="dimmed" ta="center" py="xl">
                Tagihan belum tersedia.
              </Text>
            ) : (
              <BillDetailContent
                order={order}
                bill={order.bill}
                onPay={handlePayment}
                isPaying={createPayment.isPending}
              />
            )
          }
        </AsyncStateView>
      </Stack>
    </Box>
  );
}
