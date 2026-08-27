import { Badge, Paper, ScrollArea, Stack, Table, Text } from "@mantine/core";
import { RecentOrderItem } from "@/types/api/dashboard.types";
import { DASHBOARD_STATUS_LABEL } from "@/lib/constants/dashboard-status";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));

export function RecentOrders({ data }: { data: RecentOrderItem[] }) {
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
            Pesanan Terbaru
          </Text>

          <Text size="sm" c="var(--color-text-secondary)">
            5 pesanan yang terakhir dibuat
          </Text>
        </div>

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
              {data.map((order) => (
                <Table.Tr key={order.id}>
                  <Table.Td>
                    <Text size="sm" fw={600}>
                      {order.orderCode}
                    </Text>
                  </Table.Td>

                  <Table.Td>
                    <Text size="sm">{order.customerName}</Text>
                  </Table.Td>

                  <Table.Td>
                    <Badge variant="light" color="rinseBlue" radius="sm">
                      {DASHBOARD_STATUS_LABEL[order.status] ?? order.status}
                    </Badge>
                  </Table.Td>

                  <Table.Td>
                    <Text size="sm" c="var(--color-text-secondary)">
                      {formatDate(order.createdAt)}
                    </Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Stack>
    </Paper>
  );
}
