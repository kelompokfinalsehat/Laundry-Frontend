"use client";

import { EmailChangeForm } from "@/components/profil/emailChangeForm";
import { ProfileForm } from "@/components/profil/profileForm";
import { ProfilePhotoUpload } from "@/components/profil/profilePhotoUpload";
import { Paper, Stack, Divider, Anchor, Group } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const from = searchParams.get("from");

  function handleBack() {
    router.replace(
      from ? `/profil?from=${encodeURIComponent(from)}` : "/profil",
    );
  }
  return (
    <Paper
      maw={480}
      mx="auto"
      p={32}
      radius="md"
      withBorder
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <Stack gap="xl">
        <Anchor
          component="button"
          type="button"
          onClick={handleBack}
          fw={600}
          c="var(--c-text-primary"
        >
          <Group gap={2}>
            <IconChevronLeft stroke={2} />
            Profil Saya
          </Group>
        </Anchor>

        <ProfilePhotoUpload />

        <Divider />

        <ProfileForm />

        <Divider />

        <EmailChangeForm />
      </Stack>
    </Paper>
  );
}
