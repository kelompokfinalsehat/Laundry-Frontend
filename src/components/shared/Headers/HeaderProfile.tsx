"use client";

import {
  Avatar, Group, Menu, Skeleton, Text, UnstyledButton, Button, Box,
} from "@mantine/core";
import {
  IconChevronDown, IconLogout, IconUser, IconPackage,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import { useLogout } from "@/hooks/authCustomer.hooks";
import { NAV_LINKS } from "./nav-links";

export function HeaderProfile() {
  const user = useAuthStore((s) => s.user);
  const isInitializing = useAuthStore((s) => s.isInitializing);
  const router = useRouter();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();

  if (isInitializing) {
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
        <Button component={Link} href="/login" variant="subtle" size="sm">
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
    ? user.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
    : "?";

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        useAuthStore.getState().clearUser();
        router.replace("/login");
      },
    });
  };

  return (
    <Menu shadow="md" width={220} position="bottom-end">
      <Menu.Target>
        <UnstyledButton>
          <Group gap="xs">
            <Avatar
              src={user?.profilePhotoUrl || undefined}
              radius="xl"
              size={40}
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              {initials}
            </Avatar>
            <Text fw={500} size="lg" visibleFrom="sm">{user.name}</Text>
            <Box visibleFrom="sm" component="span" style={{ display: "inline-flex" }}>
              <IconChevronDown size={16} style={{ color: "var(--color-text-secondary)" }} />
            </Box>
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label style={{ wordBreak: "break-all" }}>{user.email}</Menu.Label>

        {NAV_LINKS.map(({ label, href, icon: Icon }) => (
          <Menu.Item
            key={href}
            component={Link}
            href={href}
            leftSection={<Icon size={16} />}
          >
            {label}
          </Menu.Item>
        ))}
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