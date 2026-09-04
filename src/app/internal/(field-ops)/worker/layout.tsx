import { FieldOpsAppShell } from "@/components/field-ops/shared/FieldOpsAppShell";
import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGateEmployee allowedRoles={["WORKER"]}>
      <FieldOpsAppShell role="Worker" basePath="/internal/worker">
        {children}
      </FieldOpsAppShell>
    </AuthGateEmployee>
  );
}
