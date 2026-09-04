import { useState } from "react";
import { UseFormReturnType } from "@mantine/form";
import { previewLocationSchema } from "@/lib/validation/address.validation";
import { usePreviewLocation } from "./address.hooks";
import type { AddressFormValues } from "@/types/api/address.types";

const DEFAULT_FALLBACK_POSITION = { lat: -6.2, lng: 106.816666 };

/**
 * Encapsulates the "preview location on map" flow for AddressForm: checking
 * whether enough address detail has been entered, calling the geocoding
 * preview endpoint, falling back to a default pin on failure, and letting
 * the user drag the pin to a corrected position.
 */
export function useAddressLocationPreview(
  form: UseFormReturnType<AddressFormValues>,
) {
  const [locationError, setLocationError] = useState<string | null>(null);
  const previewLocationMutation = usePreviewLocation();

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

  function resetPin() {
    form.setFieldValue("latitude", undefined);
    form.setFieldValue("longitude", undefined);
  }

  function applyFallbackPosition(message: string) {
    form.setFieldValue("latitude", DEFAULT_FALLBACK_POSITION.lat);
    form.setFieldValue("longitude", DEFAULT_FALLBACK_POSITION.lng);
    setLocationError(message);
  }

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
          applyFallbackPosition(
            "Lokasi tidak ditemukan otomatis. Geser pin ke posisi yang benar di peta.",
          );
        }
      },
      onError: () => {
        applyFallbackPosition(
          "Gagal memuat perkiraan lokasi. Geser pin ke posisi yang benar di peta.",
        );
      },
    });
  }

  function handlePinChange(lat: number, lng: number) {
    form.setFieldValue("latitude", lat);
    form.setFieldValue("longitude", lng);
  }

  return {
    locationError,
    isAddressDetailComplete,
    hasPosition,
    isCheckingLocation: previewLocationMutation.isPending,
    resetPin,
    handleCheckLocation,
    handlePinChange,
  };
}