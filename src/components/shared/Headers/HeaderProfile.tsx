"use client";

import {
  Avatar,
  Group,
  Menu,
  Skeleton,
  Text,
  UnstyledButton,
  Button,
  Box,
} from "@mantine/core";
import {
  IconChevronDown,
  IconLogout,
  IconUser,
  IconPackage,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/auth.hooks";
import { useLogout } from "@/hooks/auth.hooks";

export function HeaderProfile() {
  const { data: user, isLoading } = useCurrentUser();
  const router = useRouter();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();

  if (isLoading) {
    return (
      <Group gap="xs">
        <Skeleton height={36} width={36} radius="xl" />
        <Skeleton height={14} width={80} visibleFrom="sm" />
      </Group>
    );
  }

  if (!user) {
  return (
    <Group gap="sm">
  <Button
    component={Link}
    href="/login"
    variant="subtle"
    size="sm"
  >
    Masuk
  </Button>

  <Button
    component={Link}
    href="/register"
    size="sm"
    style={{
      backgroundColor: "var(--color-accent)",
      color: "var(--color-text-on-accent)",
    }}
  >
    Daftar
  </Button>
</Group>
  );
}

  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "?";

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => router.replace("/login"),
    });
  };

  return (
    <Menu shadow="md" width={220} position="bottom-end">
      <Menu.Target>
        <UnstyledButton>
          <Group gap="xs">
            <Avatar
              radius="xl"
              size={36}
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              {initials}
            </Avatar>
            <Text fw={500} size="lg" visibleFrom="sm">
              {user.name}
            </Text>
            <Box
              visibleFrom="sm"
              component="span"
              style={{ display: "inline-flex" }}
            >
              <IconChevronDown
                size={16}
                style={{ color: "var(--color-text-secondary)" }}
              />
            </Box>
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label style={{ wordBreak: "break-all" }}>{user.email}</Menu.Label>

        <Menu.Item
          component={Link}
          href="/profil"
          leftSection={<IconUser size={16} />}
        >
          Profil Saya
        </Menu.Item>

        <Menu.Item
          component={Link}
          href="/pesanan"
          leftSection={<IconPackage size={16} />}
        >
          Pesanan Saya
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          color="red"
          leftSection={<IconLogout size={16} />}
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? "Keluar..." : "Keluar"}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
