import { FieldOpsHome } from "@/components/field-ops/shared/FieldOpsHome";

export default function Page() {
  return (
    <FieldOpsHome
      name="Budi"
      cariTugasHref="/internal/worker/tugas"
      lihatTugasHref="/internal/worker/tugas/aktif"
      activeTask={{
        badgeLabel: "Washing",
        orderCode: "Order #ORD-00231",
      }}
    />
  );
}
