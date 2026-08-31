import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient, UseQueryOptions } from "@tanstack/react-query";
import { useDebouncedValue } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { LaundryItemApi } from "@/lib/api/laundry-item.api";
import type { CreateLaundryItemPayload, LaundryItem, LaundryItemQuery, UpdateLaundryItemPayload } from "@/types/api/laundry-item.types";
import { schemaResolver, useForm } from "@mantine/form";
import { filterLaundryItemSchema, FilterLaundryItemValues } from "@/lib/validation/laundry-item.validation";

const laundryItemApi = new LaundryItemApi();

export const LAUNDRY_ITEMS_QUERY_KEY = ["laundry-items"];

export function useLaundryItems(params?: LaundryItemQuery, options?: {enabled?: boolean}) {
  return useQuery({
    queryKey: [...LAUNDRY_ITEMS_QUERY_KEY, params],
    queryFn: () => laundryItemApi.getLaundryItems(params),
    enabled: options?.enabled,
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
    mutationFn: ({ laundryItemId, payload }: { laundryItemId: string; payload: UpdateLaundryItemPayload }) => laundryItemApi.updateLaundryItem(laundryItemId, payload),

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


export function useLaundryItemHooks() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<10 | 20 | 50>(10);
  const [selectedItem, setSelectedItem] = useState<LaundryItem | null>(null);
  const form = useForm<FilterLaundryItemValues>({
    mode: "controlled",
    initialValues: {
      search: "",
      sortBy: "createdAt",
      sortOrder: "desc",
    },
    validate: schemaResolver(filterLaundryItemSchema),
    validateInputOnChange: true,
    onValuesChange: () => setPage(1),
  });
  const [debouncedSearch] = useDebouncedValue(form.values.search, 400);
  const laundryItems = useLaundryItems(
    {
      ...form.values,
      page,
      pageSize,
      search: debouncedSearch,
    },
    { enabled: !form.errors.search },
  );

  const deactivateLaundryItem = useDeactivateLaundryItem();

  const handleReset = () => {
    form.reset();
    setPage(1);
  };

  const handleDeactivate = async () => {
    if (!selectedItem) return;

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
    form,
    setPage,
    handleReset,
    laundryItems,
    setPageSize,
    setSelectedItem,
    selectedItem,
    deactivateLaundryItem,
    handleDeactivate,
  };
}
