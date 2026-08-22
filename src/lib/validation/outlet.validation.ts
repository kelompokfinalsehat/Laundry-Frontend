import { z } from "zod";

export const createOutletSchema = z.object({
  name: z
    .string()
    .min(1, "Nama outlet wajib diisi"),

  address: z
    .string()
    .min(1, "Alamat wajib diisi")
});

export type CreateOutletFormValues =
  z.infer<typeof createOutletSchema>;