import Link from "next/link";
import { Button, Paper, Stack, Text } from "@mantine/core";
import type { OrderDetail } from "@/types/api/orders.types";

export function OrderBillSummaryCard({ order }: { order: OrderDetail }) {
  if (!order.bill) return null;

  return (
    <Paper withBorder p="md" radius="md">
      <Stack gap="xs">
        <Text fw={600} style={{ color: "var(--color-text-primary)" }}>
          Tagihan
        </Text>

        {order.bill.weightKg ? (
          <>
            <Text size="sm" c="var(--color-text-secondary)">
              Berat: {order.bill.weightKg} kg
            </Text>
            <Text size="sm" c="var(--color-text-secondary)">
              Total: Rp{order.bill.totalAmount?.toLocaleString("id-ID")}
            </Text>
          </>
        ) : (
          <Text size="sm" c="var(--color-text-secondary)">
            Berat & total belum tersedia — menunggu outlet memproses laundry.
          </Text>
        )}

        {order.allowedActions.canPay && (
          <Button
            component={Link}
            href={`/pesanan/${order.id}/invoice`}
            mt="xs"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Bayar Sekarang
          </Button>
        )}

        {order.bill?.paymentStatus === "PAID" && (
          <Button
            component={Link}
            href={`/pesanan/${order.id}/invoice`}
            mt="xs"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Lihat Detail & Histori Pembayaran
          </Button>
        )}
      </Stack>
    </Paper>
  );
}
