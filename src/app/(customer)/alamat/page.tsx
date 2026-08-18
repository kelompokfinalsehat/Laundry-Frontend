import { Title, Text, Stack, Paper } from "@mantine/core";
import { AddressList } from "@/components/customer/alamat/AddressList";

export default function AddressesPage() {
  return (
    <Stack gap="xl" maw={960} mx="auto" p={{ base: 16, sm: 32 }}>
      <div>
        <Title order={3} style={{ color: "var(--color-text-primary)" }}>
          Alamat Saya
        </Title>
        <Text size="sm" c="var(--color-text-secondary)">
          Kelola alamat pickup dan delivery kamu, maksimal 5 alamat tersimpan.
        </Text>
      </div>

      <AddressList />
    </Stack>
  );
}
