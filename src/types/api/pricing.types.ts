import type { PaginationMeta } from "./pagination.type";

export type DecimalString = string;

export type LaundryPricing = {
  id: string;
  pricePerKg: DecimalString;
  deletedAt: string | null;
  createdAt: string;
};

export type CreateLaundryPricingPayload = {
  pricePerKg: number;
};

export type UpdateLaundryPricingPayload = {
  pricePerKg: number;
};

export type ShippingRateSortBy =
  | "price"
  | "maxDistanceMeters"
  | "createdAt";

export type SortOrder =
  | "asc"
  | "desc";

export type ShippingRateQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: ShippingRateSortBy;
  sortOrder?: SortOrder;
};

export type ShippingRate = {
  id: string;
  maxDistanceMeters: number;
  price: DecimalString;
  deletedAt: string | null;
  createdAt: string;
};

export type CreateShippingRatePayload = {
  maxDistanceMeters: number;
  price: number;
};

export type UpdateShippingRatePayload = {
  maxDistanceMeters?: number;
  price?: number;
};