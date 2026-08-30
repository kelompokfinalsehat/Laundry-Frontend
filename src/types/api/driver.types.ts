import type { ListQuery, PaginationMeta } from ".";

export type TaskType = "PICKUP" | "DELIVERY";

export type DriverAssignmentStatus = "QUEUED" | "ASSIGNED" | "IN_PROGRESS" | "COMPLETED";

// available
export type DriverAvailableItem = {
  id: string;
  createdAt: string;
  order: {
    id: string;
    orderCode: string;
  };
  taskType: TaskType;
};

export interface DriverAvailableQuery extends Pick<ListQuery, "page" | "pageSize" | "sortOrder"> {
  taskType?: TaskType;
}

export type DriverAvailablePaginated = {
  success: boolean;
  message: string;
  data: DriverAvailableItem[];
  meta: PaginationMeta;
};

// Claim
export type DriverClaimResponse = {
  id: string;
  order: {
    id: string;
    orderCode: string;
  };
  taskType: TaskType;
  assignedAt: string | null;
  status: DriverAssignmentStatus;
};
