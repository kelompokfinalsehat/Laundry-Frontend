import { Select } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import type { AddressFormValues } from "@/types/api/address.types";
import { useAddressRegionCascade } from "@/hooks/addressCustomer/Useaddressregioncascade";

export function AddressRegionFields({
  form,
}: {
  form: UseFormReturnType<AddressFormValues>;
}) {
  const {
    provinces,
    cities,
    districts,
    subDistricts,
    loadingProvinces,
    loadingCities,
    loadingDistricts,
    loadingSubDistricts,
    handleProvinceChange,
    handleCityChange,
    handleDistrictChange,
    handleSubDistrictChange,
  } = useAddressRegionCascade(form);

  return (
    <>
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
        onChange={handleProvinceChange}
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
        onChange={handleCityChange}
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
        onChange={handleDistrictChange}
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
        onChange={handleSubDistrictChange}
      />
    </>
  );
}
