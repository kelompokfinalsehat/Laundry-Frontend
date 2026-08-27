"use client";

import { useEffect, useState } from "react";
import { Button, Group, Modal, NumberInput, Stack } from "@mantine/core";
import type { LaundryPricing } from "@/types/api/pricing.types";

type Props = {
  opened: boolean;
  pricing: LaundryPricing | null;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (pricePerKg: number, pricing: LaundryPricing | null) => Promise<void>;
};

export function LaundryPricingModal({ opened, pricing, isSubmitting, onClose, onSubmit }: Props) {
  const [pricePerKg, setPricePerKg] = useState<number | string>("");

  useEffect(() => {
    if (!opened) {
      return;
    }

    setPricePerKg(pricing ? Number(pricing.pricePerKg) : "");
  }, [opened, pricing]);

  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    onClose();
  };

  const handleSubmit = async () => {
    if (typeof pricePerKg !== "number" || pricePerKg <= 0) {
      return;
    }

    await onSubmit(pricePerKg, pricing);
  };

  return (
    <Modal opened={opened} onClose={handleClose} title={pricing ? "Ubah Harga Laundry" : "Buat Harga Laundry"} centered>
      <Stack gap="md">
        <NumberInput
          label="Harga per Kilogram"
          description="Masukkan harga laundry untuk setiap kilogram."
          placeholder="Contoh: 7000"
          prefix="Rp "
          min={1}
          thousandSeparator="."
          decimalSeparator=","
          value={pricePerKg}
          onChange={setPricePerKg}
          disabled={isSubmitting}
          required
        />

        <Group justify="flex-end">
          <Button variant="default" onClick={handleClose} disabled={isSubmitting}>
            Batal
          </Button>

          <Button onClick={handleSubmit} loading={isSubmitting}>
            {pricing ? "Simpan Perubahan" : "Buat Harga"}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
