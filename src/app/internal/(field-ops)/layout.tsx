import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";
import { Container } from "@mantine/core";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGateEmployee allowedRoles={["DRIVER", "WORKER"]}>
      {children}
    </AuthGateEmployee>
  );
}
