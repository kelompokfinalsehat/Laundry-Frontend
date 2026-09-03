import { AttendanceApi } from "@/lib/api/attendance.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import dayjs from "dayjs";
import type { AttendanceHistoryQuery } from "@/types/api/attendance.types";


export const ATTENDANCE_QUERY_KEY = ["attendance"] as const;
export const ATTENDANCE_STATUS_QUERY_KEY = [...ATTENDANCE_QUERY_KEY, "status"] as const;
export const ATTENDANCE_HISTORY_QUERY_KEY = [...ATTENDANCE_QUERY_KEY, "history"] as const;

// attendanceapi configuration
const attendanceApi = new AttendanceApi();

// attendance status
export function useAttendanceStatus() {
  return useQuery({
    queryKey: ATTENDANCE_STATUS_QUERY_KEY,
    queryFn: () => attendanceApi.getStatus(),
  });
}

// clock-in
export function useClockIn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => attendanceApi.clockIn(),
    onSuccess: async () => {
      notifications.show({
        title: "Absensi Berhasil!",
        message: "Absensi Masuk Berhasil! Selamat bekerja!",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: ATTENDANCE_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Absensi Gagal!",
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
        title: "Absensi Berhasil!",
        message: "Absensi Pulang berhasil! Selamat Melanjutkan Kegiatan!",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: ATTENDANCE_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Absensi Gagal!",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function useAttendanceHistory() {
  const HISTORY_PAGE_SIZE = 5;

  const [page, setPage] = useState<number>(1);
  const [period, setPeriod] = useState<string>(() => dayjs().format("YYYY-MM"));
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // query params
  const query: AttendanceHistoryQuery = {
    page: page,
    pageSize: HISTORY_PAGE_SIZE,
    period: period,
    sortOrder: sortOrder,
  };

  // fetching endpoint history
  const historyQuery = useQuery({
    queryKey: [...ATTENDANCE_HISTORY_QUERY_KEY, query],
    queryFn: () => attendanceApi.getHistory(query),
  });

  // handlers

  function handlePeriodChange(value: string | null) {
    if (!value) return;
    setPeriod(dayjs(value).format("YYYY-MM"));
    setPage(1);
  }

  function handleSortChange(value: "asc" | "desc") {
    setSortOrder(value); //kalo diclick pertama, akan ganti ke asc.
    setPage(1);
  }

  return {
    historyQuery,

    period,
    sortOrder,

    setPage,
    handlePeriodChange,
    handleSortChange,
  };
}
