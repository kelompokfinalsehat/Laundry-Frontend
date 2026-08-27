"use client";

import { Badge, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import type { OrderDetail } from "@/types/api/order.types";

type Props = {
  bill: OrderDetail["bill"];
};

function formatCurrency(value: string) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value));
}

function BillInformationItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Stack gap={2}>
      <Text size="xs" c="var(--color-text-secondary)">
        {label}
      </Text>

      {typeof value === "string" ? (
        <Text size="sm" fw={500} c="var(--color-text-primary)">
          {value}
        </Text>
      ) : (
        value
      )}
    </Stack>
  );
}

export function OrderBillSection({ bill }: Props) {
  if (!bill) {
    return (
      <Paper withBorder p="lg" radius="md">
        <Stack gap="md">
          <Text fw={600}>Informasi Tagihan</Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Tagihan belum dibuat.
          </Text>
        </Stack>
      </Paper>
    );
  }

  const paymentStatus =
    bill.paymentStatus === "PAID"
      ? {
          label: "Sudah Dibayar",
          color: "green",
        }
      : {
          label: "Belum Dibayar",
          color: "red",
        };

  return (
    <Paper withBorder p="lg" radius="md">
      <Stack gap="md">
        <Text fw={600}>Informasi Tagihan</Text>

        <SimpleGrid
          cols={{
            base: 1,
            sm: 2,
            lg: 4,
          }}
          spacing="lg"
        >
          <BillInformationItem
            label="Status Pembayaran"
            value={
              <Badge variant="light" color={paymentStatus.color}>
                {paymentStatus.label}
              </Badge>
            }
          />

          <BillInformationItem label="Berat Laundry" value={`${bill.weightKg} kg`} />

          <BillInformationItem label="Total Harga Laundry" value={`${formatCurrency(bill.laundryCost)}`} />

          <BillInformationItem label="Tarif Shipping" value={`${formatCurrency(bill.shippingCost)}`} />

          <BillInformationItem label="Total Tagihan" value={formatCurrency(bill.totalAmount)} />
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}
