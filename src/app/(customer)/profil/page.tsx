"use client";

import {
  Anchor,
  Avatar,
  Badge,
  Button,
  Divider,
  Flex,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconCheck,
  IconPencil,
  IconX,
  IconUser,
  IconMail,
  IconPhone,
  IconChevronLeft,
} from "@tabler/icons-react";
import Link from "next/link";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter, useSearchParams } from "next/navigation";



export default function ProfilPage({
  fallbackHref = "/",
}: {
  fallbackHref?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const from = searchParams.get("from");

  const { user } = useAuthStore();

  if (!user) return null;

  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "?";


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
      <Flex direction="column" align="center" ta="center">
        <Title order={2} style={{ color: "var(--color-text-primary)" }}>
          Profil Saya
        </Title>
        <Text size="sm" c="var(--color-text-secondary)">
          Data personal dan informasi akun kamu.
        </Text>
      </Flex>
      {/* Card ringkasan — banner + avatar + aksi */}
      <Paper withBorder radius="md" style={{ overflow: "hidden" }}>
        <div
          style={{
            height: 88,
            backgroundImage:
              "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
          }}
        />

        <Stack align="center" gap={6} px="xl" pb="xl" mt={-44}>
          <Avatar size={88} radius="xl" src={user.profilePhotoUrl || undefined}>
            {initials}
          </Avatar>

          <Text fw={600} size="lg" mt={4}>
            {user.name}
          </Text>
          <Text size="sm" c="var(--color-text-secondary)">
            {user.email}
          </Text>

          {user.isEmailVerified ? (
            <Badge
              size="sm"
              variant="light"
              leftSection={<IconCheck size={12} />}
              style={{
                backgroundColor: "var(--color-success-light)",
                color: "var(--color-success)",
              }}
              mt={4}
            >
              Email terverifikasi
            </Badge>
          ) : (
            <Badge
              size="sm"
              variant="light"
              leftSection={<IconX size={12} />}
              style={{
                backgroundColor: "var(--color-error-light)",
                color: "var(--color-error)",
              }}
              mt={4}
            >
              Belum terverifikasi
            </Badge>
          )}

          <Group grow w="100%" gap="sm" mt="lg">
            <Button
              component={Link}
              href="/profil/edit"
              leftSection={<IconPencil size={16} />}
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-text-on-accent)",
              }}
            >
              Edit Profil
            </Button>
          </Group>
        </Stack>
      </Paper>

      {/* Card info akun */}
      <Paper withBorder radius="md" p="lg">
        <Title order={4} mb="lg">
          Informasi Akun
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          <ProfileField
            icon={IconUser}
            label="Nama Lengkap"
            value={user.name}
          />
          <ProfileField icon={IconMail} label="Email" value={user.email} />
          <ProfileField
            icon={IconPhone}
            label="Nomor Telepon"
            value={user.phone || "Belum diisi"}
          />
        </SimpleGrid>

        <Divider my="lg" />

        <Text fw={500} size="sm">
          Keamanan Akun
        </Text>
        <Text size="xs" c="var(--color-text-secondary)" mt={2}>
          Terakhir diperbarui melalui halaman edit profil.
        </Text>
      </Paper>
    </Stack>
  );
}

function ProfileField({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string;
}) {
  return (
    <Group gap="sm" align="flex-start" wrap="nowrap">
      <ThemeIcon
        size={36}
        radius="md"
        variant="light"
        style={{
          backgroundColor: "var(--color-primary-light)",
          color: "var(--color-primary)",
          flexShrink: 0,
        }}
      >
        <Icon size={18} />
      </ThemeIcon>
      <div style={{ minWidth: 0 }}>
        <Text size="xs" c="var(--color-text-secondary)">
          {label}
        </Text>
        <Text size="sm" fw={500} truncate>
          {value}
        </Text>
      </div>
    </Group>
  );
}
