"use client";

import { Center, Loader, Stack, Text } from "@mantine/core";

import { useParams, useRouter } from "next/navigation";

import { notifications } from "@mantine/notifications";

import { PageHeader } from "@/components/ui/PageHeader";

import {
  useLaundryItem,
  useUpdateLaundryItem,
} from "@/hooks/laundry-item.hooks";

import type { UpdateLaundryItemPayload } from "@/types/api/laundry-item.types";

import { LaundryItemForm } from "./LaundryItemForm";

export function EditLaundryItemContent() {
  const router = useRouter();

  const params = useParams<{
    laundryItemId: string;
  }>();

  const laundryItemId = params.laundryItemId;

  const {
    data: laundryItem,
    isLoading,
    isError,
  } = useLaundryItem(laundryItemId);

  const updateLaundryItem = useUpdateLaundryItem();

  const handleSubmit = async (values: UpdateLaundryItemPayload) => {
    await updateLaundryItem.mutateAsync(
      {
        laundryItemId,
        payload: values,
      },
      {
        onSuccess: () => {
          notifications.show({
            title: "Berhasil",
            message: "Item laundry berhasil diperbarui.",
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
                : "Gagal memperbarui item laundry.",
            color: "red",
          });
        },
      },
    );
  };

  if (isLoading) {
    return (
      <Center h={300}>
        <Loader />
      </Center>
    );
  }

  if (isError || !laundryItem) {
    return (
      <Center h={300}>
        <Text c="red">Gagal memuat data item laundry.</Text>
      </Center>
    );
  }

  return (
    <Stack gap="lg">
      <PageHeader
        title="Edit Item Laundry"
        description="Perbarui informasi item laundry."
      />

      <LaundryItemForm
        initialValues={{
          name: laundryItem.name,
        }}
        onSubmit={handleSubmit}
        isSubmitting={updateLaundryItem.isPending}
        submitLabel="Simpan Perubahan"
      />
    </Stack>
  );
}
