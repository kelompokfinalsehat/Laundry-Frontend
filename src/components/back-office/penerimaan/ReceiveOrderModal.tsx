"use client";

import {
  Button,
  Group,
  Modal,
  Stack,
  Text,
} from "@mantine/core";

import type {
  OrderListItem,
} from "@/types/api/order.types";

type Props = {
  opened: boolean;

  order: OrderListItem | null;

  isLoading: boolean;

  onClose: () => void;

  onConfirm: () => void;
};

export function ReceiveOrderModal({
  opened,
  order,
  isLoading,
  onClose,
  onConfirm,
}: Props) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Terima Pesanan"
      centered
      closeOnClickOutside={!isLoading}
      closeOnEscape={!isLoading}
    >
      <Stack gap="md">
        <Text size="sm">
          Apakah Anda yakin ingin menerima
          pesanan ini?
        </Text>

        {order && (
          <Stack gap={4}>
            <Text
              size="sm"
              fw={600}
            >
              {order.orderCode}
            </Text>

            <Text
              size="sm"
              c="var(--color-text-secondary)"
            >
              {order.customer.name}
            </Text>
          </Stack>
        )}

        <Text
          size="sm"
          c="var(--color-text-secondary)"
        >
          Setelah pesanan diterima,
          status pesanan akan diperbarui
          menjadi tiba di outlet.
        </Text>

        <Group
          justify="flex-end"
          mt="sm"
        >
          <Button
            variant="default"
            onClick={onClose}
            disabled={isLoading}
          >
            Batal
          </Button>

          <Button
            onClick={onConfirm}
            loading={isLoading}
          >
            Terima Pesanan
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}