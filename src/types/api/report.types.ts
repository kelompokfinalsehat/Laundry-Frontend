import { EmployeeRole, PaginatedResponse, SortOrder, StationType } from ".";

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
  totalWeightKg: number;
  uniqueCustomers: number;
};

export type SalesComparison = {
  previousPeriod: {
    startDate: string;
    endDate: string;
    totalRevenue: number;
    totalOrders: number;
    averageOrderValue: number;
  };
  revenueChangePercent: number | null;
  orderChangePercent: number | null;
  averageOrderValueChangePercent: number | null;
};

export type SalesTrendItem = {
  label: string;
  revenue: number;
  orders: number;
  totalWeightKg: number;
};

export type SalesBreakdownItem = {
  outletId: string;
  outletName: string;
  revenue: number;
  orders: number;
  averageOrderValue: number;
  totalWeightKg: number;
  uniqueCustomers: number;
  revenueSharePercent: number;
};

export type SalesHighlight = {
  outletId: string;
  outletName: string;
  revenue: number;
  orders: number;
} | null;

export type SalesReport = {
  period: { type: SalesPeriod; startDate: string; endDate: string };
  summary: SalesSummary;
  comparison: SalesComparison;
  trend: SalesTrendItem[];
  breakdown: SalesBreakdownItem[];
  highlights: { topOutlet: SalesHighlight; peak: SalesTrendItem | null };
};
export type EmployeePerformanceSortBy = "completedJobs" | "name";


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
  pickupJobs: number;
  deliveryJobs: number;
  washingJobs: number;
  ironingJobs: number;
  packingJobs: number;
  averageCompletionMinutes: number | null;
};

export type EmployeePerformanceSummary = {
  totalEmployees: number;
  totalCompletedJobs: number;
  averageJobsPerEmployee: number;
  workerCompletedJobs: number;
  driverCompletedJobs: number;
  topPerformer: {
    employeeId: string;
    employeeName: string;
    role: EmployeeRole;
    completedJobs: number;
  } | null;
};

export type EmployeePerformanceData = {
  summary: EmployeePerformanceSummary;
  data: EmployeePerformanceItem[];
};

export type PaginatedEmployeePerformanceResponse = {
  success: boolean;
  message: string;
  data: EmployeePerformanceData;
  meta: PaginatedResponse<null>["meta"];
};
