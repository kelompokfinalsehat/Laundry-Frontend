import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { LaundryItemApi } from "@/lib/api/laundry-item.api";

import type {
  CreateLaundryItemPayload,
  LaundryItemQuery,
  UpdateLaundryItemPayload,
} from "@/types/api/laundry-item.types";

const laundryItemApi = new LaundryItemApi();

export const LAUNDRY_ITEMS_QUERY_KEY = [
  "laundry-items",
];

export function useLaundryItems(
  params?: LaundryItemQuery,
) {
  return useQuery({
    queryKey: [
      ...LAUNDRY_ITEMS_QUERY_KEY,
      params,
    ],
    queryFn: () =>
      laundryItemApi.getLaundryItems(params),
  });
}

export function useLaundryItem(
  laundryItemId: string,
) {
  return useQuery({
    queryKey: [
      ...LAUNDRY_ITEMS_QUERY_KEY,
      "detail",
      laundryItemId,
    ],
    queryFn: () =>
      laundryItemApi.getLaundryItemById(
        laundryItemId,
      ),
    enabled: Boolean(laundryItemId),
  });
}

export function useCreateLaundryItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      payload: CreateLaundryItemPayload,
    ) =>
      laundryItemApi.createLaundryItem(
        payload,
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey:
          LAUNDRY_ITEMS_QUERY_KEY,
      });
    },
  });
}

export function useUpdateLaundryItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      laundryItemId,
      payload,
    }: {
      laundryItemId: string;
      payload: UpdateLaundryItemPayload;
    }) =>
      laundryItemApi.updateLaundryItem(
        laundryItemId,
        payload,
      ),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey:
          LAUNDRY_ITEMS_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [
          ...LAUNDRY_ITEMS_QUERY_KEY,
          "detail",
          variables.laundryItemId,
        ],
      });
    },
  });
}

export function useDeactivateLaundryItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      laundryItemId: string,
    ) =>
      laundryItemApi.deactivateLaundryItem(
        laundryItemId,
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey:
          LAUNDRY_ITEMS_QUERY_KEY,
      });
    },
  });
}