"use client";

import { Stack, Text, Paper, Group, Button, NumberInput, Alert } from "@mantine/core";

// ── UI KOSONGAN — belum disambungkan ke Mantine useForm/hooks/API ──
// Nanti form sungguhan pakai useForm() dari @mantine/form + schemaResolver
// (pola AddressForm.tsx), dan submit-nya manggil useValidateQuantities().

export type QuantityRow = { id: string; name: string; officialQty: number; inputQty: number };

export function WorkerQuantityForm({
  orderCode,
  stationLabel,
  rows,
  mismatch = false,
}: {
  orderCode: string;
  stationLabel: string;
  rows: QuantityRow[];
  /** true = tampilkan banner error + tombol Ajukan Bypass (state setelah submit gagal) */
  mismatch?: boolean;
}) {
  return (
    <Stack gap="lg">
      <Text size="sm" c="dimmed">
        {stationLabel} · {orderCode}
      </Text>

      {mismatch && (
        <Alert color="red" variant="light">
          Quantity yang diinput tidak sesuai dengan data resmi.
        </Alert>
      )}

      <Stack gap="xs">
        {rows.map((row) => (
          <Paper key={row.id} withBorder p="sm" radius="md">
            <Group justify="space-between">
              <div>
                <Text size="sm" fw={600}>
                  {row.name}
                </Text>
                <Text size="xs" c="dimmed">
                  Resmi: {row.officialQty} pcs
                </Text>
              </div>
              <NumberInput
                value={row.inputQty}
                w={90}
                min={0}
                readOnly
                error={mismatch && row.inputQty !== row.officialQty}
              />
            </Group>
          </Paper>
        ))}
      </Stack>

      {mismatch ? (
        <Button variant="outline" color="blue.7" size="md" radius="md">
          Ajukan Bypass
        </Button>
      ) : (
        <Button color="yellow.6" size="md" radius="md">
          Validasi &amp; Lanjutkan
        </Button>
      )}
    </Stack>
  );
}
