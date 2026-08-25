import { Box, Container, Flex, Stack, Text, Title } from "@mantine/core";

export default function Footer() {
  return (
    <Box
      component="footer"
      style={{
        backgroundColor: "var(--color-text-primary)",
        color: "var(--color-background)",
      }}
    >
      <Container size="lg" py={40} px={{ base: 20}}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          gap={{ base: 32, sm: 0 }}
        >
          <Stack gap={6}>
            <Title order={4} c="var(--color-background)">
              Popo Laundry
            </Title>
            <Text size="sm" opacity={0.75}>
              Laundry dijemput, diproses, dan diantar kembali bersih, rapi,
              tepat waktu.
            </Text>
          </Stack>

          <Stack gap={6} ta={{ base: "left", sm: "right" }}>
            <Text fw={600} size="md">
              Kontak
            </Text>
            <Text size="sm" opacity={0.75}>
              halo@popolaundry.id
            </Text>
            <Text size="sm" opacity={0.75}>
              +62 812-0000-0000
            </Text>
          </Stack>
        </Flex>

        <Text size="xs" opacity={0.5} mt={40}>
          © {new Date().getFullYear()} Popo Laundry. Seluruh hak cipta
          dilindungi.
        </Text>
      </Container>
    </Box>
  );
}
