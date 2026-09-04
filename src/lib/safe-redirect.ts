import * as z from "zod"

const FALLBACK_PATH = "/beranda";

export const safeRedirectPathSchema = z
  .string()
  .max(500)
  .refine((val) => val.startsWith("/"), { message: "URL harus path relatif" })
  .refine((val) => !val.startsWith("//") && !val.startsWith("/\\"), {
    message: "URL tidak boleh protocol-relative",
  })
  .refine((val) => !/^\/[a-z][a-z0-9+.-]*:/i.test(val) && !val.includes("://"), {
    message: "URL tidak boleh mengandung skema lain",
  });

export function getSafeRedirectPath(intendedUrl: string | null): string {
  if (!intendedUrl) return FALLBACK_PATH;
  const result = safeRedirectPathSchema.safeParse(intendedUrl);
  return result.success ? result.data : FALLBACK_PATH;
}