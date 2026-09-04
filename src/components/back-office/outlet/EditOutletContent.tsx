"use client";

import { Center, Loader, Stack, Text } from "@mantine/core";
import { useParams, useRouter } from "next/navigation";
import { notifications } from "@mantine/notifications";
import { PageHeader } from "@/components/ui/PageHeader";
import { OutletForm } from "./OutletForm";
import { useOutlet, useUpdateOutlet } from "@/hooks/outlet.hooks";
import type { UpdateOutletPayload } from "@/types/api/outlet.types";
import type { OutletFormValues } from "@/lib/validation/outlet.validation";

export function EditOutletContent() {
  const router = useRouter();

  const params = useParams<{
    outletId: string;
  }>();

  const outletId = params.outletId;

  const { data: outlet, isLoading, isError } = useOutlet(outletId);

  const updateOutlet = useUpdateOutlet();

  const handleSubmit = async (values: OutletFormValues) => {
    const payload: UpdateOutletPayload = {
      name: values.name,
      address: values.streetDetail,
      latitude: values.latitude,
      longitude: values.longitude,
    };

    await updateOutlet.mutateAsync(
      {
        outletId,
        payload,
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
  console.log("OUTLET FROM BE:", outlet);
  console.log("LAT:", outlet.latitude, typeof outlet.latitude);
  console.log("LNG:", outlet.longitude, typeof outlet.longitude);
  const initialValues: OutletFormValues = {
    name: outlet.name,

    provinceId: "",
    provinceName: "",

    cityId: "",
    cityName: "",

    districtId: "",
    districtName: "",

    subDistrictId: "",
    subDistrictName: "",

    zipCode: "",

    streetDetail: outlet.address,

    latitude: outlet.latitude !== null && outlet.latitude !== undefined ? Number(outlet.latitude) : undefined,

    longitude: outlet.longitude !== null && outlet.longitude !== undefined ? Number(outlet.longitude) : undefined,
  };

  return (
    <Stack gap="lg">
      <PageHeader title="Edit Outlet" description="Perbarui informasi outlet." />

      <OutletForm key={initialValues.cityId || 'edit'} mode="edit" initialValues={initialValues} onSubmit={handleSubmit} isSubmitting={updateOutlet.isPending} submitLabel="Simpan Perubahan" />
    </Stack>
  );
}
