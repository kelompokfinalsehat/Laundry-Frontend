import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGateEmployee allowedRoles={["DRIVER", "WORKER"]}>
      {children}
    </AuthGateEmployee>
  );
}
