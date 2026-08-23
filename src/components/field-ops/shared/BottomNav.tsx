"use client";

import { UnstyledButton, Stack, Text, Box } from "@mantine/core";
import { IconHome, IconClipboardList, IconHistory, IconCalendarCheck, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; stroke?: number }>;
  badge?: number;
};

function buildNavItems(basePath: string, tugasBadge?: number): NavItem[] {
  return [
    { label: "Beranda", href: basePath, icon: IconHome },
    { label: "Tugas", href: `${basePath}/tugas`, icon: IconClipboardList, badge: tugasBadge },
    { label: "Riwayat", href: `${basePath}/riwayat`, icon: IconHistory },
    { label: "Absensi", href: `${basePath}/absensi`, icon: IconCalendarCheck },
    { label: "Profil", href: `${basePath}/profil`, icon: IconUser },
  ];
}

export function BottomNav({ basePath, tugasBadge }: { basePath: string; tugasBadge?: number }) {
  const pathname = usePathname();
  const items = buildNavItems(basePath, tugasBadge);

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
        // "Beranda" harus exact match, yang lain boleh match prefix
        // (misal /worker/tugas/xxx tetap highlight tab "Tugas").
        const active = item.href === basePath ? pathname === basePath : pathname?.startsWith(item.href);

        const Icon = item.icon;

        return (
          <UnstyledButton key={item.href} component={Link} href={item.href} style={{ position: "relative", minWidth: 64, minHeight: 44 }}>
            <Stack gap={2} align="center">
              <Icon size={22} stroke={active ? 2.2 : 1.6} />
              <Text size="10px" fw={active ? 700 : 400} c={active ? "blue.7" : "dimmed"}>
                {item.label}
              </Text>
            </Stack>
            {!!item.badge && (
              <Box
                style={{
                  position: "absolute",
                  top: -2,
                  right: 8,
                  minWidth: 16,
                  height: 16,
                  borderRadius: 999,
                  background: "var(--mantine-color-red-6)",
                  color: "white",
                  fontSize: 9,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 3px",
                  border: "1.5px solid var(--mantine-color-body)",
                }}
              >
                {item.badge}
              </Box>
            )}
          </UnstyledButton>
        );
      })}
    </Box>
  );
}
