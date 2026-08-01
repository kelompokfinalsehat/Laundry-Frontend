import { Button, Paper, Stack, Text, Title } from "@mantine/core";

export function EmptyState({
  title = "Belum ada data",
  description = "Data akan tampil di sini.",
  actionLabel,
  onAction,
}: {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <Paper withBorder p="xl">
      <Stack align="center">
        <Title order={4}>{title}</Title>
        <Text c="dimmed" ta="center">
          {description}
        </Text>
        {actionLabel && <Button onClick={onAction}>{actionLabel}</Button>}
      </Stack>
    </Paper>
  );
}
