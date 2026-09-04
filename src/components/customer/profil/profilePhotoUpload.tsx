"use client";

import { useRef, useState } from "react";
import { Avatar, Button, Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { ApiError } from "@/lib/api/axios";
import { useUpdateProfilePhoto } from "@/hooks/profile.hooks";
import { useAuthStore } from "@/stores/useAuthStore";

export function ProfilePhotoUpload() {
  const { user } = useAuthStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { mutate, isPending } = useUpdateProfilePhoto();

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);

    mutate(file, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Foto profil berhasil diperbarui.",
          color: "green",
        });

        URL.revokeObjectURL(preview);
        setPreviewUrl(null);
      },

      onError: (error) => {
        setPreviewUrl(null);
        URL.revokeObjectURL(preview);

        const message =
          error instanceof ApiError
            ? error.code === "FILE_TOO_LARGE"
              ? "Ukuran file maksimal 1 MB."
              : error.code === "FILE_TYPE_INVALID"
                ? "Format file tidak didukung."
                : error.message
            : "Gagal memperbarui foto profil.";

        notifications.show({
          title: "Gagal",
          message,
          color: "red",
        });
      },
    });
    e.target.value = "";
  }

  return (
    <Stack gap="sm" align="center">
      <Avatar
        src={previewUrl ?? user?.profilePhotoUrl}
        size={96}
        radius="50%"
        style={{
          backgroundColor: "var(--color-primary-light)",
        }}
      >
        {user?.name?.charAt(0).toUpperCase()}
      </Avatar>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/gif"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <Button
        variant="outline"
        size="xs"
        loading={isPending}
        onClick={() => inputRef.current?.click()}
      >
        Ganti Foto
      </Button>
    </Stack>
  );
}