"use client";

import {
  Button,
  Group,
  Modal,
  NumberInput,
  Stack,
} from "@mantine/core";

import { useEffect, useState } from "react";

import type {
  CreateShippingRatePayload,
  ShippingRate,
  UpdateShippingRatePayload,
} from "@/types/api/pricing.types";

type Props = {
  opened: boolean;

  shippingRate: ShippingRate | null;

  isSubmitting: boolean;

  onClose: () => void;

  onCreate: (
    payload: CreateShippingRatePayload,
  ) => Promise<void>;

  onUpdate: (
    shippingRateId: string,
    payload: UpdateShippingRatePayload,
  ) => Promise<void>;
};

export function ShippingRateModal({
  opened,
  shippingRate,
  isSubmitting,
  onClose,
  onCreate,
  onUpdate,
}: Props) {
  const [maxDistanceMeters, setMaxDistanceMeters] =
    useState<number | string>("");

  const [price, setPrice] =
    useState<number | string>("");

  const isEditMode = shippingRate !== null;

  useEffect(() => {
    if (!opened) {
      return;
    }

    if (shippingRate) {
      setMaxDistanceMeters(
        shippingRate.maxDistanceMeters,
      );

      setPrice(
        Number(shippingRate.price),
      );

      return;
    }

    setMaxDistanceMeters("");
    setPrice("");
  }, [opened, shippingRate]);

  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    onClose();
  };

  const handleSubmit = async () => {
    if (
      typeof maxDistanceMeters !== "number" ||
      maxDistanceMeters <= 0
    ) {
      return;
    }

    if (
      typeof price !== "number" ||
      price <= 0
    ) {
      return;
    }

    if (isEditMode) {
      await onUpdate(
        shippingRate.id,
        {
          maxDistanceMeters,
          price,
        },
      );

      return;
    }

    await onCreate({
      maxDistanceMeters,
      price,
    });
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title={
        isEditMode
          ? "Ubah Tarif Pengiriman"
          : "Tambah Tarif Pengiriman"
      }
      centered
    >
      <Stack gap="md">
        <NumberInput
          label="Batas Jarak"
          description="Masukkan batas maksimal jarak dalam meter."
          placeholder="Contoh: 5000"
          suffix=" m"
          min={1}
          step={100}
          value={maxDistanceMeters}
          onChange={setMaxDistanceMeters}
          disabled={isSubmitting}
          required
        />

        <NumberInput
          label="Tarif"
          description="Masukkan tarif pengiriman dalam Rupiah."
          placeholder="Contoh: 10000"
          prefix="Rp "
          min={1}
          step={1000}
          thousandSeparator="."
          decimalSeparator=","
          value={price}
          onChange={setPrice}
          disabled={isSubmitting}
          required
        />

        <Group justify="flex-end">
          <Button
            variant="default"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Batal
          </Button>

          <Button
            onClick={handleSubmit}
            loading={isSubmitting}
          >
            {isEditMode
              ? "Simpan Perubahan"
              : "Tambah Tarif"}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}