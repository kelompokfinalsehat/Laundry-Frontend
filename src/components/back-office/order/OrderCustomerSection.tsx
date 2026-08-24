import {
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";

import type {
  OrderDetail,
} from "@/types/api/order.types";

type Props = {
  customer: OrderDetail["customer"];
};

export function OrderCustomerSection({
  customer,
}: Props) {
  return (
    <Paper
      withBorder
      radius="md"
      p="lg"
      style={{
        backgroundColor:
          "var(--color-surface)",
      }}
    >
      <Stack gap="md">
        <Text fw={600}>
          Informasi Pelanggan
        </Text>

        <SimpleGrid
          cols={{
            base: 1,
            sm: 2,
            lg: 3,
          }}
          spacing="lg"
        >
          <Stack gap={2}>
            <Text
              size="xs"
              c="var(--color-text-secondary)"
            >
              Nama
            </Text>

            <Text size="sm" fw={500}>
              {customer.name}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text
              size="xs"
              c="var(--color-text-secondary)"
            >
              Email
            </Text>

            <Text size="sm" fw={500}>
              {customer.email}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text
              size="xs"
              c="var(--color-text-secondary)"
            >
              Nomor Telepon
            </Text>

            <Text size="sm" fw={500}>
              {customer.phoneNumber ?? "-"}
            </Text>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}