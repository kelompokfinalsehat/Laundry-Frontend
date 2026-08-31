"use client";

import { useEffect } from "react";
import { Button, Group, Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconMapPinOff } from "@tabler/icons-react";
import { useLocationPermission } from "./hooks/useLocationPermission";
import { getLocationPermissionInstruction } from "./lib/browser-detect";

const NOTIFICATION_ID = "location-permission-denied";

export function LocationPermissionGate() {
  const { status, requestPermission } = useLocationPermission();

  useEffect(() => {
    if (status !== "denied") {
      notifications.hide(NOTIFICATION_ID);
      return;
    }

    notifications.show({
      id: NOTIFICATION_ID,
      autoClose: false,
      withCloseButton: false,
      icon: <IconMapPinOff size={18} />,
      color: "blue",
      title: "Izin lokasi diperlukan",
      message: (
        <Stack gap={10}>
          <Text size="sm" c="var(--color-text-secondary)">
            {getLocationPermissionInstruction()}
          </Text>
          <Group gap={8}>
            <Button
              size="xs"
              style={{ backgroundColor: "var(--color-primary)" }}
              onClick={requestPermission}
            >
              Coba Lagi
            </Button>
            <Button
              size="xs"
              variant="outline"
              color="gray"
              onClick={() => notifications.hide(NOTIFICATION_ID)}
            >
              Tutup
            </Button>
          </Group>
        </Stack>
      ),
      styles: {
        root: { backgroundColor: "#ffffff", borderRadius: 12 },
        icon: {
          backgroundColor: "var(--color-primary-light)",
          color: "var(--color-primary)",
        },
        title: { color: "var(--color-primary)", fontWeight: 500 },
      },
    });
  }, [status, requestPermission]);

  return null;
}