"use client";

import { Button, Group, Modal, Stack, TextInput } from "@mantine/core";
import { schemaResolver, useForm } from "@mantine/form";
import { useEffect } from "react";
import { laundryItemSchema, type LaundryItemFormValues } from "@/lib/validation/laundry-item.validation";

type Props = {
  opened: boolean;
  onClose: () => void;
  initialValues?: LaundryItemFormValues;
  onSubmit: (values: LaundryItemFormValues) => void;
  isSubmitting?: boolean;
  submitLabel?: string;
  title?: string;
};

export function LaundryItemModal({
  opened,
  onClose,
  initialValues = {
    name: "",
  },
  onSubmit,
  isSubmitting = false,
  submitLabel = "Tambah Item",
  title = "Tambah Item Laundry",
}: Props) {
  const form = useForm<LaundryItemFormValues>({
    initialValues,

    validate: schemaResolver(laundryItemSchema),
  });

  useEffect(() => {
    if (!opened) return;

    form.setValues(initialValues);
    form.resetDirty(initialValues);
  }, [opened, initialValues]);

  const handleClose = () => {
    if (isSubmitting) return;

    form.reset();
    onClose();
  };

  return (
    <Modal opened={opened} onClose={handleClose} title={title} centered closeOnClickOutside={!isSubmitting} closeOnEscape={!isSubmitting}>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack gap="md">
          <TextInput label="Nama Item Laundry" placeholder="Contoh: Pakaian, Sepatu, Karpet" withAsterisk {...form.getInputProps("name")} />

          <Group justify="flex-end" mt="sm">
            <Button variant="default" onClick={handleClose} disabled={isSubmitting}>
              Batal
            </Button>

            <Button type="submit" loading={isSubmitting}>
              {submitLabel}
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
