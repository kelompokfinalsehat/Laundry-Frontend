import { Suspense } from "react";
import { Center, Loader } from "@mantine/core";
import LoginPageContent from "@/components/authCustomer/LoginCustomerContent";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <Center mih="100vh">
          <Loader size="md" />
        </Center>
      }
    >
      <LoginPageContent />
    </Suspense>
  );
}