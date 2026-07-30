import { Badge } from '@mantine/core';
import { CUSTOMER_STATUS_LABEL } from '@/lib/constants/status';
import type { CustomerOrderStatus } from '@/types/api';

const colors: Partial<Record<CustomerOrderStatus, string>> = {
  MENUNGGU_PEMBAYARAN: 'orange', LAUNDRY_SIAP_DIANTAR: 'teal', SELESAI: 'green',
  DIBATALKAN_CUSTOMER: 'red', DALAM_PENANGANAN_KOMPLAIN: 'grape',
};
export function StatusBadge({ status }: { status: CustomerOrderStatus }) {
  return <Badge color={colors[status] ?? 'blue'} variant="light">{CUSTOMER_STATUS_LABEL[status]}</Badge>;
}
