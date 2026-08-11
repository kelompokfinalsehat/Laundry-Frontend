import { CustomerAppShell } from "@/components/customer/CustomerAppShell";
import { AuthGate } from "@/lib/auth/AuthGuards";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGate>
      <CustomerAppShell>{children}</CustomerAppShell>
    </AuthGate>
  );
}