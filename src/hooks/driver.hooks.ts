import { useState } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { notifications } from "@mantine/notifications";

import { DriverApi } from "@/lib/api/driver.api";

import { ATTENDANCE_STATUS_QUERY_KEY } from "@/hooks/attendance.hooks";

import type { DriverAvailableQuery, TaskType } from "@/types/api/driver.types";

const driverApi = new DriverApi();

/* =========================================================
   QUERY KEYS
========================================================= */

export const DRIVER_QUERY_KEY = ["driver"] as const;

export const DRIVER_AVAILABLE_QUERY_KEY = [...DRIVER_QUERY_KEY, "available"] as const;

export const DRIVER_ACTIVE_QUERY_KEY = [...DRIVER_QUERY_KEY, "active"] as const;

/* =========================================================
   AVAILABLE
========================================================= */

export function useDriverAvailableAssignments() {
  const [page, setPage] = useState(1);

  const [taskType, setTaskType] = useState<TaskType | "ALL">("ALL");

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const query: DriverAvailableQuery = {
    page,
    pageSize: 10,
    sortOrder,

    ...(taskType !== "ALL" ? { taskType } : {}),
  };

  const availableQuery = useQuery({
    queryKey: [...DRIVER_AVAILABLE_QUERY_KEY, query],

    queryFn: () => driverApi.getAvailable(query),
  });

  function handleTaskTypeChange(value: TaskType | "ALL") {
    setTaskType(value);
    setPage(1);
  }

  function handleSortOrderChange(value: "asc" | "desc") {
    setSortOrder(value);
    setPage(1);
  }

  return {
    items: availableQuery.data?.data ?? [],

    meta: availableQuery.data?.meta,

    isPending: availableQuery.isPending,

    isLoading: availableQuery.isPending,

    isError: availableQuery.isError,

    error: availableQuery.error,

    refetch: availableQuery.refetch,

    page,
    setPage,

    taskType,

    sortOrder,

    handleTaskTypeChange,

    handleSortOrderChange,
  };
}

/* =========================================================
   CLAIM
========================================================= */

export function useClaimDriverAssignment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (assignmentId: string) => driverApi.claimAssignment(assignmentId),

    onSuccess: async () => {
      notifications.show({
        title: "Tugas berhasil diambil",
        message: "Tugas sekarang menjadi tugas aktif.",
        color: "lime",
      });

      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: DRIVER_QUERY_KEY,
        }),

        queryClient.invalidateQueries({
          queryKey: ATTENDANCE_STATUS_QUERY_KEY,
        }),
      ]);
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

/* =========================================================
   ACTIVE
========================================================= */

export function useDriverActiveAssignment() {
  return useQuery({
    queryKey: DRIVER_ACTIVE_QUERY_KEY,

    queryFn: () => driverApi.getActive(),
  });
}

/* =========================================================
   START
========================================================= */

export function useStartDriverAssignment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (assignmentId: string) => driverApi.startAssignment(assignmentId),

    onSuccess: async () => {
      notifications.show({
        title: "Tugas dimulai",
        message: "Perjalanan berhasil dimulai.",
        color: "lime",
      });

      await queryClient.invalidateQueries({
        queryKey: DRIVER_ACTIVE_QUERY_KEY,
      });
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

/* =========================================================
   PICKUP COLLECTED
========================================================= */

export function useConfirmDriverPickup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (assignmentId: string) => driverApi.pickupCollected(assignmentId),

    onSuccess: async () => {
      notifications.show({
        title: "Laundry berhasil diambil",
        message: "Silakan kembali menuju outlet.",
        color: "lime",
      });

      await queryClient.invalidateQueries({
        queryKey: DRIVER_ACTIVE_QUERY_KEY,
      });
    },

    onError: (error: Error) => {
      notifications.show({
        title: "Gagal mengonfirmasi pickup",
        message: error.message,
        color: "red",
      });
    },
  });
}

/* =========================================================
   COMPLETE DELIVERY
========================================================= */

export function useCompleteDriverDelivery() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (assignmentId: string) => driverApi.completeDelivery(assignmentId),

    onSuccess: async () => {
      notifications.show({
        title: "Delivery selesai",
        message: "Laundry berhasil diserahkan kepada pelanggan.",
        color: "lime",
      });

      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: DRIVER_QUERY_KEY,
        }),

        queryClient.invalidateQueries({
          queryKey: ATTENDANCE_STATUS_QUERY_KEY,
        }),
      ]);
    },

    onError: (error: Error) => {
      notifications.show({
        title: "Gagal menyelesaikan delivery",
        message: error.message,
        color: "red",
      });
    },
  });
}
