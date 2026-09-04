import { Suspense } from "react";
import VerifyEmailContent from "@/components/authCustomer/VerifyEmailForm";

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={null}>
      <VerifyEmailContent />
    </Suspense>
  );
}
