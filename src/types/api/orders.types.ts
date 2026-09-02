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
  complaint: Complaint | null;
  timeline: TimelineEntry[];
  allowedActions: {
    canPay: boolean;
    canConfirmReceived: boolean;
    canFileComplaint: boolean;
  };
};

export type CreatePaymentResponse = {
  paymentId: string;
  gatewayOrderId: string;
  snapToken: string;
  redirectUrl: string;
};

export type PaymentAttempt = {
  id: string;
  status: string;
  amount: number;
  redirectUrl: string;
  isFinal: boolean;
  paidAt: string | null;
  billPaymentStatus: "PAID" | "UNPAID";
};

export type ConfirmResponse = {
  success: true;
  message: string;
};



export const COMPLAINT_CATEGORIES = ["TIDAK_SESUAI", "RUSAK", "HILANG"] as const;
 
export type ComplaintCategory = (typeof COMPLAINT_CATEGORIES)[number];
 
export const COMPLAINT_CATEGORY_LABELS: Record<ComplaintCategory, string> = {
  TIDAK_SESUAI: "Tidak Sesuai Pesanan",
  RUSAK: "Barang Rusak",
  HILANG: "Barang Hilang",
};
 
export type ComplaintStatus = "OPEN" | "IN_REVIEW" | "RESOLVED" | "REJECTED";
 
export type Complaint = {
  id: string;
  orderId: string;
  customerId: string;
  category: ComplaintCategory;
  description: string;
  proofPhotoUrl: string;
  status: ComplaintStatus;
  handledBy: string | null;
  responseNote: string | null;
  decidedAt: string | null;
  createdAt: string;
};
 