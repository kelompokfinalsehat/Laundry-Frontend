export type Role =
  | "CUSTOMER"
  | "WORKER"
  | "DRIVER"
  | "OUTLET_ADMIN"
  | "SUPER_ADMIN";

export type RegisterCustomerResponse = {
  customerId: string;
  email: string;
  message: string;
};

export type GoogleLoginPayload = { idToken: string };

export type LoginUser = {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER";
  isEmailVerified: boolean;
};

export type LoginCustomerResponse = {
  user: LoginUser;
  homeUrl: string;
};

export type EmployeeLoginResponse = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type VerifyEmailPayload = {
  token: string;
  name: string;
  password: string;
};

export type AcceptInvitationPayload = {
  token: string;
  password: string;
};

export type VerificationPayload = {
  email: string;
};

export type MessageResponse = {
  message: string;
};

export type ResetPasswordCustomerPayload = {
  token: string;
  newPassword: string;
};

export type Me = {
  id: string;
  name: string;
  email: string;
  role: Role;
  accountType: "customer" | "employee";
  phone: string | null;
  profilePhotoUrl: string | null;
  isEmailVerified: boolean;
  authProvider: string;
};

export type MeResponse = {
  success: true;
  data: Me;
};

export type AccountStatus = "INVITED" | "ACTIVE" | "INACTIVE";
export type AttendanceStatus = "OFF_DUTY" | "ON_DUTY";
export type AvailabilityStatus = "AVAILABLE" | "BUSY";
export type PaymentStatus =
  | "UNPAID"
  | "PENDING"
  | "PAID"
  | "FAILED"
  | "CANCELLED"
  | "EXPIRED";
export type InternalOrderState = "ON_HOLD_BYPASS" | "PAUSED_OFF_HOURS";
export type CustomerOrderStatus =
  | "MENUNGGU_PENJEMPUTAN_DRIVER"
  | "LAUNDRY_SEDANG_MENUJU_OUTLET"
  | "LAUNDRY_TELAH_SAMPAI_OUTLET"
  | "LAUNDRY_SEDANG_DICUCI"
  | "LAUNDRY_SEDANG_DISETRIKA"
  | "LAUNDRY_SEDANG_DI_PACKING"
  | "MENUNGGU_PEMBAYARAN"
  | "LAUNDRY_SIAP_DIANTAR"
  | "LAUNDRY_SEDANG_DIKIRIM_MENUJU_CUSTOMER"
  | "MENUNGGU_KONFIRMASI_CUSTOMER"
  | "SELESAI"
  | "DIBATALKAN_CUSTOMER"
  | "DALAM_PENANGANAN_KOMPLAIN";

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  accountStatus: AccountStatus;
  outletId?: string;
  stationType?: "WASHING" | "IRONING" | "PACKING";
  isEmailVerified?: boolean;
}

export interface ListQuery {
  page: number;
  pageSize: 10 | 20 | 50;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  filters?: Record<string, string | number | boolean | undefined>;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export interface OrderListItem {
  id: string;
  orderNumber: string;
  customerName: string;
  outletName: string;
  status: CustomerOrderStatus;
  paymentStatus: PaymentStatus;
  createdAt: string;
  total?: number;
}

export type EmployeeRole = "OUTLET_ADMIN" | "WORKER" | "DRIVER";
export type WorkStatus = "OFF_DUTY" | "AVAILABLE" | "BUSY";
export type BypassStatus = "PENDING" | "APPROVED" | "REJECTED";
export type StationType = "WASHING" | "IRONING" | "PACKING";
export type SortOrder = "asc" | "desc";
export type ComplaintCategory = "TIDAK_SESUAI" | "RUSAK" | "HILANG";

export type ComplaintStatus = "OPEN" | "APPROVED" | "REJECTED";

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
export type WorkerAssignmentStatus =
  | "QUEUED"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "ON_HOLD_BYPASS"
  | "COMPLETED";