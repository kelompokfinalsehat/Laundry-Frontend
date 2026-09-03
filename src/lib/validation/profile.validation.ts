import * as z from "zod"

export const updateProfileSchema = z
  .object({
    name: z.string().min(1, "Nama tidak boleh kosong").max(100).optional(),
    phone: z
      .string()
      .min(8, "Nomor telepon tidak valid")
      .max(20)
      .optional()
      .or(z.literal("")),
    currentPassword: z.string().optional().or(z.literal("")),
    newPassword: z.string().optional().or(z.literal("")),
  })
  .refine((v) => (v.newPassword ? v.newPassword.length >= 8 : true), {
    message: "Password baru minimal 8 karakter",
    path: ["newPassword"],
  })
  .refine((v) => (v.newPassword ? !!v.currentPassword : true), {
    message: "Password saat ini wajib diisi untuk mengganti password",
    path: ["currentPassword"],
  });

export const updateEmailSchema = z.object({
  newEmail: z.string().email("Format email tidak valid"),
});

const ALLOWED_PHOTO_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
];
export const MAX_PHOTO_SIZE_BYTES = 1 * 1024 * 1024;

export const profilePhotoSchema = z
  .instanceof(File, { message: "File wajib diunggah" })
  .refine((file) => ALLOWED_PHOTO_TYPES.includes(file.type), {
    message: "Hanya menerima file .jpg, .jpeg, .png, atau .gif.",
  })
  .refine((file) => file.size <= MAX_PHOTO_SIZE_BYTES, {
    message: "Ukuran file maksimal 1 MB.",
  });

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>;
export type UpdateEmailSchema = z.infer<typeof updateEmailSchema>;
