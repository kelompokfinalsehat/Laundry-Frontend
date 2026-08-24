import type { ListQuery } from ".";

export type WorkStatus = "OFF_DUTY" | "AVAILABLE" | "BUSY";

export type ClockInResponse = {
  id: string;
  attendanceDate: string;
  clockInAt: string | null;
  employeeId: string;
  outletId: string;
};

export type ClockOutResponse = {
  id: string;
  attendanceDate: string;
  clockOutAt: string | null;
  employeeId: string;
  outletId: string;
};

export type AttendanceHistoryItem = {  id: string;
  attendanceDate: string;
  clockInAt: string | null;
  clockOutAt: string | null;
  employeeId: string;
  outletId: string;
  createdAt: string;
};

export type AttendancePeriod = "THIS_WEEK" | "THIS_MONTH";

export interface AttendanceHistoryQuery extends Pick<ListQuery, "page" | "pageSize" | "sortOrder"> {
  period?: AttendancePeriod;
}

export type AttendanceStatusResponse = {
  workStatus: WorkStatus | null;
  attendanceDate: string | null;
  clockInAt: string | null;
  clockOutAt: string | null;
  canClockIn: boolean;
  canClockOut: boolean;
  isCarryOver : boolean;
};
