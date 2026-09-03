import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthGateEmployee allowedRoles={["DRIVER", "OUTLET_ADMIN", "SUPER_ADMIN", "WORKER"]}>{children}</AuthGateEmployee>;
}
