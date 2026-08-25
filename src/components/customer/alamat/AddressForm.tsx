"use client";

import {
  Stack,
  TextInput,
  Textarea,
  Button,
  Alert,
  Select,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import { createAddressSchema } from "@/lib/validation/address.validation";
import { ApiError } from "@/lib/api/axios";
import type {
  AddressFormProps,
  AddressFormValues,
} from "@/types/api/address.types";
import {
  useCities,
  useDistrict,
  useProvinces,
  useSubDistrict,
} from "@/hooks/address.hooks";
import { useAuthStore } from "@/stores/useAuthStore";

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
      subDistrictName: initialAddress?.districtName ?? "",
      streetDetail: initialAddress?.streetDetail ?? "",
      zipCode: initialAddress?.zipCode ?? "",
      phone: initialAddress?.phone ?? user?.phone ?? "",
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

  const errorMessage =
    error instanceof ApiError
      ? error.code === "GEOCODING_FAILED"
        ? "Alamat tidak ditemukan. Coba tulis detail jalan lebih lengkap."
        : error.message
      : null;

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
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
          }}
        />

        <Textarea
          label="Detail Alamat"
          description="Nama jalan, nomor rumah."
          placeholder="Contoh: nama jalan, nomor rumah"
          minRows={3}
          required
          {...form.getInputProps("streetDetail")}
        />

        <TextInput
          label="Kode Pos"
          description="Masukkan kode pos sesuai alamat."
          placeholder="Masukkan kode pos"
          maxLength={5}
          inputMode="numeric"
          required
          {...form.getInputProps("zipCode")}
        />

        <TextInput
          label="Nomor Telepon"
          placeholder="08xxxxxxxxxx"
          required
          {...form.getInputProps("phone")}
        />

        <Stack gap="xs">
          <Button
            type="submit"
            loading={isPending}
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
