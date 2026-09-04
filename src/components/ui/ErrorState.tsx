
"use client";

import { Button, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";

export function ErrorState({
  title = "Gagal memuat data",
  description,
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <Stack align="center" py={48} gap="xs">
      <ThemeIcon size={56} radius="xl" variant="light" color="red">
        <IconAlertTriangle size={28} />
      </ThemeIcon>
      <Text fw={600}>{title}</Text>
      {description && (
        <Text size="sm" c="dimmed" ta="center" maw={320}>
          {description}
        </Text>
      )}
      {onRetry && (
        <Button color="red" variant="light" size="xs" mt="xs" onClick={onRetry}>
          Coba lagi
        </Button>
      )}
    </Stack>
  );
}