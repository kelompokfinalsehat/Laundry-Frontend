"use client";

import {
  ActionIcon,
  Badge,
  Group,
  Stack,
  Text,
} from "@mantine/core";

import {
  IconArrowLeft,
} from "@tabler/icons-react";

import { useRouter } from "next/navigation";

import type {
  OrderDetail,
} from "@/types/api/order.types";

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

export function OrderDetailHeader({
  order,
}: Props) {
  const router = useRouter();

  const status =
    CUSTOMER_STATUS[order.customerStatus];

  return (
    <Group
      justify="space-between"
      align="center"
      wrap="wrap"
    >
      <Group gap="md">
        <ActionIcon
          variant="default"
          onClick={() => router.back()}
          aria-label="Kembali"
        >
          <IconArrowLeft size={18} />
        </ActionIcon>

        <Stack gap={2}>
          <Text
            fw={700}
            size="xl"
            c="var(--color-text-primary)"
          >
            {order.orderCode}
          </Text>

          <Text
            size="sm"
            c="var(--color-text-secondary)"
          >
            Pesanan oleh {order.customer.name}
          </Text>
        </Stack>
      </Group>

      <Badge
        variant="light"
        color={status.color}
      >
        {status.label}
      </Badge>
    </Group>
  );
}