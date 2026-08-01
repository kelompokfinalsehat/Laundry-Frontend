"use client";
import { Alert, Button, Group, Text } from "@mantine/core";
import { useEffect, useState } from "react";

type Permission = "unknown" | "prompt" | "granted" | "denied" | "unsupported";
export function LocationPermissionGate() {
  const [status, setStatus] = useState<Permission>("unknown");
  useEffect(() => {
    if (!navigator.geolocation) return setStatus("unsupported");
    navigator.permissions
      ?.query({ name: "geolocation" })
      .then((r) => setStatus(r.state))
      .catch(() => setStatus("prompt"));
  }, []);
  const request = () =>
    navigator.geolocation.getCurrentPosition(
      () => setStatus("granted"),
      () => setStatus("denied"),
    );
  if (status === "granted") return null;
  return (
    <Alert
      color={status === "denied" ? "red" : "blue"}
      title="Izin lokasi diperlukan untuk Request Pickup"
    >
      <Group justify="space-between">
        <Text size="sm">
          Lokasi perangkat hanya dipakai sebagai izin awal. Alamat pickup tetap
          berasal dari alamat tersimpan.
        </Text>
        <Button size="xs" onClick={request} disabled={status === "unsupported"}>
          Aktifkan lokasi
        </Button>
      </Group>
    </Alert>
  );
}
