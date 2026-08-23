import { AvailableAssignments } from "@/components/field-ops/shared/AvailableAssignments";

export default function Page() {
  return (
    <AvailableAssignments
      filterLabel="Jenis Tugas"
      filterOptions={["Semua", "Pickup", "Delivery"]}
      detailHrefBase="/internal/driver/tugas"
      emptyText="Belum ada tugas tersedia saat ini."
      items={[
        { id: "b1", badgeLabel: "Pickup", orderCode: "#ORD-00240" },
        { id: "b2", badgeLabel: "Delivery", orderCode: "#ORD-00236" },
      ]}
    />
  );
}
