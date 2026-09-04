import { BackOfficeAppShell } from "@/components/back-office/shared/BackOfficeAppShell";
import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";
// import { requireRole } from "@/lib/auth/AuthGateCustomer";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGateEmployee allowedRoles={["OUTLET_ADMIN"]}>
      <BackOfficeAppShell role="OUTLET_ADMIN">{children}</BackOfficeAppShell>
    </AuthGateEmployee>
  );
}
