// constants/order-status-group.const.ts
export const ORDER_STATUS_GROUPS = {
  BELUM_BAYAR: ["WAITING_PAYMENT", "OVERDUE"],
  SEDANG_DIPROSES: [
    "SCHEDULED",
    "WAITING_DRIVER_PICKUP",
    "ON_THE_WAY_TO_OUTLET",
    "ARRIVED_AT_OUTLET",
    "WASHING",
    "IRONING",
    "PACKING",
  ],
  DIKIRIM: [
    "READY_FOR_DELIVERY",
    "ON_THE_WAY_TO_CUSTOMER",
    "WAITING_CUSTOMER_CONFIRMATION",
  ],
  SELESAI: ["RECEIVED_BY_CUSTOMER"],
} as const;

export type OrderStatusGroupKey = keyof typeof ORDER_STATUS_GROUPS;

export const ORDER_STATUS_GROUP_LABELS: Record<OrderStatusGroupKey, string> = {
  BELUM_BAYAR: "Belum Bayar",
  SEDANG_DIPROSES: "Sedang Diproses",
  DIKIRIM: "Dikirim",
  SELESAI: "Selesai",
};

export const STATUS_LABELS: Record<string, string> = {
  SCHEDULED: "Dijadwalkan",
  WAITING_DRIVER_PICKUP: "Menunggu Driver",
  ON_THE_WAY_TO_OUTLET: "Menuju Outlet",
  ARRIVED_AT_OUTLET: "Tiba di Outlet",
  WASHING: "Dicuci",
  IRONING: "Disetrika",
  PACKING: "Dikemas",
  WAITING_PAYMENT: "Menunggu Pembayaran",
  OVERDUE: "Pembayaran Terlambat",
  READY_FOR_DELIVERY: "Siap Dikirim",
  ON_THE_WAY_TO_CUSTOMER: "Dalam Perjalanan",
  WAITING_CUSTOMER_CONFIRMATION: "Menunggu Konfirmasi",
  RECEIVED_BY_CUSTOMER: "Diterima",
};