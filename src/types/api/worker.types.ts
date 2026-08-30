import type { ListQuery, PaginationMeta } from ".";

export type StationType = "WASHING" | "IRONING" | "PACKING";

export type WorkerAssignmentStatus = "QUEUED" | "ASSIGNED" | "IN_PROGRESS" | "ON_HOLD_BYPASS" | "COMPLETED";

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

export type WorkerAvailablePaginated = {
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
  assignedAt: string | null;
  status: WorkerAssignmentStatus;
  stationType: StationType;
};

// active dan state-state yang dibutuhkan

type WorkerActiveOrderItem = {
  orderItemId: string;
  laundryItem: { id: string; name: string };
};

type WorkerActiveBase = {
  id: string;
  stationType: StationType;
  assignedAt: string | null;
  startedAt: string | null;
  order: {
    id: string;
    orderCode: string;
  };
};

export type WorkerActiveAssigned = WorkerActiveBase & {
  status: "ASSIGNED";
  attempt: number;
  maxAttempt: number;
  canValidate: boolean;
  canRequestBypass: boolean;
  order: WorkerActiveBase["order"] & {
    items: WorkerActiveOrderItem[];
  };
};

export type WorkerActiveInProgress = WorkerActiveBase & {
  status: "IN_PROGRESS";
};

export type WorkerActiveOnHoldBypass = WorkerActiveBase & {
  status: "ON_HOLD_BYPASS";
};

export type WorkerActiveAssignment = WorkerActiveAssigned | WorkerActiveInProgress | WorkerActiveOnHoldBypass;

export type WorkerActiveResponse = WorkerActiveAssignment | null; // tujuan tidak digabung di atas ^ adalah agar semantik dan props tidak perlu memikirkan null lainnya.

// validate-quantity - ada di Active Assigned

export type WorkerValidatePayload = {
  items: {
    orderItemId: string;
    submittedQuantity: number;
  }[];
};

export type WorkerValidateResponse = {
  id: string;
  status: "IN_PROGRESS";
  stationType: StationType;
  startedAt: string | null;
  order: {
    id: string;
    orderCode: string;
  };
};

export type WorkerBypassPayload = WorkerValidatePayload;

export type WorkerBypassResponse = {
  id: string;
  status: "ON_HOLD_BYPASS";
  stationType: StationType;
  startedAt: string | null;
  order: {
    id: string;
    orderCode: string;
  };
};

export type WorkerCompleteResponse = {
  id: string;
  status: "COMPLETED";
  stationType: StationType;
  completedAt: string | null;
  order: {
    id: string;
    orderCode: string;
  };
};
