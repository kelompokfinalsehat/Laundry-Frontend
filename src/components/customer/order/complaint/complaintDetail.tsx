"use client";

import { useState } from "react";
import { Paper, Stack, Text, Badge, Image, Group, Modal } from "@mantine/core";
import { COMPLAINT_CATEGORY_LABELS, type Complaint } from "@/types/api/orders.types";

const STATUS_LABELS: Record<Complaint["status"], string> = {
  OPEN: "Menunggu Ditinjau",
  IN_REVIEW: "Sedang Ditinjau",
  RESOLVED: "Selesai",
  REJECTED: "Ditolak",
};

const STATUS_COLORS: Record<Complaint["status"], { bg: string; text: string }> = {
  OPEN: { bg: "var(--color-primary-light)", text: "var(--color-primary)" },
  IN_REVIEW: { bg: "var(--color-primary-light)", text: "var(--color-primary)" },
  RESOLVED: { bg: "var(--color-success-light, #e6f4ea)", text: "var(--color-success, #1a7f37)" },
  REJECTED: { bg: "var(--color-error-light)", text: "var(--color-error)" },
};

export function ComplaintDetail({ complaint }: { complaint: Complaint }) {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const color = STATUS_COLORS[complaint.status];

  return (
    <Paper withBorder p="md" radius="md">
      <Stack gap="xs">
        <Group justify="space-between">
          <Text fw={600} style={{ color: "var(--color-text-primary)" }}>
            Komplain Kamu
          </Text>
          <Badge style={{ backgroundColor: color.bg, color: color.text }}>
            {STATUS_LABELS[complaint.status]}
          </Badge>
        </Group>

        <Text size="sm" c="var(--color-text-secondary)">
          Kategori: {COMPLAINT_CATEGORY_LABELS[complaint.category]}
        </Text>
        <Text size="sm" c="var(--color-text-secondary)">
          {complaint.description}
        </Text>

        <div>
          <Image
            src={complaint.proofPhotoUrl}
            alt="Bukti komplain"
            radius="md"
            mah={200}
            w="auto"
            fit="contain"
            onClick={() => setIsPhotoOpen(true)}
            style={{ cursor: "pointer" }}
          />
          <Text size="xs" c="var(--color-text-secondary)" mt={4}>
            Klik foto untuk memperbesar.
          </Text>
        </div>

        {complaint.responseNote && (
          <Paper withBorder p="sm" radius="md" style={{ backgroundColor: "var(--color-surface)" }}>
            <Text size="xs" fw={600} c="var(--color-text-secondary)" mb={4}>
              Tanggapan Tim Kami
            </Text>
            <Text size="sm">{complaint.responseNote}</Text>
          </Paper>
        )}
      </Stack>

      <Modal
        opened={isPhotoOpen}
        onClose={() => setIsPhotoOpen(false)}
        size="auto"
        centered
        padding={0}
        withCloseButton
      >
        <Image
          src={complaint.proofPhotoUrl}
          alt="Bukti komplain (ukuran penuh)"
          fit="contain"
          mah="85vh"
          w="auto"
        />
      </Modal>
    </Paper>
  );
}
