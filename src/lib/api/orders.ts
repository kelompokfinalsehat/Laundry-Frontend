import { apiFetch } from "./client";
import { buildQueryString } from "@/lib/query/buildQueryString";
import type { ListQuery, OrderListItem, PaginatedResponse } from "@/types/api";

export function getOrders(query: ListQuery) {
  return apiFetch<PaginatedResponse<OrderListItem>>(
    `/orders?${buildQueryString(query)}`,
  );
}
