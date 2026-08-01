import { requireRole } from "@/lib/auth/guards";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireRole(["WORKER", "DRIVER", "OUTLET_ADMIN", "SUPER_ADMIN"]);
  return children;
}
