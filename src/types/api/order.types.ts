import {
  BillPaymentStatus,
  ComplaintCategory,
  ComplaintStatus,
  CustomerStatus,
  DriverAssignmentStatus,
  PaginatedResponse,
  PickupDeliveryType,
  SortOrder,
  StationType,
  WorkerAssignmentStatus,
} from ".";

export type DecimalString = string;

export type OrderSortBy = "createdAt" | "pickupScheduledAt" | "orderCode";

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
  phone: string | null;
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
  laundryCost: DecimalString;
  shippingCost: DecimalString;
  paidAt: DecimalString
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
  meta: PaginatedResponse<OrderLaundryItem>["meta"];
};

export type CreateOrderItemPayload = {
  laundryItemId: string;
  quantity: number;
};

export type CreateOrderPayload = {
  weightKg: number;
  items: CreateOrderItemPayload[];
};
