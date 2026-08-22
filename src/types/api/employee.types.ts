import type { PaginationMeta } from "./pagination.type";

export type EmployeeRole = "OUTLET_ADMIN" | "WORKER" | "DRIVER";

export type AccountStatus = "INVITED" | "ACTIVE" | "INACTIVE";

export type WorkStatus = "OFF_DUTY" | "AVAILABLE" | "BUSY";

export type EmployeeOutlet = {
  id: string;
  name: string;
};

export type Employee = {
  id: string;
  name: string;
  email: string;
  role: EmployeeRole;
  accountStatus: AccountStatus;
  workStatus: WorkStatus | null;
  currentOutletId: string | null;
  currentOutlet: EmployeeOutlet | null;
  createdAt: string;
  updatedAt: string;
};

export type EmployeeQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  role?: EmployeeRole;
  accountStatus?: AccountStatus;
  workStatus?: WorkStatus;
  outletId?: string;
  sortBy?: "name" | "email" | "role" | "accountStatus" | "createdAt";
  sortOrder?: "asc" | "desc";
};

export type EmployeeListResponse = {
  data: Employee[];
  meta: PaginationMeta;
};

export type InviteEmployeePayload = {
  name: string;
  email: string;
  role: EmployeeRole;
};

export type UpdateEmployeePayload = {
  name?: string;
  role?: EmployeeRole;
};

export type AssignEmployeePayload = {
  employeeId: string;
  outletId: string;
};
