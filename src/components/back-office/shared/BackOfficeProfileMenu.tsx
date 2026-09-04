"use client";

import {
  Avatar,
  Box,
  Group,
  Menu,
  Skeleton,
  Text,
  UnstyledButton,
} from "@mantine/core";

import {
  IconChevronDown,
  IconLogout,
  IconUser,
} from "@tabler/icons-react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/stores/useAuthStore";
import { useBackOfficeLogout } from "@/hooks/backOfficeAuth.hooks";

type Props = {
  role: "OUTLET_ADMIN" | "SUPER_ADMIN";
};

export function BackOfficeProfileMenu({ role }: Props) {
  const user = useAuthStore((state) => state.user);
  const isInitializing = useAuthStore(
    (state) => state.isInitializing,
  );

  const router = useRouter();

  const { mutate: logout, isPending } = useBackOfficeLogout();

  if (isInitializing) {
    return (
      <Group gap="xs">
        <Skeleton height={36} width={36} radius="xl" />
        <Skeleton height={14} width={90} visibleFrom="sm" />
      </Group>
    );
  }

  if (!user) {
    return null;
  }

  const initials =
    user.name
      ?.split(" ")
      .map((item) => item[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "?";

  const roleLabel =
    role === "SUPER_ADMIN"
      ? "Super Admin"
      : "Outlet Admin";

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        useAuthStore.getState().clearUser();
        router.replace("/internal/login");
      },
    });
  };

  return (
    <Menu
      shadow="md"
      width={240}
      position="bottom-end"
    >
      <Menu.Target>
        <UnstyledButton>
          <Group gap="xs">
            <Avatar
              src={user.profilePhotoUrl || undefined}
              radius="xl"
              size={38}
            >
              {initials}
            </Avatar>

            <Box visibleFrom="sm">
              <Text size="sm" fw={600}>
                {user.name}
              </Text>

              <Text size="xs" c="dimmed">
                {roleLabel}
              </Text>
            </Box>

            <Box
              visibleFrom="sm"
              component="span"
              style={{
                display: "inline-flex",
              }}
            >
              <IconChevronDown size={16} />
            </Box>
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>
          {user.email}
        </Menu.Label>

        <Menu.Item
          component={Link}
          href="/internal/profile"
          leftSection={<IconUser size={16} />}
        >
          Profil Saya
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          color="red"
          leftSection={<IconLogout size={16} />}
          onClick={handleLogout}
          disabled={isPending}
        >
          {isPending ? "Keluar..." : "Keluar"}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}