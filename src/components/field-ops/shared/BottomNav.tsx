"use client";

import { Box, Indicator, Stack, Text, UnstyledButton } from "@mantine/core";

import { IconCalendarCheck, IconClipboardList, IconHistory, IconHome, IconUser } from "@tabler/icons-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{
    size?: number;
    stroke?: number;
  }>;
  isTask?: boolean;
};

type BottomNavProps = {
  basePath: string;
  tugasNew?: boolean;
  onTaskOpen?: () => void;
};

function buildNavItems(basePath: string): NavItem[] {
  return [
    {
      label: "Beranda",
      href: basePath,
      icon: IconHome,
    },
    {
      label: "Tugas",
      href: `${basePath}/tugas`,
      icon: IconClipboardList,
      isTask: true,
    },
    {
      label: "Riwayat",
      href: `${basePath}/riwayat`,
      icon: IconHistory,
    },
    {
      label: "Absensi",
      href: `${basePath}/absensi`,
      icon: IconCalendarCheck,
    },
    {
      label: "Profil",
      href: `${basePath}/profil`,
      icon: IconUser,
    },
  ];
}

export function BottomNav({ basePath, tugasNew = false, onTaskOpen }: BottomNavProps) {
  const pathname = usePathname();

  const items = buildNavItems(basePath);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-around",
        borderTop: "1px solid var(--mantine-color-gray-3)",
        background: "var(--mantine-color-body)",
        paddingTop: 6,
        paddingBottom: 6,
      }}
    >
      {items.map((item) => {
        const active = item.href === basePath ? pathname === basePath : pathname.startsWith(item.href);

        const Icon = item.icon;

        return (
          <UnstyledButton
            key={item.href}
            component={Link}
            href={item.href}
            onClick={item.isTask ? onTaskOpen : undefined}
            style={{
              minWidth: 64,
              minHeight: 44,
            }}
          >
            <Stack gap={2} align="center">
              {item.isTask ? (
                <Indicator inline label="New" size={16} disabled={!tugasNew}>
                  <Icon size={22} stroke={active ? 2.2 : 1.6} />
                </Indicator>
              ) : (
                <Icon size={22} stroke={active ? 2.2 : 1.6} />
              )}

              <Text size="10px" fw={active ? 700 : 400} c={active ? "blue.7" : "dimmed"}>
                {item.label}
              </Text>
            </Stack>
          </UnstyledButton>
        );
      })}
    </Box>
  );
}
