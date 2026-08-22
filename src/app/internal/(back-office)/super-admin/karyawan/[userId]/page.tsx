import { EmployeeDetailContent } from "@/components/back-office/employee/EmployeeDetailContent";

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  return (
    <EmployeeDetailContent
      userId={userId}
    />
  );
}