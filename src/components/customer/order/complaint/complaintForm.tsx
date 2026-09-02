"use client";

import { useState } from "react";
import {
  Stack,
  Select,
  Textarea,
  Button,
  FileInput,
  Image,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useCreateComplaint } from "@/hooks/order/order.hooks";
import { ApiError } from "@/lib/api/axios";
import {
  createComplaintSchema,
  type CreateComplaintSchema,
} from "@/lib/validation/order.validation";
import {
  COMPLAINT_CATEGORIES,
  COMPLAINT_CATEGORY_LABELS,
  type ComplaintCategory,
} from "@/types/api/orders.types";

const MAX_FILE_SIZE_MB = 5;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

type ComplaintFormValues = {
  category: ComplaintCategory | null;
  description: string;
  photo: File | null;
};

type ComplaintFormProps = {
  id: string;
  onSuccess: () => void;
  onCancel: () => void;
};

export function ComplaintForm({ id, onSuccess, onCancel }: ComplaintFormProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const mutation = useCreateComplaint(id);

  const form = useForm<ComplaintFormValues>({
    initialValues: {
      category: null,
      description: "",
      photo: null,
    },
    validate: schemaResolver(createComplaintSchema),
  });

  function handlePhotoChange(file: File | null) {
    form.setFieldValue("photo", file);

    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(file ? URL.createObjectURL(file) : null);
  }

  function handleSubmit(values: ComplaintFormValues) {
    if (!values.category || !values.photo) return;

    const payload: CreateComplaintSchema = {
      category: values.category,
      description: values.description,
      photo: values.photo,
    };

    mutation.mutate(payload, {
      onSuccess: () => {
        notifications.show({
          title: "Komplain berhasil dikirim",
          message: "Tim kami akan segera meninjau komplain kamu.",
          color: "green",
        });
        onSuccess();
      },
      onError: (error) => {
        let message = "Gagal mengirim komplain.";

        if (error instanceof ApiError) {
          switch (error.code) {
            case "PHOTO_REQUIRED":
              message = "Foto bukti komplain wajib diunggah.";
              break;
            case "INVALID_FILE_TYPE":
              message = "Format foto harus JPG, PNG, atau WEBP.";
              break;
            case "ORDER_FORBIDDEN":
              message = "Order tidak ditemukan atau bukan milik kamu.";
              break;
            default:
              message = error.message;
          }
        }

        notifications.show({
          title: "Komplain gagal dikirim",
          message,
          color: "red",
        });
      },
    });
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="md">
        <Select
          label="Kategori Komplain"
          placeholder="Pilih kategori"
          required
          data={COMPLAINT_CATEGORIES.map((c) => ({
            value: c,
            label: COMPLAINT_CATEGORY_LABELS[c],
          }))}
          {...form.getInputProps("category")}
        />

        <Textarea
          label="Deskripsi"
          placeholder="Jelaskan detail masalah yang kamu alami"
          minRows={4}
          required
          {...form.getInputProps("description")}
        />

        <FileInput
          label="Foto Bukti"
          description={`JPG, PNG, atau WEBP. Maksimal ${MAX_FILE_SIZE_MB}MB.`}
          placeholder="Pilih foto"
          accept={ACCEPTED_TYPES.join(",")}
          required
          value={form.values.photo}
          onChange={handlePhotoChange}
          error={form.errors.photo}
        />

        {previewUrl && (
          <Image
            src={previewUrl}
            alt="Preview bukti komplain"
            radius="md"
            mah={200}
            w="auto"
            fit="contain"
          />
        )}

        <Stack gap="xs">
          <Button
            type="submit"
            loading={mutation.isPending}
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Kirim Komplain
          </Button>
          <Button variant="subtle" onClick={onCancel} disabled={mutation.isPending}>
            Batal
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
