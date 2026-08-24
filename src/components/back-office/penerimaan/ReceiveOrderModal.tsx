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
  const handleClose = () => {
    if (isLoading) {
      return;
    }

    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Terima Pesanan"
      centered
    >
      <Stack gap="lg">
        {order && (
          <Stack gap={4}>
            <Text size="sm">
              Pesanan berikut akan diterima di outlet:
            </Text>

            <Stack gap={2}>
              <Text
                size="sm"
                fw={600}
                c="var(--color-text-primary)"
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

            <Text
              size="sm"
              c="var(--color-text-secondary)"
            >
              Setelah dikonfirmasi, pesanan akan
              dipindahkan ke tahap siap dibuatkan order.
            </Text>
          </Stack>
        )}

        <Group justify="flex-end">
          <Button
            variant="default"
            onClick={handleClose}
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