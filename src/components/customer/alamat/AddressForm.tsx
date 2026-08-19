"use client";

import { Stack, TextInput, Textarea, Button, Alert } from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import { createAddressSchema } from "@/lib/validation/address.validation";
import { ApiError } from "@/lib/api/axios";
import type { Address } from "@/types/api/address.types";

type AddressFormValues = {
  label: string;
  formattedAddress: string;
  phone: string;
};

type AddressFormProps = {
  initialAddress?: Address;
  isPending: boolean;
  error: unknown;
  onSubmit: (values: AddressFormValues) => void;
  onCancel: () => void;
};

export function AddressForm({
  initialAddress,
  isPending,
  error,
  onSubmit,
  onCancel,
}: AddressFormProps) {
  const form = useForm<AddressFormValues>({
    initialValues: {
      label: initialAddress?.label ?? "",
      formattedAddress: initialAddress?.formattedAddress ?? "",
      phone: initialAddress?.phone ?? "",
    },
    validate: schemaResolver(createAddressSchema),
  });

  const errorMessage =
    error instanceof ApiError
      ? error.code === "GEOCODING_FAILED"
        ? "Alamat tidak ditemukan. Coba tulis lebih lengkap (jalan, nomor, kota)."
        : error.code === "ADDRESS_LIMIT_REACHED"
          ? error.message
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
        <Textarea
          label="Alamat Lengkap"
          description="Sertakan nama jalan, kelurahan, kecamatan, kota, dan kode pos agar lokasi lebih akurat di peta."
          placeholder="Jalan, nomor rumah, kelurahan, kecamatan, kota, kode pos"
          minRows={3}
          required
          {...form.getInputProps("formattedAddress")}
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
