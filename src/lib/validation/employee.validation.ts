import { z } from "zod";

export const inviteEmployeeSchema = z.object({
  name: z.string().trim().min(3, "Nama minimal 3 karakter").max(100, "Nama maksimal 100 karakter"),

  email: z.string().trim().email("Format email tidak valid"),

  role: z.enum(["OUTLET_ADMIN", "WORKER", "DRIVER"]),
});

export const filterOutletAttendanceSchema = z.object({
  search: z.string().trim().default(""),
  role: z.enum(["WORKER", "DRIVER"]).nullable().optional(),
  date: z.coerce.date().nullable().optional(),
  status: z.enum(["NOT_CLOCKED_IN", "CLOCKED_IN", "CLOCKED_OUT"]).nullable().optional()
});

export type InviteEmployeeFormValues = z.infer<typeof inviteEmployeeSchema>;
export type FilterOutletAttendanceValues = z.infer<typeof filterOutletAttendanceSchema>;
