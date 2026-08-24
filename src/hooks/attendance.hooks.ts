import { AttendanceApi } from "@/lib/api/attendance.api";
import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const ATTENDANCE_QUERY_KEY = ["attendance"] as const;
export const ATTENDANCE_STATUS_QUERY_KEY = [...ATTENDANCE_QUERY_KEY, "status"] as const;

const attendanceApi = new AttendanceApi();

export function useAttendance() {
  const queryClient = useQueryClient();

  const statusQuery = useQuery({
    queryKey: ATTENDANCE_STATUS_QUERY_KEY,
    queryFn: () => attendanceApi.getStatus(),
  });

  const clockInMutation = useMutation({
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

  const clockOutMutation = useMutation({
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

  return { statusQuery, clockInMutation, clockOutMutation };
}
