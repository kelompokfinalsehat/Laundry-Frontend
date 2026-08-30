import type { StationType } from "@/types/api/worker.types";
import {
  Badge,
  Button,
  Card,
  Stack,
  Text,
} from "@mantine/core";

type WorkerInProgressTaskProps = {
  stationType: StationType;
  isCompleting: boolean;
  onComplete: () => void;
};

function getStationLabel(stationType: StationType) {
  switch (stationType) {
    case "WASHING":
      return "Cuci";
    case "IRONING":
      return "Setrika";
    case "PACKING":
      return "Packing";
  }
}

export function WorkerInProgressTask({
  stationType,
  isCompleting,
  onComplete,
}: WorkerInProgressTaskProps) {
  const stationLabel =
    getStationLabel(stationType);

  return (
    <Card withBorder radius="lg" p="lg">
      <Stack gap="md">
        <Badge
          color="blue"
          variant="light"
          w="fit-content"
        >
          Sedang Diproses
        </Badge>

        <Stack gap={4}>
          <Text fw={600}>
            Proses {stationLabel}
          </Text>

          <Text size="sm" c="dimmed">
            Kuantitas telah divalidasi.
            Selesaikan proses {stationLabel},
            kemudian tandai tugas sebagai selesai.
          </Text>
        </Stack>

        <Button
          type="button"
          loading={isCompleting}
          disabled={isCompleting}
          onClick={onComplete}
        >
          Tandai Selesai
        </Button>
      </Stack>
    </Card>
  );
}