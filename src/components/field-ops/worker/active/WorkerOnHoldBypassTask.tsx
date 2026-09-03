import { Badge, Card, Stack, Text } from "@mantine/core";

export function WorkerOnHoldBypassTask() {
  return (
    <Card withBorder radius="lg" p="lg">
      <Stack gap="md">
        <Badge
          color="orange"
          variant="light"
          w="fit-content"
        >
          Menunggu Persetujuan
        </Badge>

        <Stack gap={4}>
          <Text fw={600}>
            Permintaan bypass sedang diproses
          </Text>

          <Text size="sm" c="dimmed">
            Penyesuaian kuantitas sedang menunggu
            keputusan dari Outlet Admin.
          </Text>

          <Text size="sm" c="dimmed">
            Tugas akan dapat dilanjutkan setelah
            permintaan bypass disetujui.
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
}