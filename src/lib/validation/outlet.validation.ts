import { z } from "zod";

export const createOutletSchema = z.object({
  name: z.string().min(1, "Nama outlet wajib diisi"),
  address: z.string().min(1, "Alamat wajib diisi"),
});

export const filterOutletSchema = z.object({
  search: z.string().trim().default(""),
  sortBy: z.enum(["name", "createdAt"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type CreateOutletFormValues = z.infer<typeof createOutletSchema>;
export type FilterOutletValues = z.infer<typeof filterOutletSchema>