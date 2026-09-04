import { BypassStatus, SortOrder, StationType, WorkerAssignmentStatus } from ".";


export type BypassSortBy = "createdAt" | "decidedAt";

export type BypassQuery = {
  page?: number;

  pageSize?: number;

  search?: string;

  status?: BypassStatus;

  stationType?: StationType;

  sortBy?: BypassSortBy;

  sortOrder?: SortOrder;
};

export type BypassListItem = {
  order: {
    id: string;
    outlet: {
      id: string;
      name: string;
    };
    outletId: string;
    orderCode: string;
  };
  workerAssignment: {
    id: string;
    worker?: {
      id: string;
      name: string;
    } 
    status: WorkerAssignmentStatus;
    stationType: StationType;
  };
  requestedByUser: {
    id: string;
    name: string;
  };
  decidedByUser?: {
    id: string;
    name: string;
  };
  id: string;
  createdAt: string;
  orderId: string;
  status: BypassStatus;
  stationType: StationType;
  decidedAt: string | null;
  workerAssignmentId: string;
  requestedBy: string;
  quantityDiffJson: string | null;
  decidedBy: string | null;
  approvalNote: string | null;
};

export type QuantityDifference = {
  orderItemId: string;

  itemName: string;

  officialQuantity: number;

  submittedQuantity: number;

  difference: number;
};

export type BypassItem = {
  id: string;
  createdAt: string;
  orderId: string;
  status: BypassStatus;
  stationType: StationType;
  decidedAt: string | null;
  workerAssignmentId: string;
  requestedBy: string;
  quantityDiffJson: string | null;
  decidedBy: string | null;
  approvalNote: string | null;
};

export type BypassDetail = {
  id: string;

  order: {
    id: string;

    orderCode: string;
  };

  stationType: StationType;

  worker: {
    id: string;

    name: string;
  };

  status: BypassStatus;

  differences: QuantityDifference[];

  createdAt: string;

  decidedAt: string | null;

  decidedBy: {
    id: string;

    name: string;
  } | null;
};

export type ApproveBypassPayload = {
  password: string;
  problemNote: string;
};
