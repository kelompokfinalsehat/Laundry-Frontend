import type { CustomerOrderStatus } from '@/types/api';

export const CUSTOMER_STATUS_LABEL: Record<CustomerOrderStatus, string> = {
  MENUNGGU_PENJEMPUTAN_DRIVER: 'Menunggu Penjemputan Driver',
  LAUNDRY_SEDANG_MENUJU_OUTLET: 'Laundry Sedang Menuju Outlet',
  LAUNDRY_TELAH_SAMPAI_OUTLET: 'Laundry Telah Sampai Outlet',
  LAUNDRY_SEDANG_DICUCI: 'Laundry Sedang Dicuci',
  LAUNDRY_SEDANG_DISETRIKA: 'Laundry Sedang Disetrika',
  LAUNDRY_SEDANG_DI_PACKING: 'Laundry Sedang Di Packing',
  MENUNGGU_PEMBAYARAN: 'Menunggu Pembayaran',
  LAUNDRY_SIAP_DIANTAR: 'Laundry Siap Diantar',
  LAUNDRY_SEDANG_DIKIRIM_MENUJU_CUSTOMER: 'Laundry Sedang Dikirim Menuju Customer',
  MENUNGGU_KONFIRMASI_CUSTOMER: 'Menunggu Konfirmasi Customer',
  SELESAI: 'Laundry Telah Diterima Customer / Selesai',
  DIBATALKAN_CUSTOMER: 'Dibatalkan Customer',
  DALAM_PENANGANAN_KOMPLAIN: 'Dalam Penanganan Komplain',
};
