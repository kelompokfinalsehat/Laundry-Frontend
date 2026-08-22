import {
  Badge,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconTruckDelivery } from "@tabler/icons-react";
import type { DashboardResponse } from "@/types/api/dashboard.type";

type Props = {
  data: DashboardResponse["pendingReceive"];
};

export function PendingReceive({ data }: Props) {
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
        <Group
          justify="space-between"
          align="flex-start"
          wrap="nowrap"
        >
          <Group gap="sm" wrap="nowrap">
            <ThemeIcon
              size={40}
              radius="md"
              variant="light"
              color="orange"
              style={{ flexShrink: 0 }}
            >
              <IconTruckDelivery size={20} />
            </ThemeIcon>

            <div>
              <Text
                fw={600}
                c="var(--color-text-primary)"
              >
                Menunggu Penerimaan
              </Text>

              <Text
                size="sm"
                c="var(--color-text-secondary)"
              >
                Laundry sedang menuju outlet
              </Text>
            </div>
          </Group>

          <Badge
            color="orange"
            variant="light"
            radius="sm"
          >
            {data.total}
          </Badge>
        </Group>

        {data.items.length === 0 ? (
          <Text
            size="sm"
            c="var(--color-text-secondary)"
          >
            Tidak ada pesanan yang perlu diterima.
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
                <Text
                  size="sm"
                  fw={600}
                  c="var(--color-text-primary)"
                >
                  {item.orderCode}
                </Text>

                <Text
                  size="sm"
                  c="var(--color-text-secondary)"
                >
                  {item.customerName}
                </Text>
              </Paper>
            ))}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
}