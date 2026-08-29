"use client";

import {
  Stack,
  TextInput,
  Textarea,
  Button,
  Alert,
  Select,
  Text,
  Group,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import {
  createAddressSchema,
  previewLocationSchema,
} from "@/lib/validation/address.validation";
import { ApiError } from "@/lib/api/axios";
import type {
  AddressFormProps,
  AddressFormSubmitValues,
  AddressFormValues,
} from "@/types/api/address.types";
import {
  useCities,
  useDistrict,
  usePreviewLocation,
  useProvinces,
  useSubDistrict,
} from "@/hooks/address.hooks";
import { useAuthStore } from "@/stores/useAuthStore";
import { useState } from "react";
import { LocationPicker } from "@/components/shared/Location/LocationPicker";

const DEFAULT_FALLBACK_POSITION = { lat: -6.2, lng: 106.816666 };

export function AddressForm({
  initialAddress,
  isPending,
  error,
  onSubmit,
  onCancel,
}: AddressFormProps) {
  const [locationError, setLocationError] = useState<string | null>(null);
  const previewLocationMutation = usePreviewLocation();

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

  const { data: provinces, isLoading: loadingProvinces } = useProvinces();
  const { data: cities, isLoading: loadingCities } = useCities(
    form.values.provinceId || null,
  );
  const { data: districts, isLoading: loadingDistricts } = useDistrict(
    form.values.cityId || null,
  );
  const { data: subDistricts, isLoading: loadingSubDistricts } = useSubDistrict(
    form.values.districtId || null,
  );

  const previewLocationCheck = previewLocationSchema.safeParse({
    provinceName: form.values.provinceName,
    cityName: form.values.cityName,
    districtName: form.values.districtName,
    subDistrictName: form.values.subDistrictName,
    zipCode: form.values.zipCode,
    streetDetail: form.values.streetDetail,
  });

  const isAddressDetailComplete = previewLocationCheck.success;

  const hasPosition =
    form.values.latitude !== undefined && form.values.longitude !== undefined;

  function handleCheckLocation() {
    setLocationError(null);

    const result = previewLocationSchema.safeParse({
      provinceName: form.values.provinceName,
      cityName: form.values.cityName,
      districtName: form.values.districtName,
      subDistrictName: form.values.subDistrictName,
      zipCode: form.values.zipCode,
      streetDetail: form.values.streetDetail,
    });

    if (!result.success) {
      setLocationError(
        result.error.issues[0]?.message ?? "Lengkapi alamat terlebih dahulu.",
      );
      return;
    }

    previewLocationMutation.mutate(result.data, {
      onSuccess: ({ latitude, longitude, found }) => {
        if (found && latitude !== undefined && longitude !== undefined) {
          form.setFieldValue("latitude", latitude);
          form.setFieldValue("longitude", longitude);
        } else {
          form.setFieldValue("latitude", DEFAULT_FALLBACK_POSITION.lat);
          form.setFieldValue("longitude", DEFAULT_FALLBACK_POSITION.lng);
          setLocationError(
            "Lokasi tidak ditemukan otomatis. Geser pin ke posisi yang benar di peta.",
          );
        }
      },
      onError: () => {
        form.setFieldValue("latitude", DEFAULT_FALLBACK_POSITION.lat);
        form.setFieldValue("longitude", DEFAULT_FALLBACK_POSITION.lng);
        setLocationError(
          "Gagal memuat perkiraan lokasi. Geser pin ke posisi yang benar di peta.",
        );
      },
    });
  }

  function handlePinChange(lat: number, lng: number) {
    form.setFieldValue("latitude", lat);
    form.setFieldValue("longitude", lng);
  }

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

        <Select
          label="Provinsi"
          placeholder="Pilih provinsi"
          required
          searchable
          data={
            provinces?.map((p) => ({ value: String(p.id), label: p.name })) ??
            []
          }
          disabled={loadingProvinces}
          value={form.values.provinceId}
          onChange={(value) => {
            const selected = provinces?.find((p) => String(p.id) === value);
            form.setFieldValue("provinceId", value ?? "");
            form.setFieldValue("provinceName", selected?.name ?? "");
            form.setFieldValue("cityId", "");
            form.setFieldValue("cityName", "");
            form.setFieldValue("districtId", "");
            form.setFieldValue("districtName", "");
            form.setFieldValue("subDistrictId", "");
            form.setFieldValue("subDistrictName", "");
            form.setFieldValue("latitude", undefined);
            form.setFieldValue("longitude", undefined);
          }}
        />
        <Select
          label="Kota/Kabupaten"
          placeholder="Pilih kota/kabupaten"
          required
          searchable
          data={
            cities?.map((c) => ({ value: String(c.id), label: c.name })) ?? []
          }
          disabled={!form.values.provinceId || loadingCities}
          value={form.values.cityId}
          onChange={(value) => {
            const selected = cities?.find((c) => String(c.id) === value);
            form.setFieldValue("cityId", value ?? "");
            form.setFieldValue("cityName", selected?.name ?? "");
            form.setFieldValue("districtId", "");
            form.setFieldValue("districtName", "");
            form.setFieldValue("subDistrictId", "");
            form.setFieldValue("subDistrictName", "");
            form.setFieldValue("latitude", undefined);
            form.setFieldValue("longitude", undefined);
          }}
        />

        <Select
          label="Kecamatan"
          placeholder="Pilih kecamatan"
          required
          searchable
          data={
            districts?.map((d) => ({ value: String(d.id), label: d.name })) ??
            []
          }
          disabled={!form.values.cityId || loadingDistricts}
          value={form.values.districtId}
          onChange={(value) => {
            const selected = districts?.find((d) => String(d.id) === value);
            form.setFieldValue("districtId", value ?? "");
            form.setFieldValue("districtName", selected?.name ?? "");
            form.setFieldValue("subDistrictId", "");
            form.setFieldValue("subDistrictName", "");
            form.setFieldValue("latitude", undefined);
            form.setFieldValue("longitude", undefined);
          }}
        />

        <Select
          label="Kelurahan"
          placeholder="Pilih kelurahan"
          required
          searchable
          data={
            subDistricts?.map((sd) => ({
              value: String(sd.id),
              label: sd.name,
            })) ?? []
          }
          disabled={!form.values.districtId || loadingSubDistricts}
          value={form.values.subDistrictId}
          onChange={(value) => {
            const selected = subDistricts?.find(
              (sd) => String(sd.id) === value,
            );

            form.setFieldValue("subDistrictId", value ?? "");
            form.setFieldValue("subDistrictName", selected?.name ?? "");
            form.setFieldValue("latitude", undefined);
            form.setFieldValue("longitude", undefined);
          }}
        />

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
            form.setFieldValue("latitude", undefined);
            form.setFieldValue("longitude", undefined);
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
            form.setFieldValue("latitude", undefined);
            form.setFieldValue("longitude", undefined);
          }}
        />

         <div>
          <Group justify="space-between" align="center" mb="xs">
            <Text size="sm" fw={500}>
              Titik Lokasi di Peta
            </Text>
            <Button
              variant="light"
              size="xs"
              disabled={!isAddressDetailComplete}
              loading={previewLocationMutation.isPending}
              onClick={handleCheckLocation}
            >
              {hasPosition ? "Cek Ulang Lokasi" : "Cek di Peta"}
            </Button>
          </Group>

          {!isAddressDetailComplete && (
            <Text size="xs" c="var(--color-text-secondary)">
              Lengkapi provinsi, kota, kecamatan, kode pos, dan detail alamat
              dulu untuk menampilkan peta.
            </Text>
          )}

          {locationError && (
            <Alert
              mt="xs"
              style={{
                backgroundColor: "var(--color-primary-light)",
                color: "var(--color-primary)",
              }}
            >
              {locationError}
            </Alert>
          )}

          {hasPosition && form.values.latitude !== undefined && form.values.longitude !== undefined && (
            <div style={{ marginTop: 8 }}>
              <LocationPicker
                initialLat={form.values.latitude}
                initialLng={form.values.longitude}
                onChange={handlePinChange}
              />
              <Text size="xs" c="var(--color-text-secondary)" mt={4}>
                Geser pin merah kalau posisinya belum tepat.
              </Text>
            </div>
          )}
        </div>

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
