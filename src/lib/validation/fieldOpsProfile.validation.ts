import { z } from "zod";

const ALLOWED_PHOTO_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

export const MAX_PROFILE_PHOTO_SIZE = 1 * 1024 * 1024;

export const fieldOpsProfilePhotoSchema = z
  .custom<File>((value) => typeof File !== "undefined" && value instanceof File, {
    message: "File foto tidak valid",
  })
  .refine((file) => ALLOWED_PHOTO_TYPES.includes(file.type), {
    message: "Foto harus berformat JPG, JPEG, PNG, atau GIF",
  })
  .refine((file) => file.size <= MAX_PROFILE_PHOTO_SIZE, {
    message: "Ukuran foto maksimal 1 MB",
  });

export const fieldOpsProfileSchema = z.object({
  name: z.string().trim().min(1, "Nama tidak boleh kosong").max(100, "Nama maksimal 100 karakter"),

  email: z.string().trim().email("Format email tidak valid"),

  phone: z
    .string()
    .trim()
    .refine((value) => value === "" || (value.length >= 8 && value.length <= 20), {
      message: "Nomor telepon harus 8-20 karakter",
    }),

  photo: fieldOpsProfilePhotoSchema.nullable(),
});

export type FieldOpsProfileFormValues = z.infer<typeof fieldOpsProfileSchema>;
