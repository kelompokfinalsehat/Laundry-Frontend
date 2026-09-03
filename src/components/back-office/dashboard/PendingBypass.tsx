import { Badge, Group, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";
import { DashboardResponse } from "@/types/api/dashboard.types";
import { CUSTOMER_STATUS } from "@/lib/constants/customer-status";

type Props = {
  data: DashboardResponse["pendingBypass"];
};

export function PendingBypass({ data }: Props) {
  return (
    <Paper
      withBorder
      p="lg"
      radius="md"
      h="100%"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="lg">
        <Group justify="space-between" align="flex-start" wrap="nowrap">
          <Group gap="sm" wrap="nowrap">
            <ThemeIcon size={40} radius="md" variant="light" color="red" style={{ flexShrink: 0 }}>
              <IconAlertTriangle size={20} />
            </ThemeIcon>

            <div>
              <Text fw={600} c="var(--color-text-primary)">
                Request Bypass
              </Text>

              <Text size="sm" c="var(--color-text-secondary)">
                Request yang membutuhkan keputusan
              </Text>
            </div>
          </Group>

          <Badge color="red" variant="light" radius="sm">
            {data.total}
          </Badge>
        </Group>

        {data.items.length === 0 ? (
          <Text size="sm" c="var(--color-text-secondary)">
            Tidak ada request bypass pending.
          </Text>
        ) : (
          <Stack gap="sm">
            {data.items.map((item) => (
              <Paper
                key={item.id}
                p="sm"
                radius="sm"
                withBorder
                style={{
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <Text size="sm" fw={600} c="var(--color-text-primary)">
                  {item.orderCode}
                </Text>

                <Text size="sm" c="var(--color-text-secondary)">
                  {item.workerName}
                </Text>

                <Text size="xs" c="var(--color-text-secondary)">
                  Station: {CUSTOMER_STATUS[item.stationType].label}
                </Text>
              </Paper>
            ))}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
}
