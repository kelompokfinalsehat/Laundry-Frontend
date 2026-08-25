"use client";

import {
  Badge,
  Button,
  Group,
  Modal,
  Radio,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";

import { useEffect, useState } from "react";

import type {
  ComplaintListItem,
  DecideComplaintPayload,
} from "@/types/api/complaint.types";

type Decision =
  | "APPROVED"
  | "REJECTED";

type Props = {
  opened: boolean;

  complaint:
    | ComplaintListItem
    | null;

  isSubmitting: boolean;

  onClose: () => void;

  onSubmit: (
    payload: DecideComplaintPayload,
  ) => Promise<void>;
};

function getCategoryLabel(
  category: ComplaintListItem["category"],
) {
  const categoryMap: Record<
    ComplaintListItem["category"],
    string
  > = {
    TIDAK_SESUAI: "Tidak Sesuai",
    RUSAK: "Barang Rusak",
    HILANG: "Barang Hilang",
  };

  return categoryMap[category];
}

export function ComplaintDecisionModal({
  opened,
  complaint,
  isSubmitting,
  onClose,
  onSubmit,
}: Props) {
  const [decision, setDecision] =
    useState<Decision | null>(null);

  const [responseNote, setResponseNote] =
    useState("");

  const resetForm = () => {
    setDecision(null);
    setResponseNote("");
  };

  useEffect(() => {
    if (!opened) {
      resetForm();
    }
  }, [opened]);

  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    onClose();
  };

  const handleSubmit = async () => {
    if (
      !decision ||
      responseNote.trim().length === 0
    ) {
      return;
    }

    await onSubmit({
      decision,
      responseNote: responseNote.trim(),
    });
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Tangani Komplain"
      centered
    >
      <Stack gap="md">
        {complaint && (
          <Stack
            gap={4}
            p="sm"
            style={{
              border:
                "1px solid var(--mantine-color-gray-3)",
              borderRadius:
                "var(--mantine-radius-sm)",
            }}
          >
            <Text
              size="sm"
              fw={600}
            >
              {complaint.order.orderCode}
            </Text>

            <Text
              size="sm"
              c="var(--color-text-secondary)"
            >
              {complaint.customer.name}
            </Text>

            <Group gap="xs">
              <Badge
                variant="light"
              >
                {getCategoryLabel(
                  complaint.category,
                )}
              </Badge>
            </Group>

            <Text
              size="sm"
              mt="xs"
            >
              {complaint.description}
            </Text>
          </Stack>
        )}

        <Radio.Group
          label="Keputusan"
          value={decision}
          onChange={(value) =>
            setDecision(
              value as Decision,
            )
          }
          required
        >
          <Stack gap="xs" mt="xs">
            <Radio
              value="APPROVED"
              label="Terima komplain"
            />

            <Radio
              value="REJECTED"
              label="Tolak komplain"
            />
          </Stack>
        </Radio.Group>

        <Textarea
          label="Catatan Tanggapan"
          placeholder="Masukkan tanggapan untuk pelanggan"
          minRows={4}
          value={responseNote}
          onChange={(event) =>
            setResponseNote(
              event.currentTarget.value,
            )
          }
          disabled={isSubmitting}
          required
        />

        <Group justify="flex-end">
          <Button
            variant="default"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Batal
          </Button>

          <Button
            onClick={handleSubmit}
            loading={isSubmitting}
            disabled={
              !decision ||
              responseNote.trim().length === 0
            }
          >
            Simpan Keputusan
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}