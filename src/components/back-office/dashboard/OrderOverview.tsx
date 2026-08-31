import { Group, Paper, Progress, Stack, Text } from "@mantine/core";
import { OrderOverviewItem } from "@/types/api/dashboard.types";
import { CUSTOMER_STATUS } from "@/lib/constants/customer-status";

export function OrderOverview({ data }: { data: OrderOverviewItem[] }) {
  const total = data.reduce((sum, item) => sum + item.total, 0);
  const sortedData = [...data].sort((a, b) => b.total - a.total);

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
        <div>
          <Text fw={600} c="var(--color-text-primary)">
            Status Pesanan
          </Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Distribusi pesanan saat ini
          </Text>
        </div>

        <Stack gap="sm">
          {sortedData.map((item) => {
            const percentage = total > 0 ? (item.total / total) * 100 : 0;

            return (
              <Stack key={item.status} gap={5}>
                <Group justify="space-between" wrap="nowrap">
                  <Text size="sm" c="var(--color-text-primary)">
                    {CUSTOMER_STATUS[item.status].label}
                  </Text>

                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {item.total}
                  </Text>
                </Group>

                <Progress value={percentage} size={4} radius="xl" color={CUSTOMER_STATUS[item.status].color} />
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Paper>
  );
}
