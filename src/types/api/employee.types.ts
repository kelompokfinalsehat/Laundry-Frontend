import {
  AccountStatus,
  DriverAssignmentStatus,
  EmployeeRole,
  PickupDeliveryType,
  SortOrder,
  StationType,
  WorkerAssignmentStatus,
  WorkStatus,
} from ".";

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

export type OutletTeamSortBy = "name" | "role" | "workStatus";

export type OutletTeamQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  role?: EmployeeRole;
  workStatus?: WorkStatus;
  stationType?: StationType;
  sortBy?: OutletTeamSortBy;
  sortOrder?: SortOrder;
};

export type OutletTeamWorkerTask = {
  id: string;
  stationType: StationType;
  status: WorkerAssignmentStatus;
  assignedAt: string;
  startedAt: string | null;
};

export type OutletTeamDriverTask = {
  id: string;
  taskType: PickupDeliveryType;
  status: DriverAssignmentStatus;
  assignedAt: string;
  pickedUpAt: string | null;
};

export type OutletTeamItem = {
  id: string;
  name: string;
  email: string;

  role: Exclude<EmployeeRole, "OUTLET_ADMIN">

  accountStatus: AccountStatus;

  workStatus: WorkStatus | null;

  workerTasks: OutletTeamWorkerTask[];

  driverTasks: OutletTeamDriverTask[];
};
