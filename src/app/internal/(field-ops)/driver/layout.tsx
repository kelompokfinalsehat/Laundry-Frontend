import { FieldOpsAppShell } from "@/components/field-ops/shared/FieldOpsAppShell";
// import { requireRole } from "@/lib/auth/AuthGateCustomer";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // await requireRole(["DRIVER"]);
  return (
    <FieldOpsAppShell role="Driver" basePath="/internal/driver">
      {children}
    </FieldOpsAppShell>
  );
}
