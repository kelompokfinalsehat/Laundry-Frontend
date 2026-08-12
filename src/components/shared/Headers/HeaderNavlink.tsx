import { Anchor, Flex } from "@mantine/core";
import Link from "next/link";
import { NAV_LINKS } from "./nav-links";

export default function HeaderNav() {
  return (
    <Flex
      visibleFrom="sm"
      align="center"
      justify="center"
      gap="lg"
      style={{ flex: 1 }}
    >
      {NAV_LINKS.map(({ label, href }) => (
        <Anchor
          key={href}
          component={Link}
          href={href}
          fw={500}
          size="md"
          style={{
            color: "var(--color-text-primary)",
            transition: "color 150ms ease",
          }}
        >
          {label}
        </Anchor>
      ))}
    </Flex>
  );
}
