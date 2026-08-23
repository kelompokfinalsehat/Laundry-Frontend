import { BackOfficeAppShell } from "@/components/back-office/shared/BackOfficeAppShell";
import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";
// import { requireRole } from "@/lib/auth/AuthGateCustomer";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // await requireRole(["SUPER_ADMIN"]);
  return (
    <AuthGateEmployee allowedRoles={["SUPER_ADMIN"]}>
      <BackOfficeAppShell role="SUPER_ADMIN">{children}</BackOfficeAppShell>
    </AuthGateEmployee>
  );
}
