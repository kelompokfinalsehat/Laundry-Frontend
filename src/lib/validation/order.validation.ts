import { COMPLAINT_CATEGORIES } from "@/types/api/orders.types";
import * as z from "zod"

 
const MAX_FILE_SIZE_MB = 5;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
  
export const createOrderSchema = z.object({
  addressId: z.string().uuid("Pilih alamat pickup"),
  pickupDate: z.string().min(1, "Pilih tanggal pickup"),
  pickupTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Pilih jam pickup"),
});


export const createComplaintSchema = z.object({
  category: z.enum(COMPLAINT_CATEGORIES, {
    message: "Kategori komplain wajib dipilih",
  }),
  description: z
    .string()
    .min(10, "Jelaskan lebih detail (minimal 10 karakter)")
    .max(500, "Deskripsi maksimal 500 karakter"),
  photo: z
    .instanceof(File, { message: "Foto bukti wajib diunggah" })
    .refine((file) => ACCEPTED_TYPES.includes(file.type), {
      message: "Format foto harus JPG, PNG, atau WEBP",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE_MB * 1024 * 1024, {
      message: `Ukuran foto maksimal ${MAX_FILE_SIZE_MB}MB`,
    }),
});

export type CreateOrderSchema = z.infer<typeof createOrderSchema>;
export type CreateComplaintSchema = z.infer<typeof createComplaintSchema>;