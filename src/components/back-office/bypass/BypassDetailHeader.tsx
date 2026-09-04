"use client";

import { ActionIcon, Badge, Group, Stack, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import { IconArrowLeft } from "@tabler/icons-react";
import { BypassDetail } from "@/types/api/bypass.types";
import { BypassStatus } from "@/types/api";

type Props = {
  bypass: BypassDetail;
};

const STATUS_LABEL: Record<BypassStatus, string> = {
  PENDING: "Menunggu",
  APPROVED: "Disetujui",
  REJECTED: "Ditolak",
};

const STATUS_COLOR: Record<BypassStatus, string> = {
  PENDING: "yellow",
  APPROVED: "green",
  REJECTED: "red",
};

export function BypassDetailHeader({ bypass }: Props) {
  const router = useRouter();
  return (
    <Group justify="space-between" align="center">
      <Group gap="md"> 
        <ActionIcon variant="default" onClick={() => router.back()} aria-label="Kembali">
          <IconArrowLeft size={18} />
        </ActionIcon>

        <Stack gap={2}>
          <Text fw={700} size="xl" c="var(--color-text-primary)">
            {bypass.order.orderCode}
          </Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Pengajuan bypass oleh {bypass.worker.name}
          </Text>
        </Stack>
      </Group>

      <Badge color={STATUS_COLOR[bypass.status]} variant="light">
        {STATUS_LABEL[bypass.status]}
      </Badge>
    </Group>
  );
}
