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
import { useConfirmOrder, useOrderDetail } from "@/hooks/order/order.hooks";
import { OrderTimeline } from "./orderTimeLine";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconChevronLeft } from "@tabler/icons-react";
import { ApiError } from "@/lib/api/axios";
import { notifications } from "@mantine/notifications";
import { useQueryClient } from "@tanstack/react-query";

export function OrderDetailView({ id }: { id: string }) {
  const { data: order, isLoading } = useOrderDetail(id);
  const router = useRouter();
  const { mutate: confirmOrder, isPending } = useConfirmOrder();
  const queryClient = useQueryClient();

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

  const handleConfirm = () => {
    confirmOrder(id, {
      onSuccess: (result) => {
        notifications.show({
          title: "Order berhasil dikonfirmasi",
          message: result.message,
          color: "green",
        });
        queryClient.invalidateQueries({
          queryKey: ["orders", id],
        });
      },

      onError: (error) => {
        let message = "Gagal mengonfirmasi order.";

        if (error instanceof ApiError) {
          switch (error.code) {
            case "ORDER_FORBIDDEN":
              message = "Order tidak ditemukan atau bukan milik kamu.";
              break;

            case "CONFLICT":
              message = "Order belum siap dikonfirmasi.";
              break;

            case "COMPLAINT_NOT_ALLOWED":
              message = "Tidak bisa konfirmasi selagi komplain masih diproses.";
              break;

            default:
              message = error.message;
          }
        }

        notifications.show({
          title: "Konfirmasi order gagal",
          message,
          color: "red",
        });
      },
    });
  };

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
        <OrderTimeline timeline={order.timeline} complaint={order.complaint} />
      </div>

      {order.complaint && (
        <Anchor component={Link} href={`/pesanan/${order.id}/komplain`} fw={600}>
          Lihat status komplain kamu →
        </Anchor>
      )}

      {order.allowedActions.canConfirmReceived && order.complaint?.status !== "OPEN"  && (
        <Button
          onClick={handleConfirm}
          disabled={isPending}
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          {isPending ? "Mengonfirmasi..." : "Konfirmasi Diterima"}
        </Button>
      )}

      {order.allowedActions.canFileComplaint && !order.complaint && (
        <Button
          component={Link}
          href={`/pesanan/${order.id}/komplain`}
          variant="outline"
        >
          Ajukan Komplain
        </Button>
      )}
    </Stack>
  );
}
