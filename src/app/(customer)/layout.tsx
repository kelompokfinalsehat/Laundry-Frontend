import { CustomerAppShell } from "@/components/customer/CustomerAppShell";
import { AuthGateCustomer } from "@/lib/auth/AuthGateCustomer";
import { Container } from "@mantine/core";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGateCustomer>
      <CustomerAppShell>
        <Container size="lg">{children}</Container>
      </CustomerAppShell>
    </AuthGateCustomer>
  );
}
