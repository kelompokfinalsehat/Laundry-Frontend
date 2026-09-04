"use client";

import {
  Alert,
  Anchor,
  Center,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter, useSearchParams } from "next/navigation";

import { LoginCustomerForm } from "@/components/authCustomer/LoginCustomerForm";

export default function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const justVerified = searchParams.get("verified") === "1";

  const intendedUrl =
    searchParams.get("intended_url") ?? undefined;

  function handleBack() {
    router.push("/");
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
                Masuk ke Popo Laundry
              </Title>

              <Text
                size="sm"
                c="var(--color-text-secondary)"
              >
                Masukkan email dan password kamu.
              </Text>
            </div>

            {justVerified && (
              <Alert
                style={{
                  backgroundColor: "var(--color-success-light)",
                  color: "var(--color-success)",
                }}
              >
                Email berhasil diverifikasi. Silakan masuk.
              </Alert>
            )}

            <LoginCustomerForm
              intendedUrl={intendedUrl}
            />
          </Stack>
        </Paper>
      </Stack>
    </Center>
  );
}