import {
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <Group
      justify="space-between"
      align="flex-end"
      wrap="wrap"
      gap="md"
    >
      <Stack gap={4}>
        <Title
          order={2}
          c="var(--color-text-primary)"
        >
          {title}
        </Title>

        {description && (
          <Text
            size="sm"
            c="var(--color-text-secondary)"
          >
            {description}
          </Text>
        )}
      </Stack>

      {action}
    </Group>
  );
}