"use client";

import { useEffect } from "react";
import { Button, Group, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { updateProfileSchema } from "@/lib/validation/profile.validation";
import { useUpdateBackOfficeProfile } from "@/hooks/backOfficeProfile.hooks";

type Props = {
  name: string;
  phone?: string | null;
  onCancel: () => void;
};

export function BackOfficeProfileForm({ name, phone, onCancel }: Props) {
  const updateProfile = useUpdateBackOfficeProfile();

  const form = useForm({
    initialValues: {
      name,
      phone: phone ?? "",
    },

    validate: {
      name: (value) => {
        const result = updateProfileSchema.shape.name.safeParse(value);

        return result.success ? null : result.error.issues[0]?.message;
      },

      phone: (value) => {
        const result = updateProfileSchema.shape.phone.safeParse(value);

        return result.success ? null : result.error.issues[0]?.message;
      },
    },
  });

  useEffect(() => {
    form.setValues({
      name,
      phone: phone ?? "",
    });
  }, [form, name, phone]);

  const handleSubmit = form.onSubmit(async (values) => {
    try {
      await updateProfile.mutateAsync({
        name: values.name,
        phone: values.phone,
      });

      notifications.show({
        title: "Berhasil",
        message: "Profil berhasil diperbarui.",
        color: "green",
      });

      onCancel();
    } catch (error) {
      notifications.show({
        title: "Gagal",
        message: error instanceof Error ? error.message : "Gagal memperbarui profil.",
        color: "red",
      });
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput label="Nama Lengkap" placeholder="Masukkan nama lengkap" withAsterisk {...form.getInputProps("name")} />

        <TextInput label="Nomor Telepon" placeholder="Masukkan nomor telepon" {...form.getInputProps("phone")} />

        <Group justify="flex-end" mt="sm">
          <Button variant="default" onClick={onCancel} disabled={updateProfile.isPending}>
            Batal
          </Button>

          <Button type="submit" loading={updateProfile.isPending}>
            Simpan Perubahan
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
