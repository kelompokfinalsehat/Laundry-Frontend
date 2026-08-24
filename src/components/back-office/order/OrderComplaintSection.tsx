"use client";

import {
  Badge,
  Button,
  Group,
  Image,
  Modal,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import {
  IconExternalLink,
} from "@tabler/icons-react";

import {
  useState,
} from "react";

import type {
  ComplaintCategory,
  ComplaintStatus,
  OrderDetail,
} from "@/types/api/order.types";

type Props = {
  complaint: OrderDetail["complaint"];
};

const COMPLAINT_CATEGORY: Record<
  ComplaintCategory,
  {
    label: string;
    color: string;
  }
> = {
  TIDAK_SESUAI: {
    label: "Tidak Sesuai",
    color: "orange",
  },
  RUSAK: {
    label: "Barang Rusak",
    color: "red",
  },
  HILANG: {
    label: "Barang Hilang",
    color: "grape",
  },
};

const COMPLAINT_STATUS: Record<
  ComplaintStatus,
  {
    label: string;
    color: string;
  }
> = {
  OPEN: {
    label: "Menunggu Penanganan",
    color: "yellow",
  },
  APPROVED: {
    label: "Disetujui",
    color: "green",
  },
  REJECTED: {
    label: "Ditolak",
    color: "red",
  },
};

function formatDateTime(value: string | null) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function OrderComplaintSection({
  complaint,
}: Props) {
  const [proofOpened, setProofOpened] =
    useState(false);

  if (!complaint) {
    return (
      <Paper
        withBorder
        p="lg"
        radius="md"
      >
        <Stack gap="lg">
          <Title order={4}>
            Komplain
          </Title>

          <Text
            size="sm"
            c="var(--color-text-secondary)"
          >
            Tidak ada komplain untuk pesanan ini.
          </Text>
        </Stack>
      </Paper>
    );
  }

  const category =
    COMPLAINT_CATEGORY[
      complaint.category
    ];

  const status =
    COMPLAINT_STATUS[
      complaint.status
    ];

  return (
    <>
      <Paper
        withBorder
        p="lg"
        radius="md"
      >
        <Stack gap="lg">
          <Group
            justify="space-between"
            align="flex-start"
          >
            <Stack gap={4}>
              <Title order={4}>
                Komplain
              </Title>

              <Text
                size="xs"
                c="var(--color-text-secondary)"
              >
                Dibuat{" "}
                {formatDateTime(
                  complaint.createdAt,
                )}
              </Text>
            </Stack>

            <Group gap="xs">
              <Badge
                variant="light"
                color={category.color}
              >
                {category.label}
              </Badge>

              <Badge
                variant="light"
                color={status.color}
              >
                {status.label}
              </Badge>
            </Group>
          </Group>

          <Stack gap={4}>
            <Text
              size="xs"
              c="var(--color-text-secondary)"
            >
              Deskripsi Komplain
            </Text>

            <Text size="sm">
              {complaint.description}
            </Text>
          </Stack>

          <Stack gap="xs">
            <Text
              size="xs"
              c="var(--color-text-secondary)"
            >
              Bukti Foto
            </Text>

            <Button
              variant="light"
              rightSection={
                <IconExternalLink size={16} />
              }
              w="fit-content"
              onClick={() =>
                setProofOpened(true)
              }
            >
              Lihat Bukti
            </Button>
          </Stack>

          {complaint.responseNote && (
            <Stack gap={4}>
              <Text
                size="xs"
                c="var(--color-text-secondary)"
              >
                Tanggapan
              </Text>

              <Text size="sm">
                {complaint.responseNote}
              </Text>
            </Stack>
          )}

          {complaint.decidedAt && (
            <Text
              size="xs"
              c="var(--color-text-secondary)"
            >
              Diputuskan pada{" "}
              {formatDateTime(
                complaint.decidedAt,
              )}
            </Text>
          )}
        </Stack>
      </Paper>

      <Modal
        opened={proofOpened}
        onClose={() =>
          setProofOpened(false)
        }
        title="Bukti Komplain"
        centered
        size="lg"
      >
        <Image
          src={complaint.proofPhotoUrl}
          alt="Bukti komplain"
          radius="md"
        />
      </Modal>
    </>
  );
}