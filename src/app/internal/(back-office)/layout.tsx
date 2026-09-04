import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";
import { BackOfficeNotificationWatcher } from "@/components/back-office/shared/BackOfficeNotificationWatcher";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGateEmployee allowedRoles={["OUTLET_ADMIN", "SUPER_ADMIN"]}>
      <BackOfficeNotificationWatcher />

      {children}
    </AuthGateEmployee>
  );
}
