import { Box, Button, Container, Group, Title } from "@mantine/core";
import Link from "next/link";

export default function HeaderNav() {
  return (
    <Box
      component="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "var(--color-background)",
        borderBottom:
          "3px solid color-mix(in srgb, var(--color-primary) 13%, transparent)",
      }}
    >
      <Container size="xl" py="sm">
        <Group justify="space-between">
          <Title
            order={3}
            style={{ color: "var(--color-primary)", letterSpacing: -0.5 }}
          >
            Popo Laundry
          </Title>

          <Group gap="xs">
            <Button
              component={Link}
              href="/login"
              variant="outline"
              style={{
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
              }}
            >
              Masuk
            </Button>
            <Button
              component={Link}
              href="/register"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-text-on-accent)",
              }}
            >
              Daftar
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
