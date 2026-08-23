import { DriverActiveContent } from "@/components/field-ops/driver/DriverActiveContent";

// ── UI KOSONGAN — state di-hardcode "PICKUP_ASSIGNED" untuk sekarang.
// Nanti "state" ini datang APA ADANYA dari useActiveTask() (driver.hooks.ts)
// — jangan ditebak sendiri di FE. Komponen DriverActiveContent otomatis
// render salah satu dari 5 varian sesuai state yang diterima.

export default function Page() {
  return (
    <DriverActiveContent
      taskTypeLabel="Pickup"
      orderCode="#ORD-00240"
      state="PICKUP_ASSIGNED"
      destination={{
        name: "Ani Wijaya",
        address: "Jl. Melati No. 12, Tangerang Selatan",
        phone: "0812-3456-7890",
      }}
    />
  );
}
