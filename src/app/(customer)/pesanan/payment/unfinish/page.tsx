"use client";

import { Button, Paper, Stack, Text, Title } from "@mantine/core";
import { IconClock } from "@tabler/icons-react";
import Link from "next/link";

export default function PaymentUnfinishPage() {
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
        <IconClock
          size={64}
          stroke={1.5}
          color="var(--color-accent)"
        />

        <Title order={2} ta="center">
          Pembayaran Belum Selesai
        </Title>

        <Text
          ta="center"
          c="var(--color-text-secondary)"
        >
          Pembayaran kamu belum selesai. Kamu dapat
          melanjutkan pembayaran dari halaman tagihan.
        </Text>

        <Button
          component={Link}
          href="/pesanan"
          fullWidth
          mt="sm"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Kembali ke Pesanan
        </Button>
      </Stack>
    </Paper>
  );
}