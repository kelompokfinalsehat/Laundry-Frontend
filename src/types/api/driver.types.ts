import { ListQuery } from ".";

export type TaskType = "PICKUP" | "DELIVERY";
export type DriverAssingmentStatus = "QUEUED" | "ASSIGNED" | "IN_PROGRESS" | "COMPLETED";

export type DriverAvailableAssignment = {
  id: string;
  taskType: TaskType;
  order: {
    id: string;
    orderCode: string;
  };
  createdAt: string;
};

export interface DriverAvailableQuery extends Pick<ListQuery, "page" | "pageSize"> {
  taskType?: TaskType;
  sortOrder: "asc" | "desc";
}

export type DriverClaimResponse = {
  id: string;
  taskType: TaskType;
  assignedAt: string | null;
  status: DriverAssingmentStatus;
  order: {
    id: string;
    orderCode: string;
  };
};
