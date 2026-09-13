"use client";

import { Button, Group, Modal, Stack, Text } from "@mantine/core";

type ConfirmationItem = {
  name: string;
  quantity: number;
};

type Props = {
  opened: boolean;
  orderCode: string;
  customerName: string;
  weightKg: number;
  items: ConfirmationItem[];
  isSubmitting: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export function CreateOrderConfirmationModal({
  opened,
  orderCode,
  customerName,
  weightKg,
  items,
  isSubmitting,
  onClose,
  onConfirm,
}: Props) {
  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Konfirmasi Buat Order"
      centered
    >
      <Stack gap="md">
        <Text size="sm" c="var(--color-text-secondary)">
          Pastikan data order sudah benar sebelum order dibuat.
        </Text>

        <Stack gap={4}>
          <Text size="sm" fw={600}>
            {orderCode}
          </Text>

          <Text size="sm" c="var(--color-text-secondary)">
            {customerName}
          </Text>
        </Stack>

        <Stack gap="xs">
          <Group justify="space-between">
            <Text size="sm" c="var(--color-text-secondary)">
              Berat Laundry
            </Text>

            <Text size="sm" fw={600}>
              {weightKg} kg
            </Text>
          </Group>

          <Text size="sm" fw={600}>
            Item Laundry
          </Text>

          <Stack gap={4}>
            {items.map((item, index) => (
              <Group
                key={`${item.name}-${index}`}
                justify="space-between"
              >
                <Text size="sm">{item.name}</Text>

                <Text size="sm" c="var(--color-text-secondary)">
                  {item.quantity} item
                </Text>
              </Group>
            ))}
          </Stack>
        </Stack>

        <Group justify="flex-end">
          <Button
            variant="default"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Batal
          </Button>

          <Button
            onClick={onConfirm}
            loading={isSubmitting}
          >
            Konfirmasi Buat Order
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}