import type { ListQuery } from ".";

export type TaskType =
  | "PICKUP"
  | "DELIVERY";

export type DriverAssignmentStatus =
  | "QUEUED"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "COMPLETED";

// compatibility kalau kode lama masih pakai typo
export type DriverAssingmentStatus =
  DriverAssignmentStatus;

/* =========================================================
   AVAILABLE
========================================================= */

export type DriverAvailableAssignment = {
  id: string;

  taskType: TaskType;

  order: {
    id: string;
    orderCode: string;
  };

  createdAt: string;
};

export interface DriverAvailableQuery
  extends Pick<
    ListQuery,
    "page" | "pageSize"
  > {
  taskType?: TaskType;
  sortOrder: "asc" | "desc";
}

/* =========================================================
   CLAIM
========================================================= */

export type DriverClaimResponse = {
  id: string;

  taskType: TaskType;

  assignedAt: string | null;

  status: "ASSIGNED";

  order: {
    id: string;
    orderCode: string;
  };
};

/* =========================================================
   ACTIVE
========================================================= */

export type DriverActiveState =
  | "PICKUP_ASSIGNED"
  | "PICKUP_TO_CUSTOMER"
  | "PICKUP_TO_OUTLET"
  | "DELIVERY_ASSIGNED"
  | "DELIVERY_TO_CUSTOMER";

export type DriverActiveAction =
  | "START_PICKUP"
  | "CONFIRM_PICKUP"
  | "START_DELIVERY"
  | "COMPLETE_DELIVERY"
  | null;

export type DriverDestination = {
  name: string;

  address: string;

  phone?: string;

  latitude: number;

  longitude: number;
};

export type DriverActiveAssignment = {
  id: string;

  taskType: TaskType;

  status:
    | "ASSIGNED"
    | "IN_PROGRESS";

  order: {
    id: string;
    orderCode: string;
  };

  state: DriverActiveState;

  action: DriverActiveAction;

  destination: DriverDestination;

  pickupScheduledAt?: string | null;

  message?: string;
};

/* =========================================================
   START
========================================================= */

export type DriverStartResponse = {
  id: string;

  taskType: TaskType;

  status: "IN_PROGRESS";
};

/* =========================================================
   PICKUP COLLECTED
========================================================= */

export type DriverPickupCollectedResponse = {
  id: string;

  taskType: "PICKUP";

  status: "IN_PROGRESS";

  pickedUpAt: string;
};

/* =========================================================
   COMPLETE DELIVERY
========================================================= */

export type DriverCompleteDeliveryResponse = {
  id: string;

  taskType: "DELIVERY";

  status: "COMPLETED";

  deliveredAt: string;
};