"use client";

import { Title, Text, Stack, Anchor, Group } from "@mantine/core";
import { RequestPickupForm } from "@/components/customer/order/requestPickupForm ";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { IconChevronLeft } from "@tabler/icons-react";

export default function RequestPickupPage() {
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
    <Stack gap="xl" mx="auto" py={{ base: 16, sm: 32 }}>
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
