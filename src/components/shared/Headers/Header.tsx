import {
  Box,
  Burger,
  Container,
  Drawer,
  Flex,
  Stack,
  Title,
  Anchor,
} from "@mantine/core";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { HeaderProfile } from "./HeaderProfile";
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
      <Container size="lg" py="sm">
        <Flex align="center" justify="space-between" gap="md" mih={48}>
          <Flex align="center" gap="xs" style={{ flexShrink: 0 }}>
            <Anchor
              component={Link}
              href="/"
              underline="never"
              style={{ textDecoration: "none" }}
            >
              <Title
                order={3}
                style={{
                  color: "var(--color-primary-dark)",
                  letterSpacing: -0.5,
                }}
              >
                Popo Laundry
              </Title>
            </Anchor>
          </Flex>

          <Box style={{ flexShrink: 0 }}>
            <HeaderProfile />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
