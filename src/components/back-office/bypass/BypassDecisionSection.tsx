"use client";

import { BypassStatus } from "@/types/api";
import { Button, Group, Paper, Stack, Text } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";

type Props = {
  status: BypassStatus;
  isApproving?: boolean;
  isRejecting?: boolean;
  onApprove: () => void;
  onReject: () => void;
};

export function BypassDecisionSection({ status, isApproving = false, isRejecting = false, onApprove, onReject }: Props) {
  if (status !== "PENDING") {
    return null;
  }
  const isLoading = isApproving || isRejecting;
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
        <div>
          <Text fw={600}>Keputusan Permintaan</Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Periksa kembali perbedaan kuantitas sebelum mengambil keputusan.
          </Text>
        </div>

        <Group justify="flex-end" gap="sm">
          <Button variant="default" color="red" leftSection={<IconX size={16} />} loading={isRejecting} disabled={isLoading} onClick={onReject}>
            Tolak
          </Button>

          <Button color="rinseBlue" leftSection={<IconCheck size={16} />} loading={isApproving} disabled={isLoading} onClick={onApprove}>
            Setujui
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
}
