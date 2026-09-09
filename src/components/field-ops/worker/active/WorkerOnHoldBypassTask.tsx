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

        <Stack gap={5}>
          <Text  fw={800}>
            Permintaan bypass sedang diproses 
          </Text>

          <Text textWrap='wrap' size="sm" c="dimmed">
            Penyesuaian kuantitas sedang menunggu
            keputusan dari Outlet Admin.
          </Text>

          <Text textWrap="wrap" size="sm" c="dimmed">
            Tugas akan dapat dilanjutkan setelah
            permintaan bypass disetujui.
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
}