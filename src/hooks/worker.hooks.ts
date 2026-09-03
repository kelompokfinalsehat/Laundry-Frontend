import { ApiError } from "@/lib/api/axios";
import { WorkerApi } from "@/lib/api/worker.api";
import type { StationType, WorkerAvailableQuery, WorkerBypassPayload, WorkerHistoryQuery, WorkerValidatePayload } from "@/types/api/worker.types";
import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useState } from "react";

export const WORKER_QUERY_KEY = ["worker"] as const;
export const WORKER_AVAILABLE_QUERY_KEY = [...WORKER_QUERY_KEY, "available"] as const;
export const WORKER_ACTIVE_QUERY_KEY = [...WORKER_QUERY_KEY, "active"] as const;
export const WORKER_HISTORY_QUERY_KEY = [...WORKER_QUERY_KEY, "history"] as const;

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

export function useActive() {
  return useQuery({
    queryKey: WORKER_ACTIVE_QUERY_KEY,
    queryFn: () => workerApi.getActive(),
  });
}

export function useValidateQuantities() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ assignmentId, payload }: { assignmentId: string; payload: WorkerValidatePayload }) =>
      workerApi.validateQuantities(assignmentId, payload),
    onSuccess: async () => {
      notifications.show({
        title: "Validasi Berhasil",
        message: "Kuantitas sesuai, silahkan memulai tugas anda!",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: WORKER_ACTIVE_QUERY_KEY });
    },
    onError: async (error) => {
      if (error instanceof ApiError && error.code === "QUANTITY_MISMATCH") {
        await queryClient.invalidateQueries({ queryKey: WORKER_ACTIVE_QUERY_KEY });
        return;
      }
      notifications.show({
        title: "Validasi Gagal",
        message: error instanceof Error ? error.message : "Terjadi Kesalahan",
        color: "red",
      });
    },
  });
}

export function useRequestBypass() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ assignmentId, payload }: { assignmentId: string; payload: WorkerBypassPayload }) => workerApi.requestBypass(assignmentId, payload),
    onSuccess: async () => {
      notifications.show({
        title: "Permintaan bypass terkirim!",
        message: "Silahkan menunggu konfirmasi dari Outlet admin.",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: WORKER_ACTIVE_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Permintaan bypass gagal!",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function useComplete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (assignmentId: string) => workerApi.complete(assignmentId),
    onSuccess: async () => {
      notifications.show({
        title: "Tugas Selesai!",
        message: "Tugas berhasil diselesaikan, terimakasih atas kerja keras anda.",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: WORKER_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Gagal menyelesaikan tugas",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function useHistoryList() {
  const HISTORY_PAGE_SIZE = 5;

  const [page, setPage] = useState<number>(1);
  const [stationType, setStationType] = useState<StationFilter>("ALL");
  const [period, setPeriod] = useState<string>(() => dayjs().format("YYYY-MM"));
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // query params
  const query: WorkerHistoryQuery = {
    page: page,
    pageSize: HISTORY_PAGE_SIZE,
    period,
    ...(stationType !== "ALL" && { stationType }),
    sortOrder,
  };
  const historyQuery = useQuery({
    queryKey: [...WORKER_HISTORY_QUERY_KEY, query],
    queryFn: () => workerApi.getHistoryList(query),
  });

  function handlePeriodChange(value: string) {
    setPeriod(value);
    setPage(1);
  }

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
    historyQuery,

    page,
    period,
    stationType,
    sortOrder,

    setPage,
    handlePeriodChange,
    handleStationFilter,
    handleSortChange,
  };
}

export function useHistoryDetail(assignmentId: string) {
  return useQuery({
    queryKey: [...WORKER_HISTORY_QUERY_KEY, "detail", assignmentId],
    queryFn: () => workerApi.getHistoryDetail(assignmentId),
  });
}
