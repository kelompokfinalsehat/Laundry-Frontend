import { DriverHistoryDetail } from "@/components/field-ops/driver/DriverHistoryDetail";

export default function Page() {
  return (
    <DriverHistoryDetail
      taskTypeLabel="Delivery"
      orderCode="#ORD-00201"
      destination={{
        name: "Ani Wijaya",
        address: "Jl. Melati No. 12, Tangerang Selatan",
        phone: "0812-3456-7890",
      }}
      assignedAt="09:00"
      completedAt="10:40"
    />
  );
}
