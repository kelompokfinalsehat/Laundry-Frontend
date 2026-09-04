import type { ListQuery } from "@/types/api";

export function buildQueryString(query: ListQuery): string {
  const params = new URLSearchParams({
    page: String(query.page),
    pageSize: String(query.pageSize),
    ...(query.search ? { search: query.search } : {}),
    ...(query.sortBy ? { sortBy: query.sortBy } : {}),
    ...(query.sortOrder ? { sortOrder: query.sortOrder } : {}),
  });
  Object.entries(query.filters ?? {}).forEach(([key, value]) => {
    if (value !== undefined && value !== "") params.set(key, String(value));
  });
  return params.toString();
}
