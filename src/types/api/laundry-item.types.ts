import { PaginationMeta } from "./pagination.type";


export type LaundryItem = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type LaundryItemQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: "name" | "createdAt";
  sortOrder?: "asc" | "desc";
};

export type CreateLaundryItemPayload = {
  name: string;
};

export type UpdateLaundryItemPayload = {
  name: string;
};

export type LaundryItemListResponse = {
  data: LaundryItem[];
  meta: PaginationMeta;
};

export type LaundryItemResponse = {
  data: LaundryItem;
};