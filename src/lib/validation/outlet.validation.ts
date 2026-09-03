import { z } from "zod";

export const outletSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Nama outlet wajib diisi"),

  provinceId: z
    .string()
    .min(1, "Provinsi wajib dipilih"),

  provinceName: z
    .string()
    .min(1, "Provinsi wajib dipilih"),

  cityId: z
    .string()
    .min(1, "Kota/Kabupaten wajib dipilih"),

  cityName: z
    .string()
    .min(1, "Kota/Kabupaten wajib dipilih"),

  districtId: z
    .string()
    .min(1, "Kecamatan wajib dipilih"),

  districtName: z
    .string()
    .min(1, "Kecamatan wajib dipilih"),

  subDistrictId: z
    .string()
    .min(1, "Kelurahan wajib dipilih"),

  subDistrictName: z
    .string()
    .min(1, "Kelurahan wajib dipilih"),

  zipCode: z
    .string()
    .regex(
      /^\d{5}$/,
      "Kode pos harus 5 digit angka",
    ),

  streetDetail: z
    .string()
    .trim()
    .min(
      10,
      "Detail alamat terlalu pendek",
    ),

  latitude: z
    .number()
    .min(-90)
    .max(90)
    .optional(),

  longitude: z
    .number()
    .min(-180)
    .max(180)
    .optional(),
});

export const editOutletSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Nama outlet wajib diisi"),

  streetDetail: z
    .string()
    .trim()
    .min(1, "Alamat outlet wajib tersedia"),

  latitude: z
    .number()
    .min(-90)
    .max(90),

  longitude: z
    .number()
    .min(-180)
    .max(180),
});

export const previewLocationSchema = z.object({
  provinceName: z.string().min(1),
  cityName: z.string().min(1),
  districtName: z.string().min(1),
  subDistrictName: z.string().min(1),
  zipCode: z.string().regex(/^\d{5}$/),
  streetDetail: z
    .string()
    .trim()
    .min(10),
});

export const filterOutletSchema = z.object({
  search: z.string().trim().default(""),
  sortBy: z.enum(["name", "createdAt"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type OutletFormValues = z.infer<typeof outletSchema>;

export type FilterOutletValues = z.infer<
  typeof filterOutletSchema
>;