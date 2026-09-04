"use client";

import { OrderDetail } from "@/types/api/orders.types";
import { Badge, Box, Button, Divider, Group, Paper, Stack, Text, Title } from "@mantine/core";

type BillStatus = NonNullable<OrderDetail["bill"]>;

function formatRupiah(value: string | number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(value));
}

function getPaymentStatusLabel(status: BillStatus["paymentStatus"] | undefined) {
  switch (status) {
    case "PAID":
      return "Sudah Dibayar";

    case "UNPAID":
    default:
      return "Belum Dibayar";
  }
}

function getPaymentStatusColor(status: BillStatus["paymentStatus"] | undefined) {
  switch (status) {
    case "PAID":
      return "green";

    case "UNPAID":
    default:
      return "yellow";
  }
}

export function BillDetailContent({
  order,
  bill,
  onPay,
  isPaying,
}: {
  order: OrderDetail;
  bill: BillStatus;
  onPay: () => void;
  isPaying: boolean;
}) {
  const weight = Number(bill.weightKg ?? 0);
  const pricePerKg = Number(bill.pricePerKgSnapshot ?? 0);
  const shippingFee = Number(bill.shippingFeeSnapshot ?? 0);

  const laundrySubtotal = weight * pricePerKg;
  const totalAmount = laundrySubtotal + shippingFee;

  return (
    <Stack gap="lg">
      <Box>
        <Title order={2}>Detail Tagihan</Title>

        <Text c="dimmed" size="sm" mt={4}>
          Order: {order.orderCode}
        </Text>
      </Box>

      <Paper withBorder radius="md" p={{ base: "md", sm: "lg" }}>
        <Stack gap="md">
          <Group justify="space-between">
            <Text fw={600}>Status Pembayaran</Text>

            <Badge color={getPaymentStatusColor(bill.paymentStatus)} variant="light">
              {getPaymentStatusLabel(bill.paymentStatus)}
            </Badge>
          </Group>

          <Divider />

          <Group justify="space-between">
            <Box>
              <Text fw={500}>Laundry</Text>

              <Text size="sm" c="dimmed">
                {weight} kg × {formatRupiah(pricePerKg)}
              </Text>
            </Box>

            <Text fw={500}>{formatRupiah(laundrySubtotal)}</Text>
          </Group>

          <Group justify="space-between">
            <Text fw={500}>Biaya Pengiriman</Text>

            <Text fw={500}>{formatRupiah(shippingFee)}</Text>
          </Group>

          <Divider />

          <Group justify="space-between">
            <Text fw={700} size="lg">
              Total Pembayaran
            </Text>

            <Text fw={700} size="lg">
              {formatRupiah(totalAmount)}
            </Text>
          </Group>

          {order.allowedActions.canPay && bill.paymentStatus === "UNPAID" && (
            <Button fullWidth mt="sm" onClick={onPay} loading={isPaying}>
              Bayar Sekarang
            </Button>
          )}
        </Stack>
      </Paper>

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
  );
}
