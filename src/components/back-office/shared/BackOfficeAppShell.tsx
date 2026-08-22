"use client";

import {
  AppShell,
  Burger,
  Group,
  NavLink,
  ScrollArea,
  Stack,
  Text,
  ThemeIcon,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBuildingStore,
  IconCash,
  IconClipboardList,
  IconFileAnalytics,
  IconLayoutDashboard,
  IconPackage,
  IconRefresh,
  IconReportAnalytics,
  IconRoute,
  IconSettings,
  IconShieldCheck,
  IconUsers,
  IconUserCheck,
  IconClock,
  IconAlertCircle,
  IconReceipt,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Role } from "@/types/api";

type MenuItem = {
  label: string;
  href: string;
};

type MenuGroup = {
  label: string;
  items: MenuItem[];
};

const outlet: MenuGroup[] = [
  {
    label: "UTAMA",
    items: [
      {
        label: "Dashboard",
        href: "/internal/outlet-admin/dashboard",
      },
    ],
  },
  {
    label: "OPERASIONAL",
    items: [
      {
        label: "Antrean Driver",
        href: "/internal/outlet-admin/antrean/driver",
      },
      {
        label: "Antrean Station",
        href: "/internal/outlet-admin/antrean/station",
      },
      {
        label: "Penerimaan",
        href: "/internal/outlet-admin/penerimaan",
      },
      {
        label: "Pesanan",
        href: "/internal/outlet-admin/pesanan",
      },
      {
        label: "Bypass",
        href: "/internal/outlet-admin/bypass",
      },
      {
        label: "Komplain",
        href: "/internal/outlet-admin/komplain",
      },
    ],
  },
  {
    label: "MANAJEMEN OUTLET",
    items: [
      {
        label: "Tim Outlet",
        href: "/internal/outlet-admin/tim-outlet",
      },
      {
        label: "Absensi",
        href: "/internal/outlet-admin/absensi",
      },
    ],
  },
  {
    label: "LAPORAN",
    items: [
      {
        label: "Laporan",
        href: "/internal/outlet-admin/laporan",
      },
    ],
  },
];

const superAdmin: MenuGroup[] = [
  {
    label: "UTAMA",
    items: [
      {
        label: "Dashboard",
        href: "/internal/super-admin/dashboard",
      },
    ],
  },
  {
    label: "MANAJEMEN",
    items: [
      {
        label: "Outlet",
        href: "/internal/super-admin/outlet",
      },
      {
        label: "Karyawan",
        href: "/internal/super-admin/karyawan",
      },
      {
        label: "Item Laundry",
        href: "/internal/super-admin/item-laundry",
      },
    ],
  },
  {
    label: "HARGA & TARIF",
    items: [
      {
        label: "Harga Laundry",
        href: "/internal/super-admin/harga/laundry",
      },
      {
        label: "Harga Shipping",
        href: "/internal/super-admin/harga/shipping",
      },
    ],
  },
  {
    label: "OPERASIONAL",
    items: [
      {
        label: "Pesanan",
        href: "/internal/super-admin/pesanan",
      },
      {
        label: "Komplain",
        href: "/internal/super-admin/komplain",
      },
    ],
  },
  {
    label: "LAPORAN & MONITORING",
    items: [
      {
        label: "Laporan Penjualan",
        href: "/internal/super-admin/laporan/penjualan",
      },
      {
        label: "Kinerja Karyawan",
        href: "/internal/super-admin/laporan/kinerja-karyawan",
      },
      {
        label: "Audit Log",
        href: "/internal/super-admin/audit-log",
      },
    ],
  },
];

const menuIcons: Record<string, React.ReactNode> = {
  Dashboard: <IconLayoutDashboard size={18} />,
  Outlet: <IconBuildingStore size={18} />,
  Karyawan: <IconUsers size={18} />,
  "Item Laundry": <IconPackage size={18} />,
  "Harga Laundry": <IconCash size={18} />,
  "Harga Shipping": <IconRoute size={18} />,
  Pesanan: <IconClipboardList size={18} />,
  Komplain: <IconAlertCircle size={18} />,
  "Laporan Penjualan": <IconReportAnalytics size={18} />,
  "Kinerja Karyawan": <IconUserCheck size={18} />,
  "Audit Log": <IconShieldCheck size={18} />,

  "Antrean Driver": <IconClock size={18} />,
  "Antrean Station": <IconSettings size={18} />,
  Penerimaan: <IconReceipt size={18} />,
  Bypass: <IconRefresh size={18} />,
  "Tim Outlet": <IconUsers size={18} />,
  Absensi: <IconUserCheck size={18} />,
  Laporan: <IconFileAnalytics size={18} />,
};

export function BackOfficeAppShell({
  children,
  role,
}: {
  children: React.ReactNode;
  role: Extract<Role, "OUTLET_ADMIN" | "SUPER_ADMIN">;
}) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  const links = role === "SUPER_ADMIN" ? superAdmin : outlet;

  return (
    <AppShell
      header={{ height: 64 }}
      navbar={{
        width: 280,
        breakpoint: "md",
        collapsed: { mobile: !opened },
      }}
      padding="lg"
      styles={{
        main: {
          backgroundColor: "var(--color-background)",
          minHeight: "100vh",
        },
      }}
    >
      <AppShell.Header
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <Group h="100%" px="lg" gap="sm">
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />

          <ThemeIcon size={36} radius="md" variant="light" color="rinseBlue">
            <IconBuildingStore size={20} />
          </ThemeIcon>

          <Box>
            <Text fw={800} size="sm">
              Popo Laundry
            </Text>

            <Text size="xs" c="dimmed">
              Back Office
            </Text>
          </Box>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <ScrollArea h="100%" type="never">
          {links.map((group, index) => (
            <div
              key={group.label}
              style={{
                marginBottom: index === links.length - 1 ? 0 : 20,
              }}
            >
              <Text size="xs" fw={700} c="dimmed" px="sm" mb={6}>
                {group.label}
              </Text>

              {group.items.map(({ label, href }) => {
                const isDashboard = href.endsWith("/dashboard");

                const isActive = isDashboard
                  ? pathname === href
                  : pathname === href || pathname.startsWith(`${href}/`);

                return (
                  <NavLink
                    key={href}
                    component={Link}
                    href={href}
                    label={label}
                    leftSection={menuIcons[label]}
                    active={isActive}
                    variant="light"
                    style={{
                      borderRadius: "var(--mantine-radius-md)",
                    }}
                  />
                );
              })}
            </div>
          ))}
        </ScrollArea>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
