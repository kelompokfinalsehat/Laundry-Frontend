"use client";

import { Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { OutletForm } from "./OutletForm";
import { useCreateOutlet } from "@/hooks/outlet.hooks";
import type { CreateOutletPayload } from "@/types/api/outlet.types";
import type { OutletFormValues } from "@/lib/validation/outlet.validation";

import { notifications } from "@mantine/notifications";

function buildAddress(values: OutletFormValues) {
  return [
    values.streetDetail,
    values.subDistrictName,
    values.districtName,
    values.cityName,
    values.provinceName,
    values.zipCode,
  ]
    .filter(Boolean)
    .join(", ");
}

export function CreateOutletContent() {
  const router = useRouter();
  const createOutlet = useCreateOutlet();

  const handleSubmit = async (
    values: OutletFormValues,
  ) => {
    const payload: CreateOutletPayload = {
      name: values.name,
      address: buildAddress(values),
      latitude: values.latitude!,
      longitude: values.longitude!,
    };

    await createOutlet.mutateAsync(payload, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Outlet berhasil dibuat.",
          color: "green",
        });

        router.push(
          "/internal/super-admin/outlet",
        );
      },

      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message:
            error instanceof Error
              ? error.message
              : "Gagal membuat outlet.",
          color: "red",
        });
      },
    });
  };

  return (
    <Stack gap="lg">
      <PageHeader
        title="Tambah Outlet"
        description="Tambahkan outlet baru ke dalam sistem."
      />

      <OutletForm
        key="create-outlet"
        onSubmit={handleSubmit}
        isSubmitting={
          createOutlet.isPending
        }
      />
    </Stack>
  );
}