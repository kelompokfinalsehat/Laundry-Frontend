"use client";

import {
  ActionIcon,
  Button,
  Group,
  Modal,
  NumberInput,
  Select,
  Stack,
  Text,
} from "@mantine/core";

import { IconPlus, IconTrash } from "@tabler/icons-react";

import { useEffect, useState } from "react";

import { useLaundryItems } from "@/hooks/laundry-item.hooks";

import type {
  CreateOrderPayload,
  OrderListItem,
} from "@/types/api/order.types";

type CreateOrderItemForm = {
  laundryItemId: string;
  quantity: number;
};

type Props = {
  opened: boolean;
  order: OrderListItem | null;
  isSubmitting: boolean;

  onClose: () => void;

  onSubmit: (orderId: string, payload: CreateOrderPayload) => Promise<void>;
};

export function CreateOrderModal({
  opened,
  order,
  isSubmitting,
  onClose,
  onSubmit,
}: Props) {
  const [weightKg, setWeightKg] = useState<number | string>("");

  const [items, setItems] = useState<CreateOrderItemForm[]>([
    {
      laundryItemId: "",
      quantity: 1,
    },
  ]);

  const { data: laundryItems, isLoading: isLaundryItemsLoading } =
    useLaundryItems({
      page: 1,
      pageSize: 100,
    });

  const INITIAL_ITEM: CreateOrderItemForm = {
    laundryItemId: "",
    quantity: 1,
  };

  const handleAddItem = () => {
    setItems((previous) => [
      ...previous,
      {
        laundryItemId: "",
        quantity: 1,
      },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    setItems((previous) =>
      previous.filter((_, itemIndex) => itemIndex !== index),
    );
  };

  const handleItemChange = (
    index: number,
    key: keyof CreateOrderItemForm,
    value: string | number | null,
  ) => {
    setItems((previous) =>
      previous.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        return {
          ...item,
          [key]: value,
        };
      }),
    );
  };

  const resetForm = () => {
    setWeightKg("");
    setItems([
      {
        ...INITIAL_ITEM,
      },
    ]);
  };

  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    onClose();
  };

  const handleSubmit = async () => {
    if (!order) {
      return;
    }

    if (typeof weightKg !== "number" || weightKg <= 0) {
      return;
    }

    const payload: CreateOrderPayload = {
      weightKg,
      items: items
        .filter((item) => item.laundryItemId !== "" && item.quantity > 0)
        .map((item) => ({
          laundryItemId: item.laundryItemId,
          quantity: item.quantity,
        })),
    };

    if (payload.items.length === 0) {
      return;
    }

    await onSubmit(order.id, payload);
  };

  const laundryItemOptions =
    laundryItems?.data.map((item) => ({
      value: item.id,
      label: item.name,
    })) ?? [];

  useEffect(() => {
    if (!opened) {
      resetForm();
    }
  }, [opened]);
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
            >
              Tambah Item
            </Button>
          </Group>

          {items.map((item, index) => (
            <Group key={index} align="flex-end" wrap="nowrap">
              <Select
                label={index === 0 ? "Layanan" : undefined}
                placeholder="Pilih item laundry"
                data={laundryItemOptions}
                value={item.laundryItemId}
                onChange={(value) =>
                  handleItemChange(index, "laundryItemId", value)
                }
                searchable
                disabled={isLaundryItemsLoading}
                style={{ flex: 1 }}
                required
              />

              <NumberInput
                label={index === 0 ? "Jumlah" : undefined}
                min={1}
                value={item.quantity}
                onChange={(value) =>
                  handleItemChange(
                    index,
                    "quantity",
                    typeof value === "number" ? value : 1,
                  )
                }
                w={100}
                required
              />

              {items.length > 1 && (
                <ActionIcon
                  variant="subtle"
                  color="red"
                  aria-label="Hapus item"
                  onClick={() => handleRemoveItem(index)}
                >
                  <IconTrash size={18} />
                </ActionIcon>
              )}
            </Group>
          ))}
        </Stack>

        <Group justify="flex-end">
          <Button
            variant="default"
            onClick={handleClose}
            disabled={isSubmitting}
          >
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
