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
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

export const updateAddressSchema = z.object({
  label: z.string().max(50).optional(),
  provinceId: z.string().min(1).optional(),
  provinceName: z.string().min(1).optional(),
  cityId: z.string().min(1).optional(),
  cityName: z.string().min(1).optional(),
  districtId: z.string().min(1).optional(),
  districtName: z.string().min(1).optional(),
  subDistrictId: z.string().min(1, "Kelurahan wajib dipilih"),
  subDistrictName: z.string().min(1),
  zipCode: z
    .string()
    .regex(/^\d{5}$/, "Kode pos harus 5 digit angka")
    .optional(),
  streetDetail: z
    .string()
    .min(10, "Detail alamat terlalu pendek, tulis lebih lengkap")
    .optional(),
  phone: z.string().min(8, "Nomor telepon tidak valid").max(20).optional(),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
});

export const previewLocationSchema = z.object({
  provinceName: z.string().min(1, "Provinsi wajib dipilih"),
  cityName: z.string().min(1, "Kota/Kabupaten wajib dipilih"),
  districtName: z.string().min(1, "Kecamatan wajib dipilih"),
  subDistrictName: z.string().min(1),
  zipCode: z.string().regex(/^\d{5}$/, "Kode pos harus 5 digit angka"),
  streetDetail: z
    .string()
    .min(10, "Detail alamat terlalu pendek, tulis lebih lengkap"),
});

export type CreateAddressSchema = z.infer<typeof createAddressSchema>;
export type UpdateAddressSchema = z.infer<typeof updateAddressSchema>;
export type PreviewLocationInput = z.infer<typeof previewLocationSchema>;
