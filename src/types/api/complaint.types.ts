import type { PaginationMeta } from "./pagination.type";

export type ComplaintCategory =
  | "TIDAK_SESUAI"
  | "RUSAK"
  | "HILANG";

export type ComplaintStatus =
  | "OPEN"
  | "APPROVED"
  | "REJECTED";

export type ComplaintSortBy =
  | "createdAt"
  | "decidedAt";

export type SortOrder =
  | "asc"
  | "desc";

export type ComplaintQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: ComplaintStatus;
  category?: ComplaintCategory;
  startDate?: string;
  endDate?: string;
  sortBy?: ComplaintSortBy;
  sortOrder?: SortOrder;
};

export type ComplaintListCustomer = {
  id: string;
  name: string;
  email: string;
};

export type ComplaintListOrder = {
  id: string;
  orderCode: string;
  outletId: string;
};

export type ComplaintHandledBy = {
  id: string;
  name: string;
};

export type ComplaintListItem = {
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

  customer: ComplaintListCustomer;
  order: ComplaintListOrder;
  handledByUser: ComplaintHandledBy | null;
};

export type ComplaintDetailCustomer = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
};

export type ComplaintDetailOutlet = {
  id: string;
  name: string;
};

export type ComplaintDetailLaundryItem = {
  id: string;
  name: string;
};

export type ComplaintDetailOrderItem = {
  id: string;
  laundryItemId: string;
  quantity: number;
  laundryItem: ComplaintDetailLaundryItem;
};

export type ComplaintDetailBill = {
  id: string;
  weightKg: string;
  totalAmount: string;
  paymentStatus: "UNPAID" | "PAID";
};

export type ComplaintDetailOrder = {
  id: string;
  orderCode: string;
  outlet: ComplaintDetailOutlet;
  orderItems: ComplaintDetailOrderItem[];
  bill: ComplaintDetailBill | null;
};

export type ComplaintDetail = {
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

  customer: ComplaintDetailCustomer;
  order: ComplaintDetailOrder;
  handledByUser: ComplaintHandledBy | null;
};

export type DecideComplaintPayload = {
  decision: "APPROVED" | "REJECTED";
  responseNote: string;
};