import { Title, Text, Stack } from "@mantine/core";
import { RequestPickupForm } from "@/components/customer/order/requestPickupForm ";

export default function RequestPickupPage() {
  return (
    <Stack gap="xl" mx="auto" py={{ base: 16, sm: 32 }}>
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
  );
}
