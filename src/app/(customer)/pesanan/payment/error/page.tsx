"use client";

import { Button, Paper, Stack, Text, Title } from "@mantine/core";
import { IconCircleX } from "@tabler/icons-react";
import Link from "next/link";

export default function PaymentErrorPage() {
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
        <IconCircleX
          size={64}
          stroke={1.5}
          color="var(--color-error)"
        />

        <Title order={2} ta="center">
          Pembayaran Gagal
        </Title>

        <Text
          ta="center"
          c="var(--color-text-secondary)"
        >
          Pembayaran tidak dapat diproses. Silakan coba
          kembali atau pilih metode pembayaran lainnya.
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