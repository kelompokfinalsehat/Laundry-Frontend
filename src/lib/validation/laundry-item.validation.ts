import { z } from "zod";

export const laundryItemSchema = z.object({
  name: z.string().trim().min(2, "Nama item minimal 2 karakter").max(100, "Nama item maksimal 100 karakter"),
});

export const filterLaundryItemSchema = z.object({
  search: z.string().trim().default(''),
  sortBy: z.enum(["name", "createdAt"]).default('createdAt'),
  sortOrder: z.enum(["asc", "desc"]).default('desc'),
});

export type LaundryItemFormValues = z.infer<typeof laundryItemSchema>;
export type FilterLaundryItemValues = z.infer<typeof filterLaundryItemSchema>
