import { Badge, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import type { OrderDetail } from "@/types/api/order.types";

type Props = {
  order: OrderDetail;
};

const CUSTOMER_STATUS = {
  SCHEDULED: {
    label: "Terjadwal",
    color: "blue",
  },
  WAITING_DRIVER_PICKUP: {
    label: "Menunggu Driver",
    color: "yellow",
  },
  ON_THE_WAY_TO_OUTLET: {
    label: "Menuju Outlet",
    color: "cyan",
  },
  ARRIVED_AT_OUTLET: {
    label: "Tiba di Outlet",
    color: "indigo",
  },
  WASHING: {
    label: "Pencucian",
    color: "blue",
  },
  IRONING: {
    label: "Penyetrikaan",
    color: "violet",
  },
  PACKING: {
    label: "Pengemasan",
    color: "grape",
  },
  WAITING_PAYMENT: {
    label: "Menunggu Pembayaran",
    color: "orange",
  },
  READY_FOR_DELIVERY: {
    label: "Siap Diantar",
    color: "teal",
  },
  ON_THE_WAY_TO_CUSTOMER: {
    label: "Dalam Pengantaran",
    color: "cyan",
  },
  RECEIVED_BY_CUSTOMER: {
    label: "Diterima Pelanggan",
    color: "green",
  },
  OVERDUE: {
    label: "Jatuh Tempo",
    color: "red",
  },
  WAITING_CUSTOMER_CONFIRMATION: {
    label: "Menunggu Konfirmasi Pelanggan",
    color: "yellow",
  },
} as const;

function formatDateTime(value?: string | null) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function OrderInformationSection({ order }: Props) {
  const status = CUSTOMER_STATUS[order.customerStatus];

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
        <Text fw={600}>Informasi Pesanan</Text>

        <SimpleGrid
          cols={{
            base: 1,
            sm: 2,
            lg: 3,
          }}
          spacing="lg"
          verticalSpacing="md"
        >
          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Kode Pesanan
            </Text>

            <Text size="sm" fw={500}>
              {order.orderCode}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Outlet
            </Text>

            <Text size="sm" fw={500}>
              {order.outlet.name}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Status Pesanan
            </Text>

            <Badge w="fit-content" variant="light" color={status.color}>
              {status.label}
            </Badge>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Dibuat Pada
            </Text>

            <Text size="sm" fw={500}>
              {formatDateTime(order.createdAt)}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Terakhir Diperbarui
            </Text>

            <Text size="sm" fw={500}>
              {formatDateTime(order.updatedAt)}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Diterima Pada
            </Text>

            <Text size="sm" fw={500}>
              {formatDateTime(order.receivedAt)}
            </Text>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}
