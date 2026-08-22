export type DashboardSummary = {
  totalOrders: number;
  activeOrders: number;
  completedOrders: number;
  totalRevenue: number;
};

export type RevenueTrendItem = {
  date: string;
  revenue: number;
};

export type OrderOverviewItem = {
  status: string;
  total: number;
};

export type RecentOrderItem = {
  id: string;
  orderCode: string;
  customerName: string;
  status: string;
  createdAt: string;
};

export type PendingReceiveItem = {
  id: string;
  orderCode: string;
  customerName: string;
  createdAt: string;
};

export type PendingBypassItem = {
  id: string;
  orderId: string;
  orderCode: string;
  workerName: string;
  stationType: string;
  createdAt: string;
};

export type DashboardResponse = {
  summary: DashboardSummary;
  revenueTrend: RevenueTrendItem[];
  orderOverview: OrderOverviewItem[];
  recentOrders: RecentOrderItem[];

  pendingReceive: {
    total: number;
    items: PendingReceiveItem[];
  };

  pendingBypass: {
    total: number;
    items: PendingBypassItem[];
  };
};

export type DashboardQuery = {
  outletId?: string;
};