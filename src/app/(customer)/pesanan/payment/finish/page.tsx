"use client";

import { Button, Paper, Stack, Text, Title } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import Link from "next/link";

export default function PaymentFinishPage() {
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
        <IconCircleCheck
          size={64}
          stroke={1.5}
          color="var(--color-primary)"
        />

        <Title order={2} ta="center">
          Pembayaran Berhasil
        </Title>

        <Text
          ta="center"
          c="var(--color-text-secondary)"
        >
          Terima kasih. Pembayaran kamu sedang diproses.
          Status pembayaran akan diperbarui secara otomatis.
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
          Lihat Pesanan
        </Button>
      </Stack>
    </Paper>
  );
}