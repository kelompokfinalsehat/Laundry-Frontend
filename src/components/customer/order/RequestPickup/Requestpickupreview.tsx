import dayjs from "dayjs";
import { Alert, Button, Divider, Group, Paper, Stack, Text } from "@mantine/core";
import type { Address } from "@/types/api/address.types";

export function RequestPickupReview({
  selectedAddress,
  pickupDate,
  pickupTime,
  isPending,
  onBack,
  onConfirm,
}: {
  selectedAddress: Address;
  pickupDate: string;
  pickupTime: string;
  isPending: boolean;
  onBack: () => void;
  onConfirm: () => void;
}) {
  return (
    <Stack gap="md">
      <Paper withBorder p="md" radius="md">
        <Stack gap="xs">
          <Text fw={500} c="var(--color-text-primary)">
            {selectedAddress.label || "Alamat"}
          </Text>

          <Text size="sm" c="var(--color-text-secondary)">
            {selectedAddress.formattedAddress}
          </Text>

          <Text size="sm" c="var(--color-text-secondary)">
            {selectedAddress.phone}
          </Text>

          <Divider my={4} />

          <Text size="sm" c="var(--color-text-secondary)">
            Tanggal:{" "}
            <strong>{dayjs(pickupDate).format("dddd, D MMMM YYYY")}</strong>
          </Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Jam: <strong>{pickupTime}</strong>
          </Text>
        </Stack>
      </Paper>

      <Alert
        style={{
          backgroundColor: "var(--color-error-light)",
          color: "var(--color-error)",
        }}
      >
        Pastikan alamat serta jadwal pickup sudah benar. Request yang sudah
        dibuat tidak dapat dibatalkan atau diubah.
      </Alert>

      <Group grow>
        <Button variant="subtle" onClick={onBack} disabled={isPending}>
          Kembali
        </Button>

        <Button
          loading={isPending}
          onClick={onConfirm}
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Buat Request Pickup
        </Button>
      </Group>
    </Stack>
  );
}
