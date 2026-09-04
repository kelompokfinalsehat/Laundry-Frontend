import { Badge, Button, Group, Paper, ScrollArea, Stack, Table, Text } from "@mantine/core";
import { DashboardResponse } from "@/types/api/dashboard.types";
import { CUSTOMER_STATUS } from "@/lib/constants/customer-status";

type Props = {
  data: DashboardResponse["recentOrders"];
  onSelect: (orderId: string) => void;
  onViewAll: () => void;
};
const formatDate = (date: string) =>
  new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));

export function RecentOrders({ data, onSelect, onViewAll }: Props) {
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
        <Group justify="space-between" align="center">
          <div>
            <Text fw={600} c="var(--color-text-primary)">
              Pesanan Terbaru
            </Text>

            <Text size="sm" c="var(--color-text-secondary)">
              Pesanan yang baru masuk
            </Text>
          </div>

          <Button variant="subtle" size="xs" onClick={onViewAll}>
            Lihat semua
          </Button>
        </Group>

        <ScrollArea>
          <Table highlightOnHover miw={650} verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Kode</Table.Th>
                <Table.Th>Customer</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Dibuat</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {data.map((order) => {
                const customerStatus = CUSTOMER_STATUS[order.status];
                return (
                  <Table.Tr
                    key={order.id}
                    onClick={() => onSelect(order.id)}
                    style={{
                      cursor: "pointer",
                      transition: "background-color 120ms ease",
                    }}
                  >
                    <Table.Td>
                      <Text size="sm" fw={600}>
                        {order.orderCode}
                      </Text>
                    </Table.Td>

                    <Table.Td>
                      <Text size="sm">{order.customerName}</Text>
                    </Table.Td>

                    <Table.Td>
                      <Badge variant="light" color={customerStatus.color} radius="sm">
                        {customerStatus.label}
                      </Badge>
                    </Table.Td>

                    <Table.Td>
                      <Text size="sm" c="var(--color-text-secondary)">
                        {formatDate(order.createdAt)}
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Stack>
    </Paper>
  );
}
