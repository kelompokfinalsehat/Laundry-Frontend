import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGateEmployee allowedRoles={["OUTLET_ADMIN", "SUPER_ADMIN"]}>
      {children}
    </AuthGateEmployee>
  );
}
