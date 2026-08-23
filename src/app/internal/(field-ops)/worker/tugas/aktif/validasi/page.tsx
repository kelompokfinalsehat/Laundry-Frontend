import { WorkerQuantityForm } from "@/components/field-ops/worker/WorkerQuantityForm";

export default function Page() {
  return (
    <WorkerQuantityForm
      stationLabel="Washing"
      orderCode="Order #ORD-00231"
      rows={[
        { id: "i1", name: "Kemeja", officialQty: 3, inputQty: 3 },
        { id: "i2", name: "Celana", officialQty: 2, inputQty: 2 },
      ]}
    />
  );
}
