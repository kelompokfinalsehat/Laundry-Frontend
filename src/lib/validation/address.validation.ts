import * as z from "zod"
 
export const createAddressSchema = z.object({
  label: z.string().max(50).optional().or(z.literal("")),
  formattedAddress: z.string().min(10, "Alamat terlalu pendek, tulis lebih lengkap"),
  phone: z.string().min(8, "Nomor telepon tidak valid").max(20),
});
 
export const updateAddressSchema = z.object({
  label: z.string().max(50).optional().or(z.literal("")),
  formattedAddress: z.string().min(10, "Alamat terlalu pendek, tulis lebih lengkap"),
  phone: z.string().min(8, "Nomor telepon tidak valid").max(20),
});
 
export type CreateAddressSchema = z.infer<typeof createAddressSchema>;
export type UpdateAddressSchema = z.infer<typeof updateAddressSchema>;
 




























