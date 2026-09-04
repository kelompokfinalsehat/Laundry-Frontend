import { Badge, Divider, Group, Paper, Stack, Text } from "@mantine/core";
import type { OrderDetail } from "@/types/api/orders.types";

export function OrderInfoCard({ order }: { order: OrderDetail }) {
  return (
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
  );
}
