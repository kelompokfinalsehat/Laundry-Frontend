import { DriverApi } from "@/lib/api/driver.api";
import type { DriverAvailableQuery, DriverHistoryQuery, TaskType } from "@/types/api/driver.types";
import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useState } from "react";

export const DRIVER_QUERY_KEY = ["driver"] as const;
export const DRIVER_AVAILABLE_QUERY_KEY = [...DRIVER_QUERY_KEY, "available"] as const;
export const DRIVER_ACTIVE_QUERY_KEY = [...DRIVER_QUERY_KEY, "active"] as const;
export const DRIVER_HISTORY_QUERY_KEY = [...DRIVER_QUERY_KEY, "history"] as const;

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
        message: "Tugas telah menjadi tugas aktif Anda",
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

export function useActive() {
  return useQuery({
    queryKey: DRIVER_ACTIVE_QUERY_KEY,
    queryFn: () => driverApi.getActive(),
  });
}

export function useStart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (assignmentId: string) => driverApi.startAssignment(assignmentId),
    onSuccess: async () => {
      notifications.show({
        title: "Tugas berhasil dimulai",
        message: "Silakan mengerjakan tugas dengan aman!",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: DRIVER_ACTIVE_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Gagal memulai tugas",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function usePickup() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (assignmentId: string) => driverApi.pickupCollected(assignmentId),
    onSuccess: async () => {
      notifications.show({
        title: "Pickup berhasil!",
        message: "Silakan antar laundry ke outlet.",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: DRIVER_ACTIVE_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Gagal melakukan pickup",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function useCompleteDelivery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (assignmentId: string) => driverApi.completeDelivery(assignmentId),
    onSuccess: async () => {
      notifications.show({
        title: "Pengantaran selesai",
        message: "Tugas telah berhasil diselesaikan.",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: DRIVER_QUERY_KEY }); // invalidatenya ke key utama karena setelah complete otomatis trigger cache historylist.
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Gagal menyelesaikan pengantaran",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function useHistoryList() {
  const HISTORY_PAGE_SIZE = 5;

  const [page, setPage] = useState<number>(1);
  const [taskType, setTaskType] = useState<TaskTypeFilter>("ALL");
  const [period, setPeriod] = useState<string>(() => dayjs().format("YYYY-MM"));
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // query params
  const query: DriverHistoryQuery = {
    page: page,
    pageSize: HISTORY_PAGE_SIZE,
    period,
    ...(taskType !== "ALL" && { taskType }),
    sortOrder,
  };
  const historyQuery = useQuery({
    queryKey: [...DRIVER_HISTORY_QUERY_KEY, query],
    queryFn: () => driverApi.getHistoryList(query),
  });

  function handlePeriodChange(value: string) {
    setPeriod(value);
    setPage(1);
  }

  function handleTaskTypeFilter(value: string | null) {
    if (!value) return;
    setTaskType(value as TaskTypeFilter);
    setPage(1);
  }

  function handleSortChange(value: "asc" | "desc") {
    setSortOrder(value);
    setPage(1);
  }

  return {
    historyQuery,

    page,
    period,
    taskType,
    sortOrder,

    setPage,
    handlePeriodChange,
    handleTaskTypeFilter,
    handleSortChange,
  };
}

export function useHistoryDetail(assignmentId: string) {
  return useQuery({
    queryKey: [...DRIVER_HISTORY_QUERY_KEY, "detail", assignmentId],
    queryFn: () => driverApi.getHistoryDetail(assignmentId),
  });
}
