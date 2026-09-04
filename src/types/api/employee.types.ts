import { AccountStatus, DriverAssignmentStatus, EmployeeRole, PaginatedResponse, PickupDeliveryType, SortOrder, StationType, WorkerAssignmentStatus, WorkStatus } from ".";

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

  role: Exclude<EmployeeRole, "OUTLET_ADMIN">;

  accountStatus: AccountStatus;

  workStatus: WorkStatus | null;

  workerTasks: OutletTeamWorkerTask[];

  driverTasks: OutletTeamDriverTask[];
};

export type AttendanceStatus = "NOT_CLOCKED_IN" | "CLOCKED_IN" | "CLOCKED_OUT";

export type OutletAttendanceSortBy = "name" | "clockInAt" | "clockOutAt";

export type OutletAttendanceQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  date?: Date;
  role?: Exclude<EmployeeRole, "OUTLET_ADMIN">;
  status?: AttendanceStatus;
  sortBy?: OutletAttendanceSortBy;
  sortOrder?: SortOrder;
};

export type OutletAttendanceItem = {
  employeeId: string;
  employeeName: string;
  employeeEmail: string;
  role: EmployeeRole;
  attendanceDate: string;
  clockInAt: string | null;
  clockOutAt: string | null;
  status: AttendanceStatus;
};

export type OutletAttendanceSummary = {
  totalEmployees: number;
  notClockedIn: number;
  clockedIn: number;
  clockedOut: number;
};

export type OutletAttendanceData = {
  summary: OutletAttendanceSummary;
  data: OutletAttendanceItem[];
};

export type OutletAttendanceResponse = {
  success: boolean;
  message: string;
  data: OutletAttendanceData;
  meta: PaginatedResponse<null>['meta']
};
