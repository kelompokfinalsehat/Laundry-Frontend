import { Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import type { OrderDetail } from "@/types/api/order.types";

type Props = {
  order: OrderDetail;
};

function formatDateTime(value?: string | null) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatDistance(distanceMeters?: number | string | null) {
  if (distanceMeters == null) {
    return "-";
  }

  return `${(Number(distanceMeters) / 1000).toFixed(2)} km`;
}

export function OrderPickupSection({ order }: Props) {
  const coordinates = order.addressLatitude != null && order.addressLongitude != null ? `${order.addressLatitude}, ${order.addressLongitude}` : "-";

  return (
    <Paper
      withBorder
      radius="md"
      p="lg"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="md">
        <Text fw={600}>Informasi Pickup</Text>

        <SimpleGrid
          cols={{
            base: 1,
            sm: 2,
            lg: 4,
          }}
          spacing="lg"
        >
          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Jadwal Pickup
            </Text>

            <Text size="sm" fw={500}>
              {formatDateTime(order.pickupScheduledAt)}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Jarak ke Outlet
            </Text>

            <Text size="sm" fw={500}>
              {formatDistance(order.distanceMeters)}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Nomor Kontak Pickup
            </Text>

            <Text size="sm" fw={500}>
              {order.addressPhoneSnapshot ?? "-"}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Koordinat
            </Text>

            <Text size="sm" fw={500}>
              {coordinates}
            </Text>
          </Stack>
        </SimpleGrid>

        <Stack gap={2}>
          <Text size="xs" c="var(--color-text-secondary)">
            Alamat Pickup
          </Text>

          <Text size="sm" fw={500}>
            {order.addressSnapshot ?? "-"}
          </Text>
        </Stack>
      </Stack>
    </Paper>
  );
}
