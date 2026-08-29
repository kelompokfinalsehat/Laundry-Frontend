"use client";

import dynamic from "next/dynamic";

export const LocationPicker = dynamic(
  () => import("./LocationPickerInner").then((mod) => mod.LocationPickerInner),
  {
    ssr: false,
    loading: () => (
      <div style={{ height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
        Memuat peta...
      </div>
    ),
  },
);