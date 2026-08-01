"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Anchor,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { LocationPermissionGate } from "@/components/shared/LocationPermissionGate";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/landing-page/HeroSection";

const FEATURES = [
  {
    title: "Request pickup",
    description:
      "Jadwalkan penjemputan cucian dari alamat tersimpan, kapan saja kamu mau.",
  },
  {
    title: "Tracking proses",
    description:
      "Ikuti tiap tahap: pickup, cuci-setrika-packing, sampai diantar kembali.",
  },
  {
    title: "Pembayaran Midtrans",
    description:
      "Transaksi aman dan tercatat otomatis, sesuai Final Business Rules v1.4.",
  },
];

export default function Page() {
  return (
   <Box style={{ backgroundColor: "var(--color-background)", minHeight: "100vh" }}>

  <Box
    component="header"
    style={{
      position: "sticky",
      top: 0,
      zIndex: 10,
      backgroundColor: "var(--color-background)",
      borderBottom: "1px solid color-mix(in srgb, var(--color-primary) 13%, transparent)",
    }}
  >
    <Container size="lg" py="sm">
      <Group justify="space-between">
        <Title order={3} style={{ color: "var(--color-primary)", letterSpacing: -0.5 }}>
          Popo Laundry
        </Title>

        <Group gap="xs">
          <Button
            component={Link}
            href="/login"
            variant="outline"
            style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
          >
            Masuk
          </Button>
          <Button
            component={Link}
            href="/register"
            style={{ backgroundColor: "var(--color-accent)", color: "var(--color-text-on-accent)" }}
          >
            Daftar
          </Button>
        </Group>
      </Group>
    </Container>
  </Box>

  <Container size="lg" py="xl">
    <Stack gap="xl">
      {/* Hero section — carousel */}
      
      <HeroSection/>

      <LocationPermissionGate />

      {/* Layanan / features */}
      <Stack gap="md" id="layanan">
        <Title order={3} style={{ color: "var(--color-text-primary)" }}>
          Layanan kami
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 3 }}>
          {FEATURES.map((f) => (
            <Paper
              key={f.title}
              withBorder
              p="lg"
              radius="md"
              style={{
                borderColor: "color-mix(in srgb, var(--color-primary) 20%, transparent)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <Title order={4} style={{ color: "var(--color-primary)" }}>
                {f.title}
              </Title>
              <Text c="dimmed" mt={4}>
                {f.description}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  </Container>

  {/* Footer */}
  <Footer/>

</Box>
  );
}
