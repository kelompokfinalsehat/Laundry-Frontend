import { FieldOpsAppShell } from "@/components/field-ops/shared/FieldOpsAppShell";
import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";
// import { requireRole } from "@/lib/auth/AuthGateCustomer";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // await requireRole(["WORKER"]);
  return (
    <AuthGateEmployee allowedRoles={["WORKER"]}>
      <FieldOpsAppShell role="Worker">{children}</FieldOpsAppShell>
    </AuthGateEmployee>
  );
}
