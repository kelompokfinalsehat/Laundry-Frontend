import { Paper, Title, Text, Stack } from "@mantine/core";
import { RequestPickupForm } from "@/components/customer/order/ Requestpickupform ";

export default function RequestPickupPage() {
  return (
    <Paper
      maw={480}
      mx="auto"
      mt={48}
      p={32}
      radius="md"
      withBorder
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <Stack gap="xl">
        <div>
          <Title order={3} style={{ color: "var(--color-text-primary)" }}>
            Request Pickup
          </Title>
          <Text size="sm" c="var(--color-text-secondary)">
            Pilih alamat dan jadwal, tim kami akan menjemput laundry kamu.
          </Text>
        </div>

        <RequestPickupForm />
      </Stack>
    </Paper>
  );
}