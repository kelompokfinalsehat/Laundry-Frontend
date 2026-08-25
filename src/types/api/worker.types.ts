import { ListQuery } from ".";

export type StationType = "WASHING" | "IRONING" | "PACKING";
export type WorkerAssignmentStatus = "QUEUED" | "ASSIGNED" | "IN_PROGRESS" | "ON_HOLD_BYPASS" | "COMPLETED";

export type WorkerAvailableAssignment = {
  id: string;
  stationType: StationType;
  order: {
    id: string;
    orderCode: string;
  };
  createdAt: string;
};

export interface WorkerAvailableQuery extends Pick<ListQuery, "page" | "pageSize"> {
  stationType?: StationType;
  sortOrder: "asc" | "desc";
}

export type WorkerClaimResponse = {
  id: string;
  stationType: StationType;
  assignedAt: string | null;
  status: WorkerAssignmentStatus;
  order: {
    id: string;
    orderCode: string;
  };
};
