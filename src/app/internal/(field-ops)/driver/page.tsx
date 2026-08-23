import { FieldOpsHome } from "@/components/field-ops/shared/FieldOpsHome";

export default function Page() {
  return (
    <FieldOpsHome
      name="Rudi"
      cariTugasHref="/internal/driver/tugas"
      lihatTugasHref="/internal/driver/tugas/aktif"
      activeTask={{
        badgeLabel: "Pickup",
        orderCode: "#ORD-00240",
        statusLabel: "Menuju lokasi penjemputan",
      }}
    />
  );
}
