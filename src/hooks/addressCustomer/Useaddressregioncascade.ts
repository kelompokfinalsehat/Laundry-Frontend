import { UseFormReturnType } from "@mantine/form";

import type { AddressFormValues } from "@/types/api/address.types";
import { useCities, useDistrict, useProvinces, useSubDistrict } from "./address.hooks";

/**
 * Encapsulates the province -> city -> district -> subdistrict cascading
 * selects used by AddressForm: fetching each level's options and resetting
 * every downstream field (plus the map pin) whenever a parent level changes.
 */
export function useAddressRegionCascade(
  form: UseFormReturnType<AddressFormValues>,
) {
  const { data: provinces, isLoading: loadingProvinces } = useProvinces();
  const { data: cities, isLoading: loadingCities } = useCities(
    form.values.provinceId || null,
  );
  const { data: districts, isLoading: loadingDistricts } = useDistrict(
    form.values.cityId || null,
  );
  const { data: subDistricts, isLoading: loadingSubDistricts } =
    useSubDistrict(form.values.districtId || null);

  function resetPin() {
    form.setFieldValue("latitude", undefined);
    form.setFieldValue("longitude", undefined);
  }

  function handleProvinceChange(value: string | null) {
    const selected = provinces?.find((p) => String(p.id) === value);
    form.setFieldValue("provinceId", value ?? "");
    form.setFieldValue("provinceName", selected?.name ?? "");
    form.setFieldValue("cityId", "");
    form.setFieldValue("cityName", "");
    form.setFieldValue("districtId", "");
    form.setFieldValue("districtName", "");
    form.setFieldValue("subDistrictId", "");
    form.setFieldValue("subDistrictName", "");
    resetPin();
  }

  function handleCityChange(value: string | null) {
    const selected = cities?.find((c) => String(c.id) === value);
    form.setFieldValue("cityId", value ?? "");
    form.setFieldValue("cityName", selected?.name ?? "");
    form.setFieldValue("districtId", "");
    form.setFieldValue("districtName", "");
    form.setFieldValue("subDistrictId", "");
    form.setFieldValue("subDistrictName", "");
    resetPin();
  }

  function handleDistrictChange(value: string | null) {
    const selected = districts?.find((d) => String(d.id) === value);
    form.setFieldValue("districtId", value ?? "");
    form.setFieldValue("districtName", selected?.name ?? "");
    form.setFieldValue("subDistrictId", "");
    form.setFieldValue("subDistrictName", "");
    resetPin();
  }

  function handleSubDistrictChange(value: string | null) {
    const selected = subDistricts?.find((sd) => String(sd.id) === value);
    form.setFieldValue("subDistrictId", value ?? "");
    form.setFieldValue("subDistrictName", selected?.name ?? "");
    resetPin();
  }

  return {
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
  };
}