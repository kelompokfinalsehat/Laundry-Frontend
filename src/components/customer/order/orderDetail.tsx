"use client";

import {
  Stack,
  Text,
  Paper,
  Divider,
  Badge,
  Button,
  Group,
  Loader,
} from "@mantine/core";
import { useOrderDetail } from "@/hooks/order.hooks";
import { OrderTimeline } from "./orderTimeLine";

export function OrderDetailView({ id }: { id: string }) {
  console.log("ORDER DETAIL ID:", id);
  const { data: order, isLoading } = useOrderDetail(id);

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
        Order tidak ditemukan.
      </Text>
    );
  }

  return (
    <Stack gap="xl">
      <Paper withBorder p="md" radius="md">
        <Stack gap="xs">
          <Group justify="space-between">
            <Text fw={700} style={{ color: "var(--color-text-primary)" }}>
              {order.orderCode}
            </Text>
            <Badge
              style={{
                backgroundColor: "var(--color-primary-light)",
                color: "var(--color-primary)",
              }}
            >
              {order.customerStatusLabel}
            </Badge>
          </Group>
          <Divider />
          <Text size="sm" c="var(--color-text-secondary)">
            {order.addressSnapshot}
          </Text>
          <Text size="sm" c="var(--color-text-secondary)">
            {order.addressPhoneSnapshot}
          </Text>
          <Text size="sm" c="var(--color-text-secondary)">
            Jadwal: {new Date(order.pickupScheduledAt).toLocaleString("id-ID")}
          </Text>
        </Stack>
      </Paper>

      {order.bill && (
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
                Berat & total belum tersedia — menunggu outlet memproses
                laundry.
              </Text>
            )}
            {order.allowedActions.canPay && (
              <Button
                mt="xs"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-on-accent)",
                }}
              >
                Bayar Sekarang
              </Button>
            )}
          </Stack>
        </Paper>
      )}

      <div>
        <Text fw={600} mb="md" style={{ color: "var(--color-text-primary)" }}>
          Tracking
        </Text>
        <OrderTimeline timeline={order.timeline} />
      </div>

      {order.allowedActions.canConfirmReceived && (
        <Button
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Konfirmasi Diterima
        </Button>
      )}

      {order.allowedActions.canFileComplaint && (
        <Button variant="outline">Ajukan Komplain</Button>
      )}
    </Stack>
  );
}
