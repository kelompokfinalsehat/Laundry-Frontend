"use client";

import { useRouter } from "next/navigation";
import { Button, Group, Paper, Stack, Textarea, TextInput } from "@mantine/core";
import { schemaResolver, useForm } from "@mantine/form";
import { createOutletSchema, type CreateOutletFormValues } from "@/lib/validation/outlet.validation";

interface OutletFormProps {
  initialValues?: CreateOutletFormValues;
  onSubmit: (values: CreateOutletFormValues) => void;
  isSubmitting?: boolean;
  submitLabel?: string;
}

export function OutletForm({
  initialValues = {
    name: "",
    address: "",
  },
  onSubmit,
  isSubmitting = false,
  submitLabel = "Tambah Outlet",
}: OutletFormProps) {
  const router = useRouter();

  const form = useForm<CreateOutletFormValues>({
    initialValues,
    validate: schemaResolver(createOutletSchema),
  });

  return (
    <Paper
      withBorder
      radius="md"
      p="lg"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack gap="md">
          <TextInput label="Nama Outlet" placeholder="Masukkan nama outlet" withAsterisk {...form.getInputProps("name")} />

          <Textarea
            label="Alamat Outlet"
            placeholder="Contoh: Jl. KH. Hasyim Ashari No. 25, Cipondoh, Kota Tangerang, Banten"
            description="Masukkan alamat selengkap mungkin agar lokasi outlet dapat ditemukan dengan tepat."
            minRows={4}
            withAsterisk
            {...form.getInputProps("address")}
          />

          <Group justify="flex-end" mt="sm">
            <Button variant="default" onClick={() => router.back()} disabled={isSubmitting}>
              Batal
            </Button>

            <Button type="submit" loading={isSubmitting}>
              {submitLabel}
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
}
