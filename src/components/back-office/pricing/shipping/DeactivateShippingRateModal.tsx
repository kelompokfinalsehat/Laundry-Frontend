"use client";

import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import type { ShippingRate } from "@/types/api/pricing.types";

type Props = {
  opened: boolean;
  shippingRate: ShippingRate | null;
  isSubmitting: boolean;
  onClose: () => void;
  onConfirm: (shippingRate: ShippingRate) => void;
};

function formatDistance(value: number) {
  return `≤ ${value / 1000} km`;
}

function formatCurrency(value: string) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value));
}

export function DeactivateShippingRateModal({ opened, shippingRate, isSubmitting, onClose, onConfirm }: Props) {
  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    onClose();
  };

  const handleConfirm = () => {
    if (!shippingRate) {
      return;
    }

    onConfirm(shippingRate);
  };

  return (
    <Modal opened={opened} onClose={handleClose} title="Nonaktifkan Tarif" centered>
      <Stack gap="md">
        <Text size="sm">Apakah Anda yakin ingin menonaktifkan tarif shipping ini?</Text>

        {shippingRate && (
          <Stack
            gap={4}
            p="sm"
            style={{
              border: "1px solid var(--mantine-color-gray-3)",
              borderRadius: "var(--mantine-radius-sm)",
            }}
          >
            <Text size="sm" fw={600}>
              {formatDistance(shippingRate.maxDistanceMeters)}
            </Text>

            <Text size="sm" c="var(--color-text-secondary)">
              {formatCurrency(shippingRate.price)}
            </Text>
          </Stack>
        )}

        <Text size="xs" c="dimmed">
          Tarif yang sudah dinonaktifkan tidak dapat digunakan untuk perhitungan biaya pengiriman baru.
        </Text>

        <Group justify="flex-end">
          <Button variant="default" onClick={handleClose} disabled={isSubmitting}>
            Batal
          </Button>

          <Button color="red" onClick={handleConfirm} loading={isSubmitting}>
            Nonaktifkan
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
