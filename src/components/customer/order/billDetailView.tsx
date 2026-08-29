"use client";

import {
  useCreatePayment,
  useLatestPayment,
  useOrderDetail,
} from "@/hooks/order.hooks";
import { OrderDetail } from "@/types/api/orders.types";
import {
  Badge,
  Box,
  Button,
  Divider,
  Group,
  Loader,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

type BillStatus = NonNullable<OrderDetail["bill"]>;

function formatRupiah(value: string | number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(value));
}

function getPaymentStatusLabel(
  status: BillStatus["paymentStatus"] | undefined,
) {
  switch (status) {
    case "PAID":
      return "Sudah Dibayar";

    case "UNPAID":
    default:
      return "Belum Dibayar";
  }
}

function getPaymentStatusColor(
  status: BillStatus["paymentStatus"] | undefined,
) {
  switch (status) {
    case "PAID":
      return "green";

    case "UNPAID":
    default:
      return "yellow";
  }
}

export function BillDetailView({ id }: { id: string }) {
  const { data: order, isLoading } = useOrderDetail(id);

  const createPayment = useCreatePayment(id);

  const { refetch: refetchLatestPayment } = useLatestPayment(id);

  if (isLoading) {
    return (
      <Group justify="center" py="xl">
        <Loader color="var(--color-primary)" />
      </Group>
    );
  }

  if (!order) {
    return (
      <Text c="var(--color-error)" ta="center" py="xl">
        Tagihan tidak ditemukan.
      </Text>
    );
  }

  if (!order.bill) {
    return (
      <Text c="dimmed" ta="center" py="xl">
        Tagihan belum tersedia.
      </Text>
    );
  }

  const weight = Number(order.bill.weightKg ?? 0);
  const pricePerKg = Number(order.bill.pricePerKgSnapshot ?? 0);
  const shippingFee = Number(order.bill.shippingFeeSnapshot ?? 0);

  const laundrySubtotal = weight * pricePerKg;
  const totalAmount = laundrySubtotal + shippingFee;

const handlePayment = () => {
  createPayment.mutate(undefined, {
    onSuccess: (payment) => {
      window.location.href = payment.redirectUrl;
    },

    onError: async (error) => {
      if (error.code !== "PAYMENT_ALREADY_PENDING") {
        return;
      }

      const { data: latestPayment } =
        await refetchLatestPayment();

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
        {/* Header */}
        <Box>
          <Title order={2}>Detail Tagihan</Title>

          <Text c="dimmed" size="sm" mt={4}>
            Order: {order.orderCode}
          </Text>
        </Box>

        {/* Bill */}
        <Paper withBorder radius="md" p={{ base: "md", sm: "lg" }}>
          <Stack gap="md">
            {/* Payment Status */}
            <Group justify="space-between">
              <Text fw={600}>Status Pembayaran</Text>

              <Badge
                color={getPaymentStatusColor(order.bill.paymentStatus)}
                variant="light"
              >
                {getPaymentStatusLabel(order.bill.paymentStatus)}
              </Badge>
            </Group>

            <Divider />

            {/* Laundry */}
            <Group justify="space-between">
              <Box>
                <Text fw={500}>Laundry</Text>

                <Text size="sm" c="dimmed">
                  {weight} kg × {formatRupiah(pricePerKg)}
                </Text>
              </Box>

              <Text fw={500}>{formatRupiah(laundrySubtotal)}</Text>
            </Group>

            {/* Shipping */}
            <Group justify="space-between">
              <Text fw={500}>Biaya Pengiriman</Text>

              <Text fw={500}>{formatRupiah(shippingFee)}</Text>
            </Group>

            <Divider />

            {/* Total */}
            <Group justify="space-between">
              <Text fw={700} size="lg">
                Total Pembayaran
              </Text>

              <Text fw={700} size="lg">
                {formatRupiah(totalAmount)}
              </Text>
            </Group>

            {/* Pay Button */}
            {order.allowedActions.canPay &&
              order.bill.paymentStatus === "UNPAID" && (
                <Button
                  fullWidth
                  mt="sm"
                  onClick={handlePayment}
                  loading={createPayment.isPending}
                >
                  Bayar Sekarang
                </Button>
              )}
          </Stack>
        </Paper>

        {/* Bill Information */}
        <Paper withBorder radius="md" p={{ base: "md", sm: "lg" }}>
          <Stack gap="sm">
            <Title order={4}>Informasi Tagihan</Title>

            <Group justify="space-between">
              <Text c="dimmed">Order</Text>

              <Text>{order.orderCode}</Text>
            </Group>

            <Group justify="space-between">
              <Text c="dimmed">Berat</Text>

              <Text>{weight} kg</Text>
            </Group>

            <Group justify="space-between">
              <Text c="dimmed">Harga per kg</Text>

              <Text>{formatRupiah(pricePerKg)}</Text>
            </Group>

            <Group justify="space-between">
              <Text c="dimmed">Ongkos Pengiriman</Text>

              <Text>{formatRupiah(shippingFee)}</Text>
            </Group>

            <Group justify="space-between">
              <Text c="dimmed">Subtotal Laundry</Text>

              <Text>{formatRupiah(laundrySubtotal)}</Text>
            </Group>

            <Divider />

            <Group justify="space-between">
              <Text fw={700}>Total</Text>

              <Text fw={700}>{formatRupiah(totalAmount)}</Text>
            </Group>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}
