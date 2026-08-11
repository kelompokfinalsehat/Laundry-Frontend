import { FieldOpsAppShell } from "@/components/field-ops/shared/FieldOpsAppShell";
import { requireRole } from "@/lib/auth/AuthGuards";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireRole(["WORKER"]);
  return <FieldOpsAppShell role="Worker">{children}</FieldOpsAppShell>;
}
