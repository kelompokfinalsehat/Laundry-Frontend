"use client";

import { Stack, TextInput, Textarea, Button, Alert } from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import { createAddressSchema } from "@/lib/validation/address.validation";
import { ApiError } from "@/lib/api/axios";
import type {
  AddressFormProps,
  AddressFormSubmitValues,
  AddressFormValues,
} from "@/types/api/address.types";
import { useAuthStore } from "@/stores/useAuthStore";
import { useAddressLocationPreview } from "@/hooks/addressCustomer/Useaddresslocationpreview ";
import { AddressRegionFields } from "./AddressRegionFields";
import { AddressMapSection } from "./AddressMapSection";

export function AddressForm({
  initialAddress,
  isPending,
  error,
  onSubmit,
  onCancel,
}: AddressFormProps) {
  const user = useAuthStore((state) => state.user);
  const form = useForm<AddressFormValues>({
    initialValues: {
      label: initialAddress?.label ?? "",
      provinceId: initialAddress?.provinceId ?? "",
      provinceName: initialAddress?.provinceName ?? "",
      cityId: initialAddress?.cityId ?? "",
      cityName: initialAddress?.cityName ?? "",
      districtId: initialAddress?.districtId ?? "",
      districtName: initialAddress?.districtName ?? "",
      subDistrictId: initialAddress?.subDistrictId ?? "",
      subDistrictName: initialAddress?.subDistrictName ?? "",
      streetDetail: initialAddress?.streetDetail ?? "",
      zipCode: initialAddress?.zipCode ?? "",
      phone: initialAddress?.phone ?? user?.phone ?? "",
      longitude: undefined,
      latitude: undefined,
    },
    validate: schemaResolver(createAddressSchema),
  });

  const {
    locationError,
    isAddressDetailComplete,
    hasPosition,
    isCheckingLocation,
    resetPin,
    handleCheckLocation,
    handlePinChange,
  } = useAddressLocationPreview(form);

  function handleFormSubmit(values: AddressFormValues) {
    if (values.latitude === undefined || values.longitude === undefined) {
      return;
    }

    const submitValues: AddressFormSubmitValues = {
      ...values,
      latitude: values.latitude,
      longitude: values.longitude,
    };

    onSubmit(submitValues);
  }

  const errorMessage =
    error instanceof ApiError
      ? error.code === "GEOCODING_FAILED"
        ? "Alamat tidak ditemukan. Coba tulis detail jalan lebih lengkap."
        : error.message
      : null;

  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <Stack gap="md">
        {errorMessage && (
          <Alert
            color="red"
            style={{
              backgroundColor: "var(--color-error-light)",
              color: "var(--color-error)",
            }}
          >
            {errorMessage}
          </Alert>
        )}

        <TextInput
          label="Label"
          placeholder="Rumah, Kos, Kantor, dll (opsional)"
          {...form.getInputProps("label")}
        />

        <AddressRegionFields form={form} />

        <TextInput
          label="Kode Pos"
          description="Masukkan kode pos sesuai alamat."
          placeholder="Masukkan kode pos"
          maxLength={5}
          inputMode="numeric"
          required
          {...form.getInputProps("zipCode")}
          onChange={(e) => {
            form.setFieldValue(
              "zipCode",
              e.currentTarget.value.replace(/\D/g, ""),
            );
            resetPin();
          }}
        />

        <Textarea
          label="Detail Alamat"
          description="Nama jalan, nomor rumah."
          placeholder="Contoh: nama jalan, nomor rumah"
          minRows={3}
          required
          {...form.getInputProps("streetDetail")}
          onChange={(e) => {
            form.setFieldValue("streetDetail", e.currentTarget.value);
            resetPin();
          }}
        />

        <AddressMapSection
          isAddressDetailComplete={isAddressDetailComplete}
          hasPosition={hasPosition}
          latitude={form.values.latitude}
          longitude={form.values.longitude}
          locationError={locationError}
          isCheckingLocation={isCheckingLocation}
          onCheckLocation={handleCheckLocation}
          onPinChange={handlePinChange}
        />

        <Stack gap="xs">
          <Button
            type="submit"
            loading={isPending}
            disabled={!hasPosition}
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            {initialAddress ? "Simpan Perubahan" : "Tambah Alamat"}
          </Button>
          <Button variant="subtle" onClick={onCancel} disabled={isPending}>
            Batal
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
