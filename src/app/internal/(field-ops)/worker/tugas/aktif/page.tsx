import { WorkerActiveContent } from "@/components/field-ops/worker/WorkerActiveContent";

// ── UI KOSONGAN — status di-hardcode "ASSIGNED" untuk sekarang.
// Nanti status ini datang dari useActiveAssignment() (worker.hooks.ts),
// dan komponen WorkerActiveContent otomatis render varian yang sesuai
// (ASSIGNED / IN_PROGRESS / ON_HOLD_BYPASS).

export default function Page() {
  return (
    <WorkerActiveContent
      status="ASSIGNED"
      stationLabel="Washing"
      orderCode="Order #ORD-00231"
      items={[
        { id: "i1", name: "Kemeja", officialQty: 3 },
        { id: "i2", name: "Celana", officialQty: 2 },
      ]}
    />
  );
}
