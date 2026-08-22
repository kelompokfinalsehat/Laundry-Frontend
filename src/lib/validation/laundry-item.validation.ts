import { z } from "zod";

export const laundryItemSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nama item minimal 2 karakter")
    .max(100, "Nama item maksimal 100 karakter"),
});

export type LaundryItemFormValues =
  z.infer<typeof laundryItemSchema>;