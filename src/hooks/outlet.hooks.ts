import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OutletApi } from "@/lib/api/outlet.api";
import { CreateOutletPayload, Outlet, OutletQuery } from "@/types/api/outlet.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

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
    mutationFn: (payload: CreateOutletPayload) => outletApi.createOutlet(payload),

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: OUTLETS_QUERY_KEY,
      }),
  });
}

export function useUpdateOutlet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ outletId, payload }: { outletId: string; payload: CreateOutletPayload }) => outletApi.updateOutlet(outletId, payload),

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

export function useOutletHooks() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<10 | 20 | 50>(10);
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebouncedValue(search, 400);
  const [sortBy, setSortBy] = useState<"name" | "createdAt">("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const outlets = useOutlets({
    page,
    pageSize,
    search: debouncedSearch || undefined,
    sortBy,
    sortOrder,
  });
  const [selectedOutlet, setSelectedOutlet] = useState<Outlet | null>(null);

  const deleteOutlet = useDeleteOutlet();

  const handleReset = () => {
    setSearch("");

    setSortBy("createdAt");

    setSortOrder("desc");

    setPage(1);
  };

  const handleDeactivate = async () => {
    if (!selectedOutlet) return null;
    await deleteOutlet.mutateAsync(selectedOutlet.id, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Outlet berhasil dinonaktifkan.",
          color: "green",
        });

        setSelectedOutlet(null);
      },
      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message: error instanceof Error ? error.message : "Gagal menonaktifkan outlet.",
          color: "red",
        });
      },
    });
  };
  return {
    router,
    search,
    sortBy,
    sortOrder,
    setSearch,
    setPage,
    setSortBy,
    setSortOrder,
    handleReset,
    outlets,
    setPageSize,
    setSelectedOutlet,
    selectedOutlet,
    deleteOutlet,
    handleDeactivate,
  };
}
