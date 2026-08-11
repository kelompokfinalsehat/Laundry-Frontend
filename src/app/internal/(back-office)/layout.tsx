import { requireRole } from "@/lib/auth/AuthGuards";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireRole(["OUTLET_ADMIN", "SUPER_ADMIN"]);
  return children;
}
