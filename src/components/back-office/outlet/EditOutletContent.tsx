"use client";

import { Center, Loader, Stack, Text } from "@mantine/core";
import { useParams, useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { OutletForm } from "./OutletForm";
import { useOutlet, useUpdateOutlet } from "@/hooks/outlet.hooks";
import { CreateOutletPayload } from "@/types/api/outlet.types";
import { notifications } from "@mantine/notifications";

export function EditOutletContent() {
  const router = useRouter();
  const params = useParams<{ outletId: string }>();
  const outletId = params.outletId;
  const { data: outlet, isLoading, isError } = useOutlet(outletId);
  const updateOutlet = useUpdateOutlet();

  const handleSubmit = async (values: CreateOutletPayload) => {
    await updateOutlet.mutateAsync(
      {
        outletId,
        payload: values,
      },
      {
        onSuccess: () => {
          notifications.show({
            title: "Berhasil",
            message: "Outlet berhasil diperbarui.",
            color: "green",
          });

          router.push("/internal/super-admin/outlet");
        },
        onError: (error) => {
          notifications.show({
            title: "Gagal",
            message: error instanceof Error ? error.message : "Gagal memperbarui outlet.",
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

  if (isError || !outlet) {
    return (
      <Center h={300}>
        <Text c="red">Gagal memuat data outlet.</Text>
      </Center>
    );
  }

  return (
    <Stack gap="lg">
      <PageHeader title="Edit Outlet" description="Perbarui informasi outlet." />

      <OutletForm
        initialValues={{
          name: outlet.name,
          address: outlet.address,
        }}
        onSubmit={handleSubmit}
        isSubmitting={updateOutlet.isPending}
        submitLabel="Simpan Perubahan"
      />
    </Stack>
  );
}
