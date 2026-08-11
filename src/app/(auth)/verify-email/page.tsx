import { Suspense } from "react";
import VerifyEmailContent from "@/components/auth/VerifyEmailForm";

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={null}>
      <VerifyEmailContent />
    </Suspense>
  );
}