import { z } from "zod";

export const inviteEmployeeSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Nama minimal 3 karakter")
    .max(100, "Nama maksimal 100 karakter"),

  email: z
    .string()
    .trim()
    .email("Format email tidak valid"),

  role: z.enum([
    "OUTLET_ADMIN",
    "WORKER",
    "DRIVER",
  ]),
});

export type InviteEmployeeFormValues =
  z.infer<typeof inviteEmployeeSchema>;