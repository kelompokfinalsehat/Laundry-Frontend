import { useState } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { notifications } from "@mantine/notifications";

import { WorkerApi } from "@/lib/api/worker.api";

import { ApiError } from "@/lib/api/axios";

import { ATTENDANCE_STATUS_QUERY_KEY } from "@/hooks/attendance.hooks";

import type { StationType, WorkerAvailableQuery, WorkerValidateQuantityItem } from "@/types/api/worker.types";

const workerApi = new WorkerApi();

/* =========================================================
   QUERY KEYS
========================================================= */

export const WORKER_QUERY_KEY = ["worker"] as const;

export const WORKER_AVAILABLE_QUERY_KEY = [...WORKER_QUERY_KEY, "available"] as const;

export const WORKER_ACTIVE_QUERY_KEY = [...WORKER_QUERY_KEY, "active"] as const;

/* =========================================================
   AVAILABLE
========================================================= */

export function useWorkerAvailableAssignments() {
  const [page, setPage] = useState(1);

  const [stationType, setStationType] = useState<StationType | "ALL">("ALL");

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const query: WorkerAvailableQuery = {
    page,
    pageSize: 10,
    sortOrder,
    ...(stationType !== "ALL" ? { stationType } : {}),
  };

  const availableQuery = useQuery({
    queryKey: [...WORKER_AVAILABLE_QUERY_KEY, query],

    queryFn: () => workerApi.getAvailable(query),
  });

  function handleStationTypeChange(value: StationType | "ALL") {
    setStationType(value);
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

    stationType,
    sortOrder,

    handleStationTypeChange,
    handleSortOrderChange,
  };
}

/* =========================================================
   CLAIM
========================================================= */

export function useClaimAssignment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (assignmentId: string) => workerApi.claimAssignment(assignmentId),

    onSuccess: async () => {
      notifications.show({
        title: "Tugas berhasil diambil",
        message: "Tugas sekarang menjadi tugas aktif.",
        color: "lime",
      });

      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: WORKER_QUERY_KEY,
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

export function useWorkerActiveAssignment() {
  return useQuery({
    queryKey: WORKER_ACTIVE_QUERY_KEY,

    queryFn: () => workerApi.getActive(),
  });
}

/* =========================================================
   VALIDATE QUANTITIES
========================================================= */

export function useValidateWorkerQuantities() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ assignmentId, items }: { assignmentId: string; items: WorkerValidateQuantityItem[] }) =>
      workerApi.validateQuantities(assignmentId, { items }),

    onSuccess: async () => {
      notifications.show({
        title: "Kuantitas sesuai",
        message: "Tugas mulai diproses.",
        color: "lime",
      });

      await queryClient.invalidateQueries({
        queryKey: WORKER_ACTIVE_QUERY_KEY,
      });
    },

    onError: (error: Error) => {
      /*
       * Mismatch tidak kita jadikan
       * notification merah.
       *
       * Component akan menampilkan:
       * - warning
       * - tombol validate tetap ada
       * - tombol bypass muncul
       */
      if (error instanceof ApiError && error.code === "QUANTITY_MISMATCH") {
        return;
      }

      notifications.show({
        title: "Validasi gagal",
        message: error.message,
        color: "red",
      });
    },
  });
}

/* =========================================================
   REQUEST BYPASS
========================================================= */

export function useRequestWorkerBypass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ assignmentId, items }: { assignmentId: string; items: WorkerValidateQuantityItem[] }) =>
      workerApi.requestBypass(assignmentId, { items }),

    onSuccess: async () => {
      notifications.show({
        title: "Bypass berhasil diajukan",

        message: "Permintaan sedang menunggu persetujuan Outlet Admin.",

        color: "orange",
      });

      await queryClient.invalidateQueries({
        queryKey: WORKER_ACTIVE_QUERY_KEY,
      });
    },

    onError: (error: Error) => {
      notifications.show({
        title: "Gagal mengajukan bypass",
        message: error.message,
        color: "red",
      });
    },
  });
}

/* =========================================================
   COMPLETE
========================================================= */

export function useCompleteWorkerAssignment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (assignmentId: string) => workerApi.completeAssignment(assignmentId),

    onSuccess: async () => {
      notifications.show({
        title: "Tugas selesai",
        message: "Proses laundry berhasil diselesaikan.",
        color: "lime",
      });

      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: WORKER_QUERY_KEY,
        }),

        queryClient.invalidateQueries({
          queryKey: ATTENDANCE_STATUS_QUERY_KEY,
        }),
      ]);
    },

    onError: (error: Error) => {
      console.error("COMPLETE WORKER ERROR:", error);

      notifications.show({
        title: "Gagal menyelesaikan tugas",
        message: error.message,
        color: "red",
      });
    },
  });
}
