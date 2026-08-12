import { CustomerAppShell } from "@/components/customer/CustomerAppShell";
import { requireRole } from "@/lib/auth/guards";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireRole(["CUSTOMER"]);
  return <CustomerAppShell>{children}</CustomerAppShell>;
}
