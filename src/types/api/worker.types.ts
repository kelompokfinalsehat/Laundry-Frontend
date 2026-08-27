import type { ListQuery } from ".";

export type StationType = "WASHING" | "IRONING" | "PACKING";

export type WorkerAssignmentStatus = "QUEUED" | "ASSIGNED" | "IN_PROGRESS" | "ON_HOLD_BYPASS" | "COMPLETED";

/* =========================================================
   AVAILABLE
========================================================= */

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

/* =========================================================
   CLAIM
========================================================= */

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

/* =========================================================
   ACTIVE
========================================================= */

export type WorkerActiveItem = {
  orderItemId: string;
  laundryItem: {
    id: string;
    name: string;
  };
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

export type WorkerActiveAssignment =
  | (WorkerActiveBase & {
      status: "ASSIGNED";
      order: WorkerActiveBase["order"] & {
        items: WorkerActiveItem[];
      };
    })
  | (WorkerActiveBase & {
      status: "IN_PROGRESS" | "ON_HOLD_BYPASS";
    });

/* =========================================================
   VALIDATE QUANTITIES
========================================================= */

export type WorkerValidateQuantityItem = {
  orderItemId: string;
  submittedQuantity: number;
};

export type WorkerValidateQuantitiesPayload = {
  items: WorkerValidateQuantityItem[];
};

export type WorkerValidateQuantitiesResponse = {
  id: string;
  stationType: StationType;
  status: "IN_PROGRESS";
  startedAt: string;
  order: {
    id: string;
    orderCode: string;
  };
};

/* =========================================================
   BYPASS
========================================================= */

export type WorkerRequestBypassPayload = {
  items: WorkerValidateQuantityItem[];
};

export type WorkerRequestBypassResponse = {
  id: string;
  stationType: StationType;
  status: "ON_HOLD_BYPASS";
  startedAt: string | null;
  order: {
    id: string;
    orderCode: string;
  };
};

/* =========================================================
   COMPLETE
========================================================= */

export type WorkerCompleteResponse = {
  id: string;
  stationType: StationType;
  status: "COMPLETED";
  completedAt: string;
  order: {
    id: string;
    orderCode: string;
  };
};
