"use client";

import { ForgotPasswordForm } from "@/components/authCustomer/ForgotPasswordForm";
import {
  Anchor,
  Center,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();

  function handleBack() {
    router.push("/login");
  }

  return (
    <Center
      mih="100vh"
      px={{ base: 16, sm: 24 }}
      py={{ base: 24, sm: 40 }}
    >
      <Stack
        w="100%"
        maw={420}
        gap="sm"
      >
        <Anchor
          component="button"
          type="button"
          onClick={handleBack}
          fw={600}
          c="var(--color-text-primary)"
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Group gap={4}>
            <IconChevronLeft size={16} stroke={2} />
            Kembali
          </Group>
        </Anchor>

        <Paper
          w="100%"
          p={{ base: 24, sm: 32 }}
          radius="md"
          withBorder
          style={{
            backgroundColor: "var(--color-surface)",
          }}
        >
          <Stack gap="md">
            <div>
              <Title
                order={3}
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Lupa Kata Sandi?
              </Title>

              <Text
                size="sm"
                c="var(--color-text-secondary)"
              >
                Jangan khawatir! Masukkan email kamu di bawah untuk mengatur
                ulang kata sandi.
              </Text>
            </div>

            <ForgotPasswordForm />
          </Stack>
        </Paper>
      </Stack>
    </Center>
  );
}