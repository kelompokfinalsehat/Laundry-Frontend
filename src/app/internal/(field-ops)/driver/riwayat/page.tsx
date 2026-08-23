import { AssignmentHistory } from "@/components/field-ops/shared/AssignmentHistory";

export default function Page() {
  return (
    <AssignmentHistory
      filterLabel="Jenis Tugas"
      filterOptions={["Semua", "Pickup", "Delivery"]}
      emptyText="Belum ada riwayat tugas yang selesai."
      onItemHrefBase="/internal/driver/riwayat"
      items={[
        { id: "d1", badgeLabel: "Delivery", orderCode: "#ORD-00201", completedAt: "10 Agu, 10:40" },
        { id: "d2", badgeLabel: "Pickup", orderCode: "#ORD-00198", completedAt: "9 Agu, 09:15" },
      ]}
    />
  );
}
