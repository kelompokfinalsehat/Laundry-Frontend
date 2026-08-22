import * as z from "zod"

 
export const createOrderSchema = z.object({
  addressId: z.string().uuid("Pilih alamat pickup"),
  pickupDate: z.string().min(1, "Pilih tanggal pickup"),
  pickupTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Pilih jam pickup"),
});

export type CreateOrderSchema = z.infer<typeof createOrderSchema>;
