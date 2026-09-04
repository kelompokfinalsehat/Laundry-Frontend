"use client";

import { useBackOfficeNotification } from "@/hooks/backOfficeNotification.hooks";

export function BackOfficeNotificationWatcher() {
  useBackOfficeNotification();

  return null;
}