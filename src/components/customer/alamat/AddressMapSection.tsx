import { Alert, Button, Group, Text } from "@mantine/core";
import { LocationPicker } from "@/components/shared/Location/LocationPicker";

export function AddressMapSection({
  isAddressDetailComplete,
  hasPosition,
  latitude,
  longitude,
  locationError,
  isCheckingLocation,
  onCheckLocation,
  onPinChange,
}: {
  isAddressDetailComplete: boolean;
  hasPosition: boolean;
  latitude: number | undefined;
  longitude: number | undefined;
  locationError: string | null;
  isCheckingLocation: boolean;
  onCheckLocation: () => void;
  onPinChange: (lat: number, lng: number) => void;
}) {
  return (
    <div>
      <Group justify="space-between" align="center" mb="xs">
        <Text size="sm" fw={500}>
          Titik Lokasi di Peta
        </Text>
        <Button
          variant="light"
          size="xs"
          disabled={!isAddressDetailComplete}
          loading={isCheckingLocation}
          onClick={onCheckLocation}
        >
          {hasPosition ? "Cek Ulang Lokasi" : "Cek di Peta"}
        </Button>
      </Group>

      {!isAddressDetailComplete && (
        <Text size="xs" c="var(--color-text-secondary)">
          Lengkapi provinsi, kota, kecamatan, kode pos, dan detail alamat dulu
          untuk menampilkan peta.
        </Text>
      )}

      {locationError && (
        <Alert
          mt="xs"
          style={{
            backgroundColor: "var(--color-primary-light)",
            color: "var(--color-primary)",
          }}
        >
          {locationError}
        </Alert>
      )}

      {hasPosition && latitude !== undefined && longitude !== undefined && (
        <div style={{ marginTop: 8 }}>
          <LocationPicker
            initialLat={latitude}
            initialLng={longitude}
            onChange={onPinChange}
          />
          <Text size="xs" c="var(--color-text-secondary)" mt={4}>
            Geser pin merah kalau posisinya belum tepat.
          </Text>
        </div>
      )}
    </div>
  );
}
