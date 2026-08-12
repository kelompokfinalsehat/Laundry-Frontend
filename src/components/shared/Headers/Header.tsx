import { Box, Burger, Container, Drawer, Flex, Stack, Title, Anchor } from "@mantine/core";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { HeaderProfile } from "./HeaderProfile";
import HeaderNav from "./HeaderNavlink";
import { NAV_LINKS } from "./nav-links";


export default function Header() {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <Box
      component="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "var(--color-background)",
        borderBottom:
          "3px solid color-mix(in srgb, var(--color-primary-dark) 13%, transparent)",
      }}
    >
      <Container size="xl" py="sm">
        <Flex align="center" justify="space-between" gap="md">
          <Flex align="center" gap="xs" style={{ flexShrink: 0 }}>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Title
              order={3}
              style={{ color: "var(--color-primary-dark)", letterSpacing: -0.5 }}
            >
              Popo Laundry
            </Title>
          </Flex>

          <HeaderNav />

          <Box style={{ flexShrink: 0 }}>
            <HeaderProfile />
          </Box>
        </Flex>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        hiddenFrom="sm"
        padding="md"
        size="50%"
        zIndex={20}
      >
        <Stack gap="xs">
          {NAV_LINKS.map(({ label, href }) => (
            <Anchor
              key={href}
              component={Link}
              href={href}
              onClick={close}
              fw={500}
              size="md"
              style={{ color: "var(--color-text-primary)" }}
            >
              {label}
            </Anchor>
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
}