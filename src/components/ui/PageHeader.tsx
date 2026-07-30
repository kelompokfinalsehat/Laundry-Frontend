import { Group, Stack, Text, Title } from '@mantine/core';

export function PageHeader({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return <Group justify="space-between" align="flex-start" mb="lg"><Stack gap={4}><Title order={2}>{title}</Title>{description && <Text c="dimmed">{description}</Text>}</Stack>{action}</Group>;
}
