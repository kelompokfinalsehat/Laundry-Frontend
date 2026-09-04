"use client";

import {
  Paper,
  Title,
  Text,
  Stack,
  Anchor,
  Group,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

import { RegisterCustomerForm } from "@/components/authCustomer/RegisterCustomerForm";

export default function RegisterPage() {
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  return (
    <>
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

      <Paper
        maw={420}
        mx="auto"
        mt={64}
        p={32}
        radius="md"
        withBorder
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <Stack gap="md">
          <div>
            <Title
              order={3}
              style={{ color: "var(--color-text-primary)" }}
            >
              Daftar Popo Laundry
            </Title>

            <Text size="sm" c="var(--color-text-secondary)">
              Masukkan email kamu, kami kirim link verifikasi.
            </Text>
          </div>

          <RegisterCustomerForm />
        </Stack>
      </Paper>
    </>
  );
}