import type { PaginationMeta } from "./pagination.type";

export type DecimalString = string;

export type CustomerStatus =
  | "SCHEDULED"
  | "WAITING_DRIVER_PICKUP"
  | "ON_THE_WAY_TO_OUTLET"
  | "ARRIVED_AT_OUTLET"
  | "WASHING"
  | "IRONING"
  | "PACKING"
  | "WAITING_PAYMENT"
  | "OVERDUE"
  | "READY_FOR_DELIVERY"
  | "ON_THE_WAY_TO_CUSTOMER"
  | "WAITING_CUSTOMER_CONFIRMATION"
  | "RECEIVED_BY_CUSTOMER";

export type BillPaymentStatus =
  | "UNPAID"
  | "PAID";

export type PickupDeliveryType =
  | "PICKUP"
  | "DELIVERY";

export type DriverAssignmentStatus =
  | "QUEUED"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "COMPLETED";

export type StationType =
  | "WASHING"
  | "IRONING"
  | "PACKING";

export type WorkerAssignmentStatus =
  | "QUEUED"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "ON_HOLD_BYPASS"
  | "COMPLETED";

export type ComplaintCategory =
  | "TIDAK_SESUAI"
  | "RUSAK"
  | "HILANG";

export type ComplaintStatus =
  | "OPEN"
  | "APPROVED"
  | "REJECTED";

export type OrderSortBy =
  | "createdAt"
  | "pickupScheduledAt"
  | "orderCode";

export type SortOrder =
  | "asc"
  | "desc";

export type OrderQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  outletId?: string;
  customerStatus?: CustomerStatus;
  paymentStatus?: BillPaymentStatus;
  startDate?: string;
  endDate?: string;
  sortBy?: OrderSortBy;
  sortOrder?: SortOrder;
};

export type OrderCustomer = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string | null;
};

export type OrderOutlet = {
  id: string;
  name: string;
};

export type OrderBill = {
  id: string;
  weightKg: DecimalString;
  totalAmount: DecimalString;
  paymentStatus: BillPaymentStatus;
};

export type OrderListItem = {
  id: string;
  orderCode: string;
  customerStatus: CustomerStatus;

  pickupDate: string;
  pickupScheduledAt: string;

  receivedAt: string | null;

  createdAt: string;
  updatedAt: string;

  customer: OrderCustomer;
  outlet: OrderOutlet;
  bill: OrderBill | null;
};

export type OrderLaundryItem = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type OrderItem = {
  id: string;
  orderId: string;
  laundryItemId: string;
  quantity: number;
  laundryItem: OrderLaundryItem;
};

export type OrderDriver = {
  id: string;
  name: string;
  role: "DRIVER";
};

export type OrderDriverAssignment = {
  id: string;
  orderId: string;
  driverId: string | null;
  outletId: string;

  taskType: PickupDeliveryType;
  status: DriverAssignmentStatus;

  assignedAt: string | null;
  pickedUpAt: string | null;
  deliveredAt: string | null;
  completedAt: string | null;

  createdAt: string;
  updatedAt: string;

  driver: OrderDriver | null;
};

export type OrderWorker = {
  id: string;
  name: string;
  role: "WORKER";
};

export type OrderWorkerAssignment = {
  id: string;
  orderId: string;
  workerId: string | null;
  outletId: string;

  stationType: StationType;
  status: WorkerAssignmentStatus;

  assignedAt: string | null;
  startedAt: string | null;
  completedAt: string | null;

  createdAt: string;
  updatedAt: string;

  worker: OrderWorker | null;
};

export type OrderComplaint = {
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

export type OrderDetail = {
  id: string;
  orderCode: string;

  customerId: string;
  outletId: string;

  addressSnapshot: string;
  addressPhoneSnapshot: string;

  addressLatitude: DecimalString;
  addressLongitude: DecimalString;
  distanceMeters: DecimalString;

  pickupDate: string;
  pickupScheduledAt: string;

  customerStatus: CustomerStatus;

  paidAt: string | null;
  receivedAt: string | null;
  receivedBy: string | null;

  createdAt: string;
  updatedAt: string;

  customer: OrderCustomer;
  outlet: OrderOutlet;
  bill: OrderBill | null;

  orderItems: OrderItem[];
  driverAssignments: OrderDriverAssignment[];
  workerAssignments: OrderWorkerAssignment[];
  complaint: OrderComplaint | null;
};

export type OrdersResponse = {
  data: OrderListItem[];
  meta: PaginationMeta;
};

export type CreateOrderItemPayload = {
  laundryItemId: string;
  quantity: number;
};

export type CreateOrderPayload = {
  weightKg: number;
  items: CreateOrderItemPayload[];
};