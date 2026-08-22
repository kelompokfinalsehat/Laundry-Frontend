"use client";

import { Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";

import { PageHeader } from "@/components/ui/PageHeader";

import { useCreateLaundryItem } from "@/hooks/laundry-item.hooks";

import type { CreateLaundryItemPayload } from "@/types/api/laundry-item.types";

import { LaundryItemForm } from "./LaundryItemForm";

export function CreateLaundryItemContent() {
  const router = useRouter();

  const createLaundryItem = useCreateLaundryItem();

  const handleSubmit = async (values: CreateLaundryItemPayload) => {
    await createLaundryItem.mutateAsync(values, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Item laundry berhasil ditambahkan.",
          color: "green",
        });

        router.push("/internal/super-admin/item-laundry");
      },

      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message:
            error instanceof Error
              ? error.message
              : "Gagal menambahkan item laundry.",
          color: "red",
        });
      },
    });
  };

  return (
    <Stack gap="lg">
      <PageHeader
        title="Tambah Item Laundry"
        description="Tambahkan jenis item laundry baru ke dalam sistem."
      />

      <LaundryItemForm
        onSubmit={handleSubmit}
        isSubmitting={createLaundryItem.isPending}
      />
    </Stack>
  );
}
