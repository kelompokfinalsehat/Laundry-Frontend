import { FieldOpsAppShell } from "@/components/field-ops/shared/FieldOpsAppShell";
import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGateEmployee allowedRoles={["DRIVER"]}>
      <FieldOpsAppShell role="Driver">{children}</FieldOpsAppShell>
    </AuthGateEmployee>
  );
}
