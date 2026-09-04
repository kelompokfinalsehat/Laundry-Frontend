"use client";

import { ResetPasswordForm } from "@/components/authCustomer/ResetPasswordForm";
import {
  Anchor,
  Center,
  Group,
  Loader,
  Paper,
  Stack,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { Suspense } from "react";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
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

        <Suspense
          fallback={
            <Paper
              p={{ base: 24, sm: 32 }}
              radius="md"
              withBorder
              style={{
                backgroundColor: "var(--color-surface)",
              }}
            >
              <Center mih={200}>
                <Loader size="md" />
              </Center>
            </Paper>
          }
        >
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
              <ResetPasswordForm />
            </Stack>
          </Paper>
        </Suspense>
      </Stack>
    </Center>
  );
}