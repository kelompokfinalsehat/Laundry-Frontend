import type { PaginationMeta } from "./pagination.type";

export type SalesPeriod = "DAY" | "MONTH" | "YEAR";

export type SalesQuery = {
  period: SalesPeriod;
  date?: string;
  month?: number;
  year?: number;
  outletId?: string;
};

export type SalesSummary = {
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
};

export type SalesTrendItem = {
  label: string;
  revenue: number;
  orders: number;
};

export type SalesBreakdownItem = {
  outletId: string;
  outletName: string;
  revenue: number;
  orders: number;
};

export type SalesReport = {
  period: {
    type: SalesPeriod;
    startDate: string;
    endDate: string;
  };
  summary: SalesSummary;
  trend: SalesTrendItem[];
  breakdown: SalesBreakdownItem[];
};

export type EmployeeRole = "DRIVER" | "WORKER";

export type StationType = "WASHING" | "IRONING" | "PACKING";

export type EmployeePerformanceSortBy = "completedJobs" | "name";

export type SortOrder = "asc" | "desc";

export type EmployeePerformanceQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  role?: EmployeeRole;
  stationType?: StationType;
  startDate?: string;
  endDate?: string;
  outletId?: string;
  sortBy?: EmployeePerformanceSortBy;
  sortOrder?: SortOrder;
};

export type EmployeePerformanceItem = {
  employeeId: string;
  employeeName: string;
  role: EmployeeRole;
  completedJobs: number;
};

export type EmployeePerformanceSummary = {
  totalEmployees: number;
  totalCompletedJobs: number;
};

export type EmployeePerformanceData = {
    summary: EmployeePerformanceSummary;
    data: EmployeePerformanceItem[];
};
