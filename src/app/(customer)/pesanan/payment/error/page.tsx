// app/pesanan/payment/error/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Center, Stack, ThemeIcon, Title, Text, Group, Button } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";
import { useExpirePayment } from "@/hooks/order/order.hooks";

export default function PaymentErrorPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const { mutate: expirePayment } = useExpirePayment();

  const hasExpired = useRef(false);

  useEffect(() => {
    if (orderId && !hasExpired.current) {
      hasExpired.current = true;
      expirePayment(orderId);
    }
  }, [orderId, expirePayment]);

const orderCode = orderId
  ?.replace(/^PAY-/, "")
  .replace(/-[^-]+-\d+$/, "");

  return (
    <Center mih="60vh" px="md">
      <Stack align="center" gap="xs" ta="center" maw={400}>
        <ThemeIcon color="red" variant="light" size={64} radius="xl">
          <IconAlertTriangle size={36} />
        </ThemeIcon>

        <Title order={3} c="red" mt="sm">
          Terjadi kesalahan saat memproses pembayaran
        </Title>

        {orderCode && (
          <Text size="sm" c="dimmed">
            Order ID: {orderCode}
          </Text>
        )}

        <Text size="sm" c="dimmed" mt={4}>
          Pembayaran belum berhasil diproses. Silakan coba lagi atau hubungi customer support jika
          masalah berlanjut.
        </Text>


        <Group mt="lg">
          <Button component={Link} href="/pesanan" variant="default">
            Lihat Pesanan Saya
          </Button>
          {orderId && (
            <Button component={Link} href={`/pesanan/${orderCode}`} color="dark">
              Coba Bayar Lagi
            </Button>
          )}
        </Group>
      </Stack>
    </Center>
  );
}