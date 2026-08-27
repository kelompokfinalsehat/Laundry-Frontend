import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDebouncedValue } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { LaundryItemApi } from "@/lib/api/laundry-item.api";
import type { CreateLaundryItemPayload, LaundryItem, LaundryItemQuery, UpdateLaundryItemPayload } from "@/types/api/laundry-item.types";

const laundryItemApi = new LaundryItemApi();

export const LAUNDRY_ITEMS_QUERY_KEY = ["laundry-items"];

export function useLaundryItems(params?: LaundryItemQuery) {
  return useQuery({
    queryKey: [...LAUNDRY_ITEMS_QUERY_KEY, params],
    queryFn: () => laundryItemApi.getLaundryItems(params),
  });
}

export function useLaundryItem(laundryItemId: string) {
  return useQuery({
    queryKey: [...LAUNDRY_ITEMS_QUERY_KEY, "detail", laundryItemId],
    queryFn: () => laundryItemApi.getLaundryItemById(laundryItemId),
    enabled: Boolean(laundryItemId),
  });
}

export function useCreateLaundryItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateLaundryItemPayload) => laundryItemApi.createLaundryItem(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LAUNDRY_ITEMS_QUERY_KEY,
      });
    },
  });
}

export function useUpdateLaundryItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ laundryItemId, payload }: { laundryItemId: string; payload: UpdateLaundryItemPayload }) =>
      laundryItemApi.updateLaundryItem(laundryItemId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: LAUNDRY_ITEMS_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...LAUNDRY_ITEMS_QUERY_KEY, "detail", variables.laundryItemId],
      });
    },
  });
}

export function useDeactivateLaundryItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (laundryItemId: string) => laundryItemApi.deactivateLaundryItem(laundryItemId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LAUNDRY_ITEMS_QUERY_KEY,
      });
    },
  });
}

type LaundryItemFiltersState = Pick<LaundryItemQuery, "search">;

export function useLaundryItemHooks() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<10 | 20 | 50>(10);
  const [filters, setFilters] = useState<LaundryItemFiltersState>({});
  const [selectedItem, setSelectedItem] = useState<LaundryItem | null>(null);
  const [debouncedSearch] = useDebouncedValue(filters.search ?? "", 400);
  const [sortBy, setSortBy] = useState<NonNullable<LaundryItemQuery["sortBy"]>>("createdAt");
  const [sortOrder, setSortOrder] = useState<NonNullable<LaundryItemQuery["sortOrder"]>>("desc");

  const laundryItems = useLaundryItems({
    page,
    pageSize,
    ...filters,
    search: debouncedSearch || undefined,
    sortBy,
    sortOrder,
  });

  const deactivateLaundryItem = useDeactivateLaundryItem();

  const handleFilterChange = (key: keyof LaundryItemFiltersState, value: string | null) => {
    setFilters((current) => ({
      ...current,
      [key]: value || undefined,
    }));

    setPage(1);
  };

  const handleReset = () => {
    setFilters({});

    setSortBy("createdAt");

    setSortOrder("desc");

    setPage(1);
  };

  const handleDeactivate = async () => {
    if (!selectedItem) {
      return;
    }
    await deactivateLaundryItem.mutateAsync(selectedItem.id, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Item laundry berhasil dinonaktifkan.",
          color: "green",
        });

        setSelectedItem(null);
      },
      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message: error instanceof Error ? error.message : "Gagal menonaktifkan item laundry.",
          color: "red",
        });
      },
    });
  };

  return {
    router,
    filters,
    sortBy,
    sortOrder,
    handleFilterChange,
    setSortBy,
    setPage,
    setSortOrder,
    handleReset,
    laundryItems,
    setPageSize,
    setSelectedItem,
    selectedItem,
    deactivateLaundryItem,
    handleDeactivate,
  };
}
