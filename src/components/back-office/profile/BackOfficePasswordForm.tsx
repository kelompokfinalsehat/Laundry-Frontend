"use client";

import { Button, Group, PasswordInput, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { useUpdateBackOfficeProfile } from "@/hooks/backOfficeProfile.hooks";
import { updateProfileSchema } from "@/lib/validation/profile.validation";

type Props = {
  onCancel: () => void;
};

export function BackOfficePasswordForm({ onCancel }: Props) {
  const updateProfile = useUpdateBackOfficeProfile();

  const form = useForm({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },

    validate: {
      currentPassword: (value) =>
        value ? null : "Password saat ini wajib diisi",

      newPassword: (value) => {
        const result = updateProfileSchema.shape.newPassword.safeParse(value);

        if (!result.success) {
          return result.error.issues[0]?.message;
        }

        if (value.length < 8) {
          return "Password baru minimal 8 karakter";
        }

        return null;
      },

      confirmPassword: (value, values) =>
        value === values.newPassword
          ? null
          : "Konfirmasi password tidak sama",
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    try {
      await updateProfile.mutateAsync({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });

      notifications.show({
        title: "Berhasil",
        message: "Password berhasil diperbarui.",
        color: "green",
      });

      form.reset();
      onCancel();
    } catch (error) {
      notifications.show({
        title: "Gagal",
        message:
          error instanceof Error
            ? error.message
            : "Gagal memperbarui password.",
        color: "red",
      });
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <PasswordInput
          label="Password Saat Ini"
          placeholder="Masukkan password saat ini"
          withAsterisk
          {...form.getInputProps("currentPassword")}
        />

        <PasswordInput
          label="Password Baru"
          placeholder="Minimal 8 karakter"
          withAsterisk
          {...form.getInputProps("newPassword")}
        />

        <PasswordInput
          label="Konfirmasi Password Baru"
          placeholder="Ulangi password baru"
          withAsterisk
          {...form.getInputProps("confirmPassword")}
        />

        <Group justify="flex-end" mt="sm">
          <Button
            variant="default"
            onClick={onCancel}
            disabled={updateProfile.isPending}
          >
            Batal
          </Button>

          <Button type="submit" loading={updateProfile.isPending}>
            Ubah Password
          </Button>
        </Group>
      </Stack>
    </form>
  );
}