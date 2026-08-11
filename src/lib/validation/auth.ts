import { z } from "zod";

export const loginCustomerSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Minimal 8 karakter"),
});

export const registerCustomerSchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
});

export const emailVerificationSchema = z.object({
  name: z
    .string()
    .min(5, "Nama minimal 5 karakter")
    .max(150, "Nama maksimal 150 karakter"),
  password: z.string().min(8, "Kata sandi minimal 8 karakter"),
});

export const passwordSchema = z
  .object({ password: z.string().min(8), confirmPassword: z.string().min(8) })
  .refine((v) => v.password === v.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password tidak sama",
  });

export type LoginCustomerSchema = z.infer<typeof loginCustomerSchema>;
export type RegisterCustomerSchema = z.infer<typeof registerCustomerSchema>;
export type EmailVerificationSchema = z.infer<typeof emailVerificationSchema>;
