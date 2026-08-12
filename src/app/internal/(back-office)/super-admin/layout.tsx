import { BackOfficeAppShell } from "@/components/back-office/shared/BackOfficeAppShell";
// import { requireRole } from "@/lib/auth/AuthGateCustomer";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // await requireRole(["SUPER_ADMIN"]);
  return <BackOfficeAppShell role="SUPER_ADMIN">{children}</BackOfficeAppShell>;
}
