import { DriverApi } from "@/lib/api/driver.api";
import type { DriverAvailableQuery, TaskType } from "@/types/api/driver.types";
import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const DRIVER_QUERY_KEY = ["driver"] as const;
export const DRIVER_AVAILABLE_QUERY_KEY = [...DRIVER_QUERY_KEY, "available"] as const;
type TaskTypeFilter = TaskType | "ALL";
const driverApi = new DriverApi();

export function useAvailable() {
  const AVAILABLE_PAGE_SIZE = 5;

  const [page, setPage] = useState<number>(1);
  const [taskType, setTaskType] = useState<TaskTypeFilter>("ALL");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const query: DriverAvailableQuery = {
    page: page,
    pageSize: AVAILABLE_PAGE_SIZE,
    ...(taskType !== "ALL" && { taskType }),
    sortOrder: sortOrder,
  };

  //fetching
  const availableQuery = useQuery({
    queryKey: [...DRIVER_AVAILABLE_QUERY_KEY, query],
    queryFn: () => driverApi.getAvailable(query),
  });

  function handlerTaskTypeFilter(value: string | null) {
    if (!value) return;
    setTaskType(value as TaskTypeFilter);
    setPage(1);
  }

  function handleSortChange(value: "asc" | "desc") {
    setSortOrder(value);
    setPage(1);
  }

  return {
    availableQuery,

    page,
    taskType,
    sortOrder,

    setPage,
    handlerTaskTypeFilter,
    handleSortChange,
  };
}

export function useClaim() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (assignmentId: string) => driverApi.claim(assignmentId),
    onSuccess: async () => {
      notifications.show({
        title: "Tugas berhasil diambil",
        message: "Tugas telah menjadi tugas aktif anda",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: DRIVER_QUERY_KEY });
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
