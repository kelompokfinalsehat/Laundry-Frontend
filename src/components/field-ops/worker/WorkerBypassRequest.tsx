"use client";

import { Stack, Text, Paper, Group, Button, Table } from "@mantine/core";

// ── UI KOSONGAN — belum disambungkan ke hooks/API ──────────
// Nanti tombol submit manggil useRequestBypass().
// SENGAJA tidak ada input catatan/notes di sini (batasan produk).

export type MismatchRow = {
  id: string;
  name: string;
  officialQty: number;
  inputQty: number;
};

export function WorkerBypassRequest({ rows }: { rows: MismatchRow[] }) {
  return (
    <Stack gap="lg">
      <Paper withBorder p="sm" radius="md">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Item</Table.Th>
              <Table.Th>Resmi</Table.Th>
              <Table.Th>Diinput</Table.Th>
              <Table.Th>Selisih</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.map((row) => {
              const diff = row.inputQty - row.officialQty;
              return (
                <Table.Tr key={row.id}>
                  <Table.Td>{row.name}</Table.Td>
                  <Table.Td>{row.officialQty}</Table.Td>
                  <Table.Td>{row.inputQty}</Table.Td>
                  <Table.Td c={diff !== 0 ? "red.7" : undefined} fw={700}>
                    {diff > 0 ? `+${diff}` : diff}
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Paper>

      <Text size="sm" c="dimmed">
        Pengajuan ini akan dikirim ke Outlet Admin untuk disetujui atau
        ditolak.
      </Text>

      <Button color="yellow.6" size="md" radius="md">
        Ajukan Bypass
      </Button>
    </Stack>
  );
}
