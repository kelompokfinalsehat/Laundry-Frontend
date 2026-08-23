import { AssignmentHistory } from "@/components/field-ops/shared/AssignmentHistory";

export default function Page() {
  return (
    <AssignmentHistory
      filterLabel="Station"
      filterOptions={["Semua", "Washing", "Ironing", "Packing"]}
      emptyText="Belum ada riwayat tugas yang selesai."
      items={[
        { id: "h1", badgeLabel: "Washing", orderCode: "#ORD-00219", completedAt: "12 Agu, 14:20" },
        { id: "h2", badgeLabel: "Packing", orderCode: "#ORD-00214", completedAt: "11 Agu, 10:05" },
      ]}
    />
  );
}
