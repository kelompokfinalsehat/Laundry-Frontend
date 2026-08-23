import { WorkerBypassRequest } from "@/components/field-ops/worker/WorkerBypassRequest";

export default function Page() {
  return (
    <WorkerBypassRequest
      rows={[{ id: "i1", name: "Kemeja", officialQty: 3, inputQty: 5 }]}
    />
  );
}
