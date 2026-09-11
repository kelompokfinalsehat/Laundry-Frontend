// app/pesanan/payment/finish/page.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Paper, Stack, Title, Text, Button, Center, Loader } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

export default function PaymentFinishPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const orderId = searchParams.get("order_id");
  const transactionStatus = searchParams.get("transaction_status");
const orderCode = orderId
  ?.replace(/^PAY-/, "")
  .replace(/-[^-]+-\d+$/, "");

  useEffect(() => {
    if (!orderId) {
      router.replace("/pesanan");
      return;
    }
    if (transactionStatus !== "settlement" && transactionStatus !== "capture") {
      router.replace(`/pesanan/${orderCode}`);
    }
  }, [orderId, transactionStatus, router]);

  const isSettlement = transactionStatus === "settlement" || transactionStatus === "capture";

  if (!isSettlement) {
    return (
      <Center mih="60vh">
        <Loader size="md" />
      </Center>
    );
  }

  return (
    <Paper
      maw={500}
      mx="auto"
      mt={{ base: 40, sm: 80 }}
      p={{ base: "lg", sm: "xl" }}
      withBorder
      radius="md"
    >
      <Stack align="center" gap="md">
        <IconCircleCheck size={64} stroke={1.5} color="var(--color-primary)" />

        <Title order={2} ta="center">
          Pembayaran Berhasil
        </Title>

        <Text ta="center" c="var(--color-text-secondary)">
          Terima kasih. Pembayaran kamu sedang diproses. Status pembayaran akan diperbarui secara
          otomatis.
        </Text>

        <Button
          component={Link}
          href={`/pesanan/${orderCode}`}
          fullWidth
          mt="sm"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Lihat Pesanan
        </Button>
      </Stack>
    </Paper>
  );
}