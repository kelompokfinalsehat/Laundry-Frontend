import { WorkerPreClaim } from "@/components/field-ops/worker/WorkerPreClaim";

export default function Page() {
  return (
    <WorkerPreClaim
      stationLabel="Washing"
      orderCode="Order #ORD-00231"
      availableSince="09:12"
    />
  );
}
