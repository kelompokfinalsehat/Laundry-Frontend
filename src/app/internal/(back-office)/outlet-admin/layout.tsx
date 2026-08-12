import { BackOfficeAppShell } from "@/components/back-office/shared/BackOfficeAppShell";
// import { requireRole } from "@/lib/auth/AuthGateCustomer";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // await requireRole(["OUTLET_ADMIN"]);
  return (
    <BackOfficeAppShell role="OUTLET_ADMIN">{children}</BackOfficeAppShell>
  );
}
