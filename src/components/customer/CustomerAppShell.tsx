"use client";
import { AppShell, Burger, Group, NavLink, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
const links = [
  ["Beranda", "/beranda"],
  ["Request Pickup", "/request-pickup"],
  ["Pesanan", "/pesanan"],
  ["Alamat", "/alamat"],
  ["Profil", "/profil"],
];
export function CustomerAppShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 240, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text fw={800}>Popo Laundry</Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {links.map(([l, h]) => (
          <NavLink key={h} component={Link} href={h} label={l} />
        ))}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
