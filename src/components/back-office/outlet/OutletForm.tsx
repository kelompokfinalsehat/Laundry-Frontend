"use client";

import { Alert, Button, Group, Paper, Select, Stack, Text, TextInput, Textarea } from "@mantine/core";
import { type OutletFormValues } from "@/lib/validation/outlet.validation";
import { LocationPicker } from "@/components/shared/Location/LocationPicker";
import { useOutletFormHooks } from "@/hooks/outletForm.hooks";

type Props = {
  initialValues?: OutletFormValues;
  onSubmit: (values: OutletFormValues) => void;
  isSubmitting?: boolean;
  submitLabel?: string;
  mode?: "create" | "edit";
};

const EMPTY_VALUES: OutletFormValues = {
  name: "",
  provinceId: "",
  provinceName: "",
  cityId: "",
  cityName: "",
  districtId: "",
  districtName: "",
  subDistrictId: "",
  subDistrictName: "",
  zipCode: "",
  streetDetail: "",
  latitude: undefined,
  longitude: undefined,
};

export function OutletForm({ initialValues = EMPTY_VALUES, onSubmit, isSubmitting = false, submitLabel = "Simpan", mode = "create" }: Props) {
  const {
    form,
    isEditingLocation,
    hasPosition,
    setIsEditingLocation,
    provinces,
    handleProvinceChange,
    isLoadingProvinces,
    cities,
    handleCityChange,
    isLoadingCities,
    districts,
    handleDistrictChange,
    isLoadingDistricts,
    subDistricts,
    handleSubDistrictChange,
    isLoadingSubDistricts,
    previewLocation,
    handlePreviewLocation,
    handleCancelEditLocation,
    locationError,
    handleLocationChange,
    router,
  } = useOutletFormHooks({ initialValues, mode });
  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack gap="lg">
        <Paper
          withBorder
          radius="md"
          p="md"
          style={{
            backgroundColor: "var(--color-surface)",
          }}
        >
          <Stack gap="md">
            <TextInput label="Nama Outlet" placeholder="Masukkan nama outlet" required {...form.getInputProps("name")} />

            <Stack gap="sm">
              <Text fw={600}>Alamat Outlet</Text>

              {mode === "edit" && !isEditingLocation ? (
                <>
                  <Textarea label="Alamat" value={form.values.streetDetail} readOnly autosize minRows={4} />

                  {hasPosition && (
                    <Stack gap="xs">
                      <LocationPicker initialLat={form.values.latitude!} initialLng={form.values.longitude!} onChange={handleLocationChange} />

                      <Text size="sm" c="var(--color-text-secondary)">
                        Koordinat: {form.values.latitude!.toFixed(6)}, {form.values.longitude!.toFixed(6)}
                      </Text>
                    </Stack>
                  )}

                  <Group justify="flex-end">
                    <Button type="button" variant="light" onClick={() => setIsEditingLocation(true)}>
                      Ubah Alamat & Lokasi
                    </Button>
                  </Group>
                </>
              ) : (
                <>
                  <Select
                    label="Provinsi"
                    placeholder="Pilih provinsi"
                    searchable
                    clearable
                    required
                    data={
                      provinces?.map((item) => ({
                        value: String(item.id),
                        label: item.name,
                      })) ?? []
                    }
                    value={form.values.provinceId || null}
                    onChange={handleProvinceChange}
                    disabled={isLoadingProvinces}
                    error={form.errors.provinceId}
                  />

                  <Select
                    label="Kota/Kabupaten"
                    placeholder="Pilih kota/kabupaten"
                    searchable
                    clearable
                    required
                    data={
                      cities?.map((item) => ({
                        value: String(item.id),
                        label: item.name,
                      })) ?? []
                    }
                    value={form.values.cityId || null}
                    onChange={handleCityChange}
                    disabled={!form.values.provinceId || isLoadingCities}
                    error={form.errors.cityId}
                  />

                  <Select
                    label="Kecamatan"
                    placeholder="Pilih kecamatan"
                    searchable
                    clearable
                    required
                    data={
                      districts?.map((item) => ({
                        value: String(item.id),
                        label: item.name,
                      })) ?? []
                    }
                    value={form.values.districtId || null}
                    onChange={handleDistrictChange}
                    disabled={!form.values.cityId || isLoadingDistricts}
                    error={form.errors.districtId}
                  />

                  <Select
                    label="Kelurahan"
                    placeholder="Pilih kelurahan"
                    searchable
                    clearable
                    required
                    data={
                      subDistricts?.map((item) => ({
                        value: String(item.id),
                        label: item.name,
                      })) ?? []
                    }
                    value={form.values.subDistrictId || null}
                    onChange={handleSubDistrictChange}
                    disabled={!form.values.districtId || isLoadingSubDistricts}
                    error={form.errors.subDistrictId}
                  />

                  <TextInput label="Kode Pos" placeholder="Kode pos" {...form.getInputProps("zipCode")} />

                  <Textarea
                    label="Detail Alamat"
                    placeholder="Nama jalan, nomor rumah, blok, dan detail lainnya"
                    required
                    autosize
                    minRows={4}
                    {...form.getInputProps("streetDetail")}
                  />

                  <Group justify="flex-end">
                    <Button type="button" variant="light" loading={previewLocation.isPending} disabled={isSubmitting} onClick={handlePreviewLocation}>
                      Cek Lokasi
                    </Button>

                    {mode === "edit" && (
                      <Button type="button" variant="subtle" disabled={previewLocation.isPending} onClick={handleCancelEditLocation}>
                        Batal Ubah
                      </Button>
                    )}
                  </Group>

                  {locationError && <Alert color="red">{locationError}</Alert>}

                  {hasPosition && (
                    <Stack gap="xs">
                      <LocationPicker initialLat={form.values.latitude!} initialLng={form.values.longitude!} onChange={handleLocationChange} />

                      <Text size="sm" c="var(--color-text-secondary)">
                        Koordinat: {form.values.latitude!.toFixed(6)}, {form.values.longitude!.toFixed(6)}
                      </Text>
                    </Stack>
                  )}
                </>
              )}
            </Stack>
          </Stack>
        </Paper>

        <Group justify="flex-end">
          <Button type="button" variant="default" disabled={isSubmitting} onClick={() => router.back()}>
            Batal
          </Button>

          <Button type="submit" loading={isSubmitting}>
            {submitLabel}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
