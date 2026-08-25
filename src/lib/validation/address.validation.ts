import * as z from "zod";

export const createAddressSchema = z.object({
  label: z.string().max(50).optional().or(z.literal("")),
  provinceId: z.string().min(1, "Provinsi wajib dipilih"),
  provinceName: z.string().min(1),
  cityId: z.string().min(1, "Kota/Kabupaten wajib dipilih"),
  cityName: z.string().min(1),
  districtId: z.string().min(1, "Kecamatan wajib dipilih"),
  districtName: z.string().min(1),
  subDistrictId: z.string().min(1, "Kelurahan wajib dipilih"),
  subDistrictName: z.string().min(1),
  streetDetail: z
    .string()
    .min(10, "Detail alamat terlalu pendek, tulis lebih lengkap"),
  zipCode: z.string().regex(/^\d{5}$/, "Kode pos harus 5 digit angka"),
  phone: z.string().min(8, "Nomor telepon tidak valid").max(20),
});

export const updateAddressSchema = z.object({
  label: z.string().max(50).optional(),
  provinceId: z.string().min(1).optional(),
  provinceName: z.string().min(1).optional(),
  cityId: z.string().min(1).optional(),
  cityName: z.string().min(1).optional(),
  districtId: z.string().min(1).optional(),
  districtName: z.string().min(1).optional(),
  zipCode: z.string().regex(/^\d{5}$/, "Kode pos harus 5 digit angka").optional(),
  streetDetail: z
    .string()
    .min(10, "Detail alamat terlalu pendek, tulis lebih lengkap")
    .optional(),
  phone: z.string().min(8, "Nomor telepon tidak valid").max(20).optional(),
});

export type CreateAddressSchema = z.infer<typeof createAddressSchema>;
export type UpdateAddressSchema = z.infer<typeof updateAddressSchema>;
