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
    addressSnapshot: string;
    pickupScheduledAt?: string;
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

// active

type DriverActiveBase = {
  id: string;

  order: {
    id: string;
    orderCode: string;
  };
};

type CustomerDestination = {
  name: string;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
};

type OutletDestination = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
};

export type DriverActivePickupAssigned = DriverActiveBase & {
  taskType: "PICKUP";
  status: "ASSIGNED";
  state: "PICKUP_ASSIGNED";
  action: "START_PICKUP";
  destination: CustomerDestination;
  pickupScheduledAt: string;
};

export type DriverActivePickupToCustomer = DriverActiveBase & {
  taskType: "PICKUP";
  status: "IN_PROGRESS";
  state: "PICKUP_TO_CUSTOMER";
  action: "CONFIRM_PICKUP";
  destination: CustomerDestination;
  pickupScheduledAt: string;
};

export type DriverActivePickupToOutlet = DriverActiveBase & {
  taskType: "PICKUP";
  status: "IN_PROGRESS";
  state: "PICKUP_TO_OUTLET";
  action: null;
  destination: OutletDestination;
  pickedUpAt: string;
};

export type DriverActiveDeliveryAssigned = DriverActiveBase & {
  taskType: "DELIVERY";
  status: "ASSIGNED";
  state: "DELIVERY_ASSIGNED";
  action: "START_DELIVERY";
  destination: CustomerDestination;
};

export type DriverActiveDeliveryToCustomer = DriverActiveBase & {
  taskType: "DELIVERY";
  status: "IN_PROGRESS";
  state: "DELIVERY_TO_CUSTOMER";
  action: "COMPLETE_DELIVERY";
  destination: CustomerDestination;
};

export type DriverActiveAssignment =
  | DriverActiveDeliveryAssigned
  | DriverActiveDeliveryToCustomer
  | DriverActivePickupAssigned
  | DriverActivePickupToCustomer
  | DriverActivePickupToOutlet;

export type DriverActiveResponse = DriverActiveAssignment | null;
// Start
export type DriverStartResponse = {
  id: string;
  taskType: TaskType;
  status: DriverAssignmentStatus;
};

// pickup-collected
export type DriverPickupCollectedResponse = {
  id: string;
  taskType: TaskType;
  status: DriverAssignmentStatus;
  pickedUpAt: string;
};

export type DriverCompleteResponse = {
  id: string;
  taskType: TaskType;
  status: DriverAssignmentStatus;
  deliveredAt: string;
};

// history
export type DriverHistoryItem = {
  id: string;
  completedAt: string;
  taskType: TaskType;
  order: {
    id: string;
    orderCode: string;
  };
};

export interface DriverHistoryQuery extends Pick<ListQuery, "page" | "pageSize" | "sortOrder"> {
  taskType?: TaskType;
  period: string;
}

export type DriverHistoryPaginated = {
  success: boolean;
  message: string;
  data: {
    historyList: DriverHistoryItem[];
    summary: {
      totalCompleted: number;
    };
  };
  meta: PaginationMeta;
};

export type DriverHistoryDetailResponse = {
  id: string;
  outlet: {
    name: string;
    address: string;
  };
  order: {
    customer: {
      name: string;
    };
    orderCode: string;
    addressSnapshot: string;
    addressPhoneSnapshot: string;
  };
  status: DriverAssignmentStatus;
  completedAt: string | null;
  taskType: TaskType;
  assignedAt: string | null;
  pickedUpAt: string | null;
  deliveredAt: string | null;
};
