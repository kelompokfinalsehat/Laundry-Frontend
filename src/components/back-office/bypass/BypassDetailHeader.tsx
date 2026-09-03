"use client";

import { Badge, Group, Stack, Text, Title } from "@mantine/core";
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
    <Stack gap="xs">
      <Group gap="xs">
        <IconArrowLeft
          size={20}
          style={{
            cursor: "pointer",
          }}
          onClick={() => router.back()}
        />

        <Text size="sm" c="var(--color-text-secondary)">
          Kembali ke Permintaan Bypass
        </Text>
      </Group>

      <Group justify="space-between" align="flex-start">
        <div>
          <Title order={2}>Permintaan Bypass</Title>

          <Text size="sm" c="var(--color-text-secondary)" mt={4}>
            {bypass.order.orderCode}
          </Text>
        </div>

        <Badge color={STATUS_COLOR[bypass.status]} variant="light" size="lg">
          {STATUS_LABEL[bypass.status]}
        </Badge>
      </Group>
    </Stack>
  );
}
