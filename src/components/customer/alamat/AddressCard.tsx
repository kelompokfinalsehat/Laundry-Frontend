"use client";

import {
  Paper,
  Group,
  Stack,
  Text,
  Badge,
  Menu,
  ActionIcon,
} from "@mantine/core";
import type { Address } from "@/types/api/address.types";

type AddressCardProps = {
  address: Address;
  onEdit: () => void;
  onDelete: () => void;
  onSetPrimary: () => void;
  isSettingPrimary: boolean;
};

export function AddressCard({
  address,
  onEdit,
  onDelete,
  onSetPrimary,
  isSettingPrimary,
}: AddressCardProps) {
  return (
    <Paper
      withBorder
      p="md"
      radius="md"
      style={{
        borderColor: address.isPrimary
          ? "var(--color-primary)"
          : "color-mix(in srgb, var(--color-primary) 20%, transparent)",
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Group justify="space-between" align="flex-start" wrap="nowrap">
        <Stack gap={4} style={{ flex: 1, minWidth: 0 }}>
          <Group gap="xs">
            <Text fw={600} style={{ color: "var(--color-text-primary)" }}>
              {address.label || "Alamat"}
            </Text>
            {address.isPrimary && (
              <Badge
                size="sm"
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary)",
                }}
              >
                Utama
              </Badge>
            )}
          </Group>
          <Text size="sm" c="var(--color-text-secondary)">
            {address.formattedAddress}
          </Text>
          <Text size="sm" c="var(--color-text-secondary)">
            {address.phone}
          </Text>
        </Stack>

        <Menu position="bottom-end">
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray">
              ⋮
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            {!address.isPrimary && (
              <Menu.Item onClick={onSetPrimary} disabled={isSettingPrimary}>
                Jadikan alamat utama
              </Menu.Item>
            )}
            <Menu.Item onClick={onEdit}>Edit</Menu.Item>
            <Menu.Item onClick={onDelete} c="var(--color-error)">
              Hapus
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Paper>
  );
}
