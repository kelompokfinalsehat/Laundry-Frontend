"use client";

import { useRef, useState } from "react";
import { Avatar, Button, Stack, Alert } from "@mantine/core";
import { ApiError } from "@/lib/api/axios";
import { useUpdateProfilePhoto } from "@/hooks/profile.hooks";
import { useAuthStore } from "@/stores/useAuthStore";


export function ProfilePhotoUpload() {
  const { user } = useAuthStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { mutate, isPending, error } = useUpdateProfilePhoto();

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validasi tipe/ukuran sekarang satu sumber kebenaran: profilePhotoSchema
    // (dicek di dalam updateProfilePhoto). Di sini cukup preview + kirim.
    setPreviewUrl(URL.createObjectURL(file));
    mutate(file, {
      onError: () => setPreviewUrl(null), // gagal upload/validasi, balikin ke foto lama
    });
  }

  const errorMessage =
    error instanceof ApiError
      ? error.code === "FILE_TOO_LARGE"
        ? "Ukuran file maksimal 1 MB."
        : error.code === "FILE_TYPE_INVALID"
          ? "Format file tidak didukung."
          : error.message
      : null;

  return (
    <Stack gap="sm" align="center">
      <Avatar
        src={previewUrl ?? user?.profilePhotoUrl}
        size={96}
        radius="50%"
        style={{ backgroundColor: "var(--color-primary-light)" }}
      >
        {user?.name?.charAt(0).toUpperCase()}
      </Avatar>

      {errorMessage && (
        <Alert color="red" style={{ backgroundColor: "var(--color-error-light)", color: "var(--color-error)" }}>
          {errorMessage}
        </Alert>
      )}

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
