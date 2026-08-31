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
  Anchor,
} from "@mantine/core";
import { useOrderDetail } from "@/hooks/order.hooks";
import { OrderTimeline } from "./orderTimeLine";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconChevronLeft, IconPhone } from "@tabler/icons-react";

export function OrderDetailView({ id }: { id: string }) {
  const { data: order, isLoading } = useOrderDetail(id);
  const router = useRouter();

  function handleBack() {
    router.replace("/pesanan");
  }

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
      <Paper withBorder p="md" radius="md">
        <Stack gap="xs">
          <Group justify="space-between" gap="xs">
            <Text style={{ color: "var(--color-text-primary)" }}>
              <Text component="span" fw={600}>
                Nomor Pesanan:
              </Text>{" "}
              <Text component="span" fw={700}>
                {order.orderCode}
              </Text>
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
           Alamat: {order.addressSnapshot}
          </Text>
          <Text size="sm" c="var(--color-text-secondary)">
          Telpon: {order.addressPhoneSnapshot}
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
