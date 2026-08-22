import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OutletApi } from "@/lib/api/outlet.api";
import { CreateOutletPayload, OutletQuery } from "@/types/api/outlet.types";

const outletApi = new OutletApi();
const OUTLETS_QUERY_KEY = ["outlets"];

export function useOutlets(query?: OutletQuery) {
  return useQuery({
    queryKey: [...OUTLETS_QUERY_KEY, query],
    queryFn: () => outletApi.getOutlets(query),
  });
}

export function useOutlet(outletId: string) {
  return useQuery({
    queryKey: [...OUTLETS_QUERY_KEY, "detail", outletId],
    queryFn: () => outletApi.getOutlet(outletId),
    enabled: Boolean(outletId),
  });
}

export function useCreateOutlet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateOutletPayload) =>
      outletApi.createOutlet(payload),

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: OUTLETS_QUERY_KEY,
      }),
  });
}

export function useUpdateOutlet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      outletId,
      payload,
    }: {
      outletId: string;
      payload: CreateOutletPayload;
    }) => outletApi.updateOutlet(outletId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: OUTLETS_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...OUTLETS_QUERY_KEY, "detail", variables.outletId],
      });
    },
  });
}

export function useDeleteOutlet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (outletId: string) => outletApi.deleteOutlet(outletId),

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: OUTLETS_QUERY_KEY,
      }),
  });
}
