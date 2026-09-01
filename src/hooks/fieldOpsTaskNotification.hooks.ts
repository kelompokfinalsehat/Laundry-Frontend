"use client";

import { DriverApi } from "@/lib/api/driver.api";
import { WorkerApi } from "@/lib/api/worker.api";

import { DRIVER_AVAILABLE_QUERY_KEY } from "@/hooks/driver.hooks";
import { WORKER_AVAILABLE_QUERY_KEY } from "@/hooks/worker.hooks";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

type FieldOpsRole = "Driver" | "Worker";

type UseFieldOpsTaskNotificationProps = {
  role: FieldOpsRole;
  onNewTask: () => void;
};

const driverApi = new DriverApi();
const workerApi = new WorkerApi();

const POLLING_INTERVAL = 30_000;

export function useFieldOpsTaskNotification({ role, onNewTask }: UseFieldOpsTaskNotificationProps) {
  // Menyimpan createdAt terbaru yang sudah pernah difetch simpan sebelumnya.
  const knownTaskTimeRef = useRef<string | null>(null);

  // Menandai bahwa response pertama sudah pernah dijadikan baseline.
  const hasBaselineRef = useRef(false);

  const notificationQueryKey = role === "Driver" ? [...DRIVER_AVAILABLE_QUERY_KEY, "notification"] : [...WORKER_AVAILABLE_QUERY_KEY, "notification"];

  const notificationQuery = useQuery({
    queryKey: notificationQueryKey,

    queryFn: async () => {
      const requestParams = {
        page: 1,
        pageSize: 1,
        sortOrder: "desc" as const,
      };

      if (role === "Driver") {
        return driverApi.getAvailable(requestParams);
      }

      return workerApi.getAvailable(requestParams);
    },

    refetchInterval: POLLING_INTERVAL,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    // Query belum selesai fetch.
    // Jangan buat baseline dulu.
    if (!notificationQuery.data) {
      return;
    }

    // Karena pageSize = 1,
    // index 0 adalah task paling baru.
    const newestTask = notificationQuery.data.data[0];

    const incomingCreatedAt = newestTask?.createdAt ?? null;

    // RESPONSE PERTAMA
    // Response pertama hanya dijadikan baseline.
    // Task yang sudah ada sebelum user membuka aplikasi tidak dianggap sebagai task baru.
    if (!hasBaselineRef.current) {
      knownTaskTimeRef.current = incomingCreatedAt;
      hasBaselineRef.current = true;

      return;
    }

    // RESPONSE BERIKUTNYA
    // Kalau sekarang tidak ada available task,
    // tidak ada yang perlu dibandingkan.
    if (!incomingCreatedAt) {
      return;
    }

    // Sebelumnya belum ada task,
    // sekarang sudah ada task.
    // Berarti task tersebut memang muncul setelah baseline.
    if (!knownTaskTimeRef.current) {
      knownTaskTimeRef.current = incomingCreatedAt;

      onNewTask();

      return;
    }

    // Ubah tanggal string menjadi timestamp number
    // supaya bisa dibandingkan.
    const knownTimestamp = new Date(knownTaskTimeRef.current).getTime();

    const incomingTimestamp = new Date(incomingCreatedAt).getTime();

    // Kalau waktu task dari API sekarang
    // lebih baru daripada waktu task yang sudah dikenal,
    // berarti ada task baru.
    if (incomingTimestamp > knownTimestamp) {
      knownTaskTimeRef.current = incomingCreatedAt;

      onNewTask();
    }
  }, [notificationQuery.data, onNewTask]);

  return notificationQuery;
}
