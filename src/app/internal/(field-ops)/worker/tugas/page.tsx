import { AvailableAssignments } from "@/components/field-ops/shared/AvailableAssignments";

export default function Page() {
  return (
    <AvailableAssignments
      filterLabel="Station"
      filterOptions={["Semua", "Washing", "Ironing", "Packing"]}
      detailHrefBase="/internal/worker/tugas"
      emptyText="Belum ada tugas tersedia saat ini. Coba periksa kembali nanti."
      items={[
        { id: "a1", badgeLabel: "Washing", orderCode: "#ORD-00231" },
        { id: "a2", badgeLabel: "Ironing", orderCode: "#ORD-00229" },
        { id: "a3", badgeLabel: "Packing", orderCode: "#ORD-00225" },
      ]}
    />
  );
}
