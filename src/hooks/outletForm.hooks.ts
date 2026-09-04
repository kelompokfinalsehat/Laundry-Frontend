import {
  editOutletSchema,
  OutletFormValues,
  outletSchema,
} from "@/lib/validation/outlet.validation";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  useCities,
  useDistrict,
  usePreviewLocation,
  useProvinces,
  useSubDistrict,
} from "./addressCustomer/address.hooks";
import { previewLocationSchema } from "@/lib/validation/address.validation";

export function useOutletFormHooks({
  initialValues,
  mode,
}: {
  initialValues: OutletFormValues;
  mode: "create" | "edit";
}) {
  const router = useRouter();
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isEditingLocation, setIsEditingLocation] = useState(mode === "create");

  const form = useForm<OutletFormValues>({
    mode: "controlled",
    initialValues, // Otomatis terisi saat pertama kali render/remount

    validate: (values) => {
      const schema =
        mode === "edit" && !isEditingLocation ? editOutletSchema : outletSchema;
      const result = schema.safeParse(values);

      if (result.success) {
        return {};
      }

      return result.error.issues.reduce<Record<string, string>>(
        (errors, issue) => {
          const field = issue.path[0];

          if (typeof field === "string" && !errors[field]) {
            errors[field] = issue.message;
          }

          return errors;
        },
        {},
      );
    },

    validateInputOnChange: true,
  });

  // Hapus useEffect yang memanggil form.setValues(initialValues)

  const { data: provinces, isLoading: isLoadingProvinces } = useProvinces();
  const { data: cities, isLoading: isLoadingCities } = useCities(
    form.values.provinceId || null,
  );
  const { data: districts, isLoading: isLoadingDistricts } = useDistrict(
    form.values.cityId || null,
  );
  const { data: subDistricts, isLoading: isLoadingSubDistricts } =
    useSubDistrict(form.values.districtId || null);
  const previewLocation = usePreviewLocation();

  const handleProvinceChange = (value: string | null) => {
    const selected = provinces?.find((item) => String(item.id) === value);

    form.setValues({
      provinceId: value ?? "",
      provinceName: selected?.name ?? "",
      cityId: "",
      cityName: "",
      districtId: "",
      districtName: "",
      subDistrictId: "",
      subDistrictName: "",
      zipCode: "",
      latitude: undefined,
      longitude: undefined,
    });

    setLocationError(null);
  };

  const handleCityChange = (value: string | null) => {
    const selected = cities?.find((item) => String(item.id) === value);

    form.setValues({
      cityId: value ?? "",
      cityName: selected?.name ?? "",
      districtId: "",
      districtName: "",
      subDistrictId: "",
      subDistrictName: "",
      zipCode: "",
      latitude: undefined,
      longitude: undefined,
    });

    setLocationError(null);
  };

  const handleDistrictChange = (value: string | null) => {
    const selected = districts?.find((item) => String(item.id) === value);

    form.setValues({
      districtId: value ?? "",
      districtName: selected?.name ?? "",
      subDistrictId: "",
      subDistrictName: "",
      zipCode: "",
      latitude: undefined,
      longitude: undefined,
    });

    setLocationError(null);
  };

  const handleSubDistrictChange = (value: string | null) => {
    const selected = subDistricts?.find((item) => String(item.id) === value);

    form.setValues({
      subDistrictId: value ?? "",
      subDistrictName: selected?.name ?? "",
      zipCode: "",
      latitude: undefined,
      longitude: undefined,
    });

    setLocationError(null);
  };

  const handlePreviewLocation = async () => {
    const validation = previewLocationSchema.safeParse({
      provinceName: form.values.provinceName,
      cityName: form.values.cityName,
      districtName: form.values.districtName,
      subDistrictName: form.values.subDistrictName,
      zipCode: form.values.zipCode,
      streetDetail: form.values.streetDetail,
    });

    if (!validation.success) {
      form.validate();
      return;
    }

    setLocationError(null);

    try {
      const result = await previewLocation.mutateAsync({
        provinceName: form.values.provinceName,
        cityName: form.values.cityName,
        districtName: form.values.districtName,
        subDistrictName: form.values.subDistrictName,
        zipCode: form.values.zipCode,
        streetDetail: form.values.streetDetail,
      });

      if (
        !result.found ||
        result.latitude === undefined ||
        result.longitude === undefined
      ) {
        setLocationError(
          "Lokasi tidak ditemukan. Periksa kembali alamat yang dimasukkan.",
        );
        return;
      }

      form.setValues({
        latitude: result.latitude,
        longitude: result.longitude,
      });
    } catch (error) {
      setLocationError(
        error instanceof Error ? error.message : "Gagal mencari lokasi.",
      );
    }
  };

  const handleLocationChange = (latitude: number, longitude: number) => {
    form.setValues({
      latitude,
      longitude,
    });

    setLocationError(null);
  };

  const handleCancelEditLocation = () => {
    form.setValues(initialValues);
    setIsEditingLocation(false);
    setLocationError(null);
    form.clearErrors();
  };

  const hasPosition =
    typeof form.values.latitude === "number" &&
    typeof form.values.longitude === "number";

  return {
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
  };
}
