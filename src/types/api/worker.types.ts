import type { ListQuery, PaginationMeta } from ".";

export type StationType = "WASHING" | "IRONING" | "PACKING";

export type WorkerAssignmentStatus =
  | "QUEUED"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "ON_HOLD_BYPASS"
  | "COMPLETED";

// available
export type WorkerAvailableItem = {
  id: string;
  stationType: StationType;
  order: {
    id: string;
    orderCode: string;
  };
  createdAt: string;
};

export interface WorkerAvailableQuery extends Pick<ListQuery, "page" | "pageSize" | "sortOrder"> {
  stationType?: StationType;
}

export type WorkerkAvailablePaginated = {
  success: boolean;
  message: string;
  data: WorkerAvailableItem[];
  meta: PaginationMeta;
};

// claim
export type WorkerClaimResponse = {
  id: string;
  order: {
    id: string;
    orderCode: string;
  };
  assignedAt: Date | null;
  status: WorkerAssignmentStatus;
  stationType: StationType;
};
