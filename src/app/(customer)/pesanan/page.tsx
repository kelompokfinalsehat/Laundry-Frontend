import {Title, Text, Stack, Container } from "@mantine/core";
import { OrderList } from "@/components/customer/order/orderList";

export default function OrdersPage() {
  return (
      <Stack gap="xl" mx="auto" py={{ base: 16, sm: 32 }}>
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

