"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useRef } from "react";
import L from "leaflet";

// Fix icon default yang rusak akibat bundler
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

type LocationPickerInnerProps = {
  initialLat: number;
  initialLng: number;
  onChange: (lat: number, lng: number) => void;
};

function DraggableMarker({ initialLat, initialLng, onChange }: LocationPickerInnerProps) {
  const markerRef = useRef<L.Marker>(null);

  const eventHandlers = {
    dragend() {
      const marker = markerRef.current;
      if (marker) {
        const { lat, lng } = marker.getLatLng();
        onChange(lat, lng);
      }
    },
  };

  // Tap/klik di peta juga memindahkan pin, tidak cuma drag
  useMapEvents({
    click(e) {
      onChange(e.latlng.lat, e.latlng.lng);
    },
  });

  return (
    <Marker
      draggable
      eventHandlers={eventHandlers}
      position={[initialLat, initialLng]}
      ref={markerRef}
    />
  );
}

export function LocationPickerInner({ initialLat, initialLng, onChange }: LocationPickerInnerProps) {
  return (
    <MapContainer
      center={[initialLat, initialLng]}
      zoom={16}
      style={{ height: 300, width: "100%", borderRadius: 8 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <DraggableMarker initialLat={initialLat} initialLng={initialLng} onChange={onChange} />
    </MapContainer>
  );
}