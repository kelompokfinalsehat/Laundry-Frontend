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
import { useState } from "react";
import type {
  CreateOrderPayload,
  OrderListItem,
} from "@/types/api/order.types";
import { useCreateOrderHooks } from "@/hooks/reception.hooks";
import { CreateOrderConfirmationModal } from "./CreateOrderConfirmationModal";

type Props = {
  opened: boolean;
  order: OrderListItem | null;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (
    orderId: string,
    payload: CreateOrderPayload,
  ) => Promise<void>;
};

export function CreateOrderModal({
  opened,
  order,
  isSubmitting,
  onClose,
  onSubmit,
}: Props) {
  const [confirmationOpened, setConfirmationOpened] = useState(false);
  const [pendingPayload, setPendingPayload] =
    useState<CreateOrderPayload | null>(null);

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
    buildPayload,
  } = useCreateOrderHooks({
    opened,
    order,
    isSubmitting,
    onClose,
    onSubmit,
  });

  const handleSubmitClick = () => {
    const payload = buildPayload();

    if (!payload) {
      return;
    }

    setPendingPayload(payload);
    setConfirmationOpened(true);
  };

  const handleConfirmationClose = () => {
    if (isSubmitting) {
      return;
    }

    setConfirmationOpened(false);
    setPendingPayload(null);
  };

  const handleConfirmationConfirm = async () => {
    if (!order || !pendingPayload) {
      return;
    }

    await onSubmit(order.id, pendingPayload);

    setConfirmationOpened(false);
    setPendingPayload(null);

    handleClose();
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={handleClose}
        title="Buat Order"
        centered
      >
        <Stack gap="md">
          {order && (
            <Stack gap={2}>
              <Text size="sm" fw={600}>
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
                disabled={
                  isLaundryItemsLoading || isSubmitting
                }
              >
                Tambah Item
              </Button>
            </Group>

            {items.map((item, index) => (
              <Group
                key={index}
                align="flex-end"
                wrap="nowrap"
              >
                <Select
                  label={index === 0 ? "Layanan" : undefined}
                  placeholder="Pilih item laundry"
                  data={getLaundryItemOptions(
                    item.laundryItemId,
                  )}
                  value={item.laundryItemId}
                  onChange={(value) =>
                    handleLaundryItemChange(index, value)
                  }
                  searchable
                  disabled={
                    isLaundryItemsLoading || isSubmitting
                  }
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
                  onChange={(value) =>
                    handleQuantityChange(index, value)
                  }
                  disabled={isSubmitting}
                  w={100}
                  required
                />

                {items.length > 1 && (
                  <ActionIcon
                    variant="subtle"
                    color="red"
                    aria-label="Hapus item"
                    onClick={() =>
                      handleRemoveItem(index)
                    }
                    disabled={isSubmitting}
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

            <Button
              onClick={handleSubmitClick}
              loading={isSubmitting}
            >
              Buat Order
            </Button>
          </Group>
        </Stack>
      </Modal>

      {order && pendingPayload && (
        <CreateOrderConfirmationModal
          opened={confirmationOpened}
          orderCode={order.orderCode}
          customerName={order.customer.name}
          weightKg={pendingPayload.weightKg}
          items={pendingPayload.items.map((item) => {
            const laundryItem = getLaundryItemOptions(
              item.laundryItemId,
            ).find(
              (option) =>
                option.value === item.laundryItemId,
            );

            return {
              name: laundryItem?.label ?? "Item Laundry",
              quantity: item.quantity,
            };
          })}
          isSubmitting={isSubmitting}
          onClose={handleConfirmationClose}
          onConfirm={handleConfirmationConfirm}
        />
      )}
    </>
  );
}