import { WorkerApi } from "@/lib/api/worker.api";
import { StationType, type WorkerAvailableQuery } from "@/types/api/worker.types";
import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const WORKER_QUERY_KEY = ["worker"] as const;
export const WORKER_AVAILABLE_QUERY_KEY = [...WORKER_QUERY_KEY, "available"] as const;
type StationFilter = StationType | "ALL";
const workerApi = new WorkerApi();

export function useAvailable() {
  const AVAILABLE_PAGE_SIZE = 5;

  const [page, setPage] = useState<number>(1);
  const [stationType, setStationType] = useState<StationFilter>("ALL");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const query: WorkerAvailableQuery = {
    page: page,
    pageSize: AVAILABLE_PAGE_SIZE,
    ...(stationType !== "ALL" && { stationType }),
    sortOrder: sortOrder,
  };

  // fetching endpoint available

  const availableQuery = useQuery({
    queryKey: [...WORKER_AVAILABLE_QUERY_KEY, query],
    queryFn: () => workerApi.getAvailable(query),
  });

  function handleStationFilter(value: string | null) {
    if (!value) return;
    setStationType(value as StationFilter);
    setPage(1);
  }

  function handleSortChange(value: "asc" | "desc") {
    setSortOrder(value);
    setPage(1);
  }
  return {
    availableQuery,

    page,
    stationType,
    sortOrder,

    setPage,
    handleStationFilter,
    handleSortChange,
  };
}

export function useClaim() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (assignmentId: string) => workerApi.claim(assignmentId),
    onSuccess: async () => {
      notifications.show({
        title: "Tugas berhasil diambil!",
        message: "Tugas telah menjadi tugas aktif anda.",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: WORKER_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Gagal mengambil tugas",
        message: error.message,
        color: "red",
      });
    },
  });
}
