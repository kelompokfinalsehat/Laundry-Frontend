"use client";

import { Title, Text, Stack, Container, Anchor, Group } from "@mantine/core";
import { OrderList } from "@/components/customer/order/orderList";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { IconChevronLeft } from "@tabler/icons-react";

export default function OrdersPage({
  fallbackHref = "/",
}: {
  fallbackHref?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  function handleBack() {
    if (from) {
      router.replace(from);
      return;
    }

    router.back();
  }
  return (
    <Stack gap="xl" mx="auto" py={{ base: 16, sm: 32 }}>
      <Anchor
        component="button"
        type="button"
        onClick={handleBack}
        fw={600}
        c="var(--color-text-primary)"
      >
        <Group gap={2}>
          <IconChevronLeft size={16} stroke={2} />
          Kembali
        </Group>
      </Anchor>
      <div>
        <Title order={3} style={{ color: "var(--color-text-primary)" }}>
          Pesanan Saya
        </Title>
        <Text size="sm" c="var(--color-text-secondary)">
          Riwayat dan status pesanan laundry kamu.
        </Text>
      </div>

      <OrderList />
    </Stack>
  );
}
