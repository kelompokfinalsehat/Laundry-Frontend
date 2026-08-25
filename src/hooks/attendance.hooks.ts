import { AttendanceApi } from "@/lib/api/attendance.api";
import type { AttendanceHistoryQuery, AttendancePeriod } from "@/types/api/attendance.types";
import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const ATTENDANCE_QUERY_KEY = ["attendance"] as const;
export const ATTENDANCE_STATUS_QUERY_KEY = [...ATTENDANCE_QUERY_KEY, "status"] as const;

const attendanceApi = new AttendanceApi();

export function useAttendanceStatus() {
  return useQuery({
    queryKey: ATTENDANCE_STATUS_QUERY_KEY,
    queryFn: () => attendanceApi.getStatus(),
  });
}

export function useClockIn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => attendanceApi.clockIn(),
    onSuccess: async () => {
      notifications.show({
        title: "Absensi berhasil",
        message: "Selamat bekerja!",
        color: "lime",
      });
      await queryClient.invalidateQueries({ queryKey: ATTENDANCE_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Absensi Gagal",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function useClockOut() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => attendanceApi.clockOut(),
    onSuccess: async () => {
      notifications.show({
        title: "Absensi berhasil",
        message: "Terimakasih atas dedikasi anda!",
        color: "lime",
      });
      await queryClient.invalidateQueries({ queryKey: ATTENDANCE_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Absensi Gagal",
        message: error.message,
        color: "red",
      });
    },
  });
}
type PeriodFilter = AttendancePeriod | "ALL";
const HISTORY_PAGE_SIZE = 5;

export function useHistoryList() {
  const [page, setPage] = useState(1);
  const [period, setPeriod] = useState<PeriodFilter>("ALL");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const query: AttendanceHistoryQuery = {
    page,
    pageSize: HISTORY_PAGE_SIZE,
    sortOrder,
    ...(period !== "ALL" && { period }),
  };

  const historyQuery = useQuery({
    queryKey: [...ATTENDANCE_QUERY_KEY, "history", query],
    queryFn: () => attendanceApi.getHistory(query),
  });

  function handlePeriodChange(value: string | null) {
    const nextPeriod = (value ?? "ALL") as PeriodFilter;
    setPeriod(nextPeriod);
    setPage(1);
  }

  function handleSortChange() {
    setSortOrder((current) => (current === "desc" ? "asc" : "desc"));
    setPage(1);
  }

  return {
    // Bentuk asli historyQuery.data itu { data, meta } (nested), jadi
    // dari komponen akan kebaca historyQuery.data.data yang membingungkan.
    // Di sini sudah "dibongkar" jadi nama yang jelas: items & meta,
    // supaya komponen tinggal pakai items.map(...) langsung.
    items: historyQuery.data?.data ?? [],
    meta: historyQuery.data?.meta,
    isPending: historyQuery.isPending,
    isError: historyQuery.isError,
    error: historyQuery.error,
    refetch: historyQuery.refetch,

    page,
    period,
    sortOrder,

    setPage,
    handlePeriodChange,
    handleSortChange,
  };
}