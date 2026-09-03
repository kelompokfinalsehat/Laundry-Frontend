export type Outlet = {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type OutletQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: "name" | "createdAt";
  sortOrder?: "asc" | "desc";
};
export type CreateOutletPayload = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
};

export type UpdateOutletPayload = {
  name?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
};