"use client";


import { Title, Text, Stack, Anchor, Group } from "@mantine/core";
import { AddressList } from "@/components/customer/alamat/AddressList";
import { useRouter, useSearchParams } from "next/navigation";
import { IconChevronLeft } from "@tabler/icons-react";

export default function AddressesPage() {
  const router = useRouter();
    const searchParams = useSearchParams();
    const from = searchParams.get("from");
  
    function handleBack() {
      if (from) {
        router.replace(from);
        return;
      }
  
      router.back();
    }
  return (
    <Stack gap="xl" mx="auto" p={{ base: 16, sm: 32 }}>
      <Anchor
        component="button"
        type="button"
        onClick={handleBack}
        fw={600}
        c="var(--color-text-primary)"
      >
        <Group gap={2}>
          <IconChevronLeft size={16} stroke={2} />
          Kembali
        </Group>
      </Anchor>
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
