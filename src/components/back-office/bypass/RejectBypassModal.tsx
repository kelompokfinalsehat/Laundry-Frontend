"use client";

import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";

type Props = {
  opened: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
};

export function RejectBypassModal({ opened, isSubmitting, onClose, onConfirm }: Props) {
  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    onClose();
  };

  const handleConfirm = async () => {
    await onConfirm();
  };

  return (
    <Modal opened={opened} onClose={handleClose} title="Tolak Permintaan Bypass" centered>
      <Stack gap="md">
        <Group gap="xs" wrap="nowrap">
          <IconAlertTriangle size={20} color="var(--mantine-color-yellow-filled)" />

          <Text fw={600}>Anda yakin ingin menolak permintaan ini?</Text>
        </Group>

        <Text size="sm" c="var(--color-text-secondary)">
          Worker akan dikembalikan ke status assignment sebelumnya dan harus melakukan input serta validasi ulang sebelum dapat melanjutkan proses.
        </Text>

        <Group justify="flex-end" gap="sm">
          <Button variant="default" onClick={handleClose} disabled={isSubmitting}>
            Batal
          </Button>

          <Button color="red" loading={isSubmitting} onClick={handleConfirm}>
            Ya, Tolak
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
