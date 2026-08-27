import { Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import { BypassDetail } from "@/types/api/bypass.types";
import { StationType } from "@/types/api";

type Props = {
  bypass: BypassDetail;
};

const STATION_LABEL: Record<StationType, string> = {
  WASHING: "Washing",
  IRONING: "Ironing",
  PACKING: "Packing",
};

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function BypassRequestInformation({ bypass }: Props) {
  return (
    <Paper
      withBorder
      radius="md"
      p="md"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="md">
        <Text fw={600}>Informasi Permintaan</Text>

        <SimpleGrid
          cols={{
            base: 1,
            sm: 2,
            md: 4,
          }}
        >
          <Stack gap={4}>
            <Text size="xs" c="var(--color-text-secondary)">
              Pesanan
            </Text>

            <Text size="sm" fw={600}>
              {bypass.order.orderCode}
            </Text>
          </Stack>

          <Stack gap={4}>
            <Text size="xs" c="var(--color-text-secondary)">
              Worker
            </Text>

            <Text size="sm" fw={600}>
              {bypass.worker.name}
            </Text>
          </Stack>

          <Stack gap={4}>
            <Text size="xs" c="var(--color-text-secondary)">
              Station
            </Text>

            <Text size="sm" fw={600}>
              {STATION_LABEL[bypass.stationType]}
            </Text>
          </Stack>

          <Stack gap={4}>
            <Text size="xs" c="var(--color-text-secondary)">
              Diajukan Pada
            </Text>

            <Text size="sm" fw={600}>
              {formatDateTime(bypass.createdAt)}
            </Text>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}
