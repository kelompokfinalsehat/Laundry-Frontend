"use client";

import { useRouter } from "next/navigation";
import { ActionIcon, Badge, Group, Stack, Text } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import type { OrderDetail } from "@/types/api/order.types";
import { CUSTOMER_STATUS } from "@/lib/constants/customer-status";

type Props = {
  order: OrderDetail;
};

export function OrderDetailHeader({ order }: Props) {
  const router = useRouter();

  const status = CUSTOMER_STATUS[order.customerStatus];

  return (
    <Group justify="space-between" align="center" wrap="wrap">
      <Group gap="md">
        <ActionIcon variant="default" onClick={() => router.back()} aria-label="Kembali">
          <IconArrowLeft size={18} />
        </ActionIcon>

        <Stack gap={2}>
          <Text fw={700} size="xl" c="var(--color-text-primary)">
            {order.orderCode}
          </Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Pesanan oleh {order.customer.name}
          </Text>
        </Stack>
      </Group>

      <Badge variant="light" color={status.color}>
        {status.label}
      </Badge>
    </Group>
  );
}
