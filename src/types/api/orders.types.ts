
import type { OrderStatusGroupKey } from "@/lib/constants/order";

export type CreateOrderResponse = {
  id: string;
  orderCode: string;
  customerStatus: string;
  outletId: string;
  distanceMeters: number;
  pickupDate: string;
  pickupScheduledAt: string;
};
 
export type OrderListItem = {
  id: string;
  orderCode: string;
  customerStatus: string;
  customerStatusLabel: string;
  pickupDate: string;
  totalAmount: number | null;
  paymentStatus: string | null;
};
 
 
export type ListOrderQuery = {
  page: number;
  limit: number;
  search?: string;
  statusGroup?: OrderStatusGroupKey;
  startDate?: string;
  endDate?: string;
  sortBy: "createdAt" | "pickupDate";
  sortOrder: "asc" | "desc";
};

export type ListOrderResponse = {
  orders: OrderListItem[];
  meta: {
    page: number;
    limit: number;
    totalData: number;
    totalPage: number;
  };
};

export type TimelineEntry = {
  status: string;
  label: string;
  timestamp: string | null;
  isCompleted: boolean;
  isCurrent: boolean;
};
 
export type OrderDetail = {
  id: string;
  orderCode: string;
  customerStatus: string;
  customerStatusLabel: string;
  addressSnapshot: string;
  addressPhoneSnapshot: string;
  pickupDate: string;
  pickupScheduledAt: string;
  bill: {
    weightKg: number | null;
    totalAmount: number | null;
    paymentStatus: string;
    pricePerKgSnapshot: number;
    shippingFeeSnapshot: number;
  } | null;
  orderItems: { id: string; quantity: number; laundryItem: { name: string } }[];
  complaint: { category: string; status: string } | null;
  timeline: TimelineEntry[];
  allowedActions: {
    canPay: boolean;
    canConfirmReceived: boolean;
    canFileComplaint: boolean;
  };
};