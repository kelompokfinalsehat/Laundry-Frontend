"use client";

import { ActionIcon, Button, Group, Modal, NumberInput, Select, Stack, Text } from "@mantine/core";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import type { CreateOrderPayload, OrderListItem } from "@/types/api/order.types";
import { useCreateOrderHooks } from "@/hooks/reception.hooks";

type Props = {
  opened: boolean;
  order: OrderListItem | null;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (orderId: string, payload: CreateOrderPayload) => Promise<void>;
};

export function CreateOrderModal({ opened, order, isSubmitting, onClose, onSubmit }: Props) {
  const {
    handleClose,
    weightKg,
    setWeightKg,
    handleAddItem,
    isLaundryItemsLoading,
    items,
    getLaundryItemOptions,
    handleLaundryItemChange,
    handleQuantityChange,
    handleRemoveItem,
    handleSubmit,
  } = useCreateOrderHooks({ opened, order, isSubmitting, onClose, onSubmit });
  return (
    <Modal opened={opened} onClose={handleClose} title="Buat Order" centered>
      <Stack gap="md">
        {order && (
          <Stack gap={2}>
            <Text size="sm" fw={600}>
              {order.orderCode}
            </Text>

            <Text size="sm" c="var(--color-text-secondary)">
              {order.customer.name}
            </Text>
          </Stack>
        )}

        <NumberInput
          label="Berat Laundry"
          description="Masukkan total berat laundry dalam kilogram."
          placeholder="Contoh: 3"
          min={0.1}
          step={0.1}
          decimalScale={2}
          suffix=" kg"
          value={weightKg}
          onChange={setWeightKg}
          disabled={isSubmitting}
          required
        />

        <Stack gap="xs">
          <Group justify="space-between">
            <Text size="sm" fw={600}>
              Item Laundry
            </Text>

            <Button
              variant="subtle"
              size="xs"
              leftSection={<IconPlus size={16} />}
              onClick={handleAddItem}
              disabled={isLaundryItemsLoading || isSubmitting}
            >
              Tambah Item
            </Button>
          </Group>

          {items.map((item, index) => (
            <Group key={index} align="flex-end" wrap="nowrap">
              <Select
                label={index === 0 ? "Layanan" : undefined}
                placeholder="Pilih item laundry"
                data={getLaundryItemOptions(item.laundryItemId)}
                value={item.laundryItemId}
                onChange={(value) => handleLaundryItemChange(index, value)}
                searchable
                disabled={isLaundryItemsLoading || isSubmitting}
                style={{
                  flex: 1,
                }}
                required
              />

              <NumberInput
                label={index === 0 ? "Jumlah" : undefined}
                min={1}
                step={1}
                allowDecimal={false}
                value={item.quantity}
                onChange={(value) => handleQuantityChange(index, value)}
                disabled={isSubmitting}
                w={100}
                required
              />

              {items.length > 1 && (
                <ActionIcon variant="subtle" color="red" aria-label="Hapus item" onClick={() => handleRemoveItem(index)} disabled={isSubmitting}>
                  <IconTrash size={18} />
                </ActionIcon>
              )}
            </Group>
          ))}
        </Stack>

        <Group justify="flex-end">
          <Button variant="default" onClick={handleClose} disabled={isSubmitting}>
            Batal
          </Button>

          <Button onClick={handleSubmit} loading={isSubmitting}>
            Buat Order
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
