import { CustomerStatus } from "@/types/api";

export const CUSTOMER_STATUS: Record<
  CustomerStatus,
  {
    label: string;
    color: string;
  }
> = {
  SCHEDULED: {
    label: "Terjadwal",
    color: "blue",
  },
  WAITING_DRIVER_PICKUP: {
    label: "Menunggu Driver",
    color: "yellow",
  },
  ON_THE_WAY_TO_OUTLET: {
    label: "Menuju Outlet",
    color: "cyan",
  },
  ARRIVED_AT_OUTLET: {
    label: "Tiba di Outlet",
    color: "indigo",
  },
  WASHING: {
    label: "Pencucian",
    color: "blue",
  },
  IRONING: {
    label: "Penyetrikaan",
    color: "violet",
  },
  PACKING: {
    label: "Pengemasan",
    color: "grape",
  },
  WAITING_PAYMENT: {
    label: "Menunggu Pembayaran",
    color: "orange",
  },
  READY_FOR_DELIVERY: {
    label: "Siap Diantar",
    color: "teal",
  },
  ON_THE_WAY_TO_CUSTOMER: {
    label: "Dalam Pengantaran",
    color: "cyan",
  },
  RECEIVED_BY_CUSTOMER: {
    label: "Diterima Pelanggan",
    color: "green",
  },
  OVERDUE: {
    label: "Jatuh Tempo",
    color: "red",
  },
  WAITING_CUSTOMER_CONFIRMATION: {
    label: "Menunggu Konfirmasi Pelanggan",
    color: "orange",
  },
};