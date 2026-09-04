import type { ListQuery, PaginationMeta } from ".";

// dipakai di button
export type ClockInResponse = {
  id: string;
  attendanceDate: string;
  clockInAt: string;
  employeeId: string;
  outletId: string;
};

// dipakai di button juga
export type ClockOutResponse = {
  id: string;
  attendanceDate: string;
  clockOutAt: string;
  employeeId: string;
  outletId: string;
};

// dipakai di attendance status card
export type WorkStatus = "OFF_DUTY" | "AVAILABLE" | "BUSY";

export type AttendanceStatusResponse = {
  workStatus: WorkStatus | null;
  attendanceDate: string | null;
  clockInAt: string | null;
  clockOutAt: string | null;
  canClockIn: boolean;
  canClockOut: boolean;
  isCarryOver: boolean;
};

//

export type AttendanceHistoryItem = {
  id: string;
  attendanceDate: string;
  clockInAt: string | null;
  clockOutAt: string | null;
  employeeId: string;
  outletId: string;
  createdAt: string;
};

export type AttendanceHistorySummary = {
  period: string;
  totalDays: number;
  presentDays: number;
  absentDays: number;
};

export type AttendanceHistoryData = {
  attendanceHistory: AttendanceHistoryItem[];
  summary: AttendanceHistorySummary;
};
export interface AttendanceHistoryQuery extends Pick<ListQuery, "page" | "pageSize" | "sortOrder"> {
  period: string;
}

export type AttendanceHistoryPaginated = {
  success: boolean;
  message: string;
  data: AttendanceHistoryData;
  meta: PaginationMeta;
};
