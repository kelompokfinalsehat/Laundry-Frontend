import { CustomerAppShell } from "@/components/customer/CustomerAppShell";
import { AuthGate } from "@/lib/auth/AuthGateCustomer";
import { Container } from "@mantine/core";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGate>
      <CustomerAppShell>
        <Container size="xl" py="sm">{children}</Container>
      </CustomerAppShell>
    </AuthGate>
  );
}
