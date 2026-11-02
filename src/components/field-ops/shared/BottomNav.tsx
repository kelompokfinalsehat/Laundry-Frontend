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
    color?: string;
    style?: React.CSSProperties;
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
      component="nav"
      aria-label="Navigasi Menu Utama"
      style={{
        width: "100%",
        maxWidth: 520,
        pointerEvents: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        border: "1px solid rgba(226, 227, 222, 0.9)",
        borderRadius: 9999,
        boxShadow:
          "0 10px 25px -5px rgba(38, 49, 58, 0.12), 0 8px 10px -6px rgba(38, 49, 58, 0.08), 0 0 1px rgba(38, 49, 58, 0.2)",
        padding: "6px 8px",
        gap: 4,
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
            aria-label={item.label}
            aria-current={active ? "page" : undefined}
            style={{
              flex: 1,
              minWidth: 0,
              minHeight: 48,
              borderRadius: 9999,
              padding: "6px 4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: active ? "var(--color-primary-light)" : "transparent",
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
            }}
          >
            <Stack gap={2} align="center" style={{ width: "100%" }}>
              {item.isTask ? (
                <Indicator
                  inline
                  label="New"
                  size={15}
                  disabled={!tugasNew}
                  color="red"
                  offset={2}
                  styles={{
                    indicator: {
                      fontSize: "9px",
                      fontWeight: 700,
                      padding: "0 4px",
                      lineHeight: "13px",
                    },
                  }}
                >
                  <Icon
                    size={21}
                    stroke={active ? 2.3 : 1.7}
                    style={{
                      color: active ? "var(--color-primary-dark)" : "var(--color-text-secondary)",
                      transition: "color 0.2s ease, stroke-width 0.2s ease",
                    }}
                  />
                </Indicator>
              ) : (
                <Icon
                  size={21}
                  stroke={active ? 2.3 : 1.7}
                  style={{
                    color: active ? "var(--color-primary-dark)" : "var(--color-text-secondary)",
                    transition: "color 0.2s ease, stroke-width 0.2s ease",
                  }}
                />
              )}

              <Text
                size="10.5px"
                fw={active ? 700 : 500}
                c={active ? "var(--color-primary-dark)" : "var(--color-text-secondary)"}
                style={{
                  lineHeight: 1.2,
                  whiteSpace: "nowrap",
                  letterSpacing: active ? "-0.2px" : "normal",
                  transition: "color 0.2s ease, font-weight 0.2s ease",
                }}
              >
                {item.label}
              </Text>
            </Stack>
          </UnstyledButton>
        );
      })}
    </Box>
  );
}
