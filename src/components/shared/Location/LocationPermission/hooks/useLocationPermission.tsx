"use client";

import { useCallback, useEffect, useState } from "react";

type LocationPermissionStatus =
  | "unknown"
  | "granted"
  | "denied"
  | "unsupported";

export function useLocationPermission() {
  const [status, setStatus] = useState<LocationPermissionStatus>("unknown");

  const requestPermission = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setStatus("unsupported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        setStatus("granted");
      },
      (err) => {
        setStatus("denied");
      },
      { timeout: 8000 },
    );
  }, []);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setStatus("unsupported");
      return;
    }

    if ("permissions" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" as PermissionName })
        .then((result) => {
          const apply = () =>
            setStatus(
              result.state === "granted"
                ? "granted"
                : result.state === "denied"
                  ? "denied"
                  : "unknown",
            );
          apply();
          result.onchange = apply;

          if (result.state === "prompt") requestPermission();
        })
        .catch(requestPermission);
    } else {
      requestPermission();
    }
  }, [requestPermission]);

  return { status, requestPermission };
}
