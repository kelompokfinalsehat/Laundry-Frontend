"use client";

import Link from "next/link";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Title,
} from "@mantine/core";
import { LocationPermissionGate } from "@/components/shared/LocationPermissionGate";
import Footer from "@/components/landing-page/Footer";
import HeroSection from "@/components/landing-page/HeroSection";
import FeatureCard, {
  FEATURES,
} from "@/components/landing-page/FeatureSection";
import HeaderNav from "@/components/landing-page/Header";
import CaraKerja from "@/components/landing-page/CaraKerjaSection";

export default function Page() {
  return (
    <Box
      style={{ backgroundColor: "var(--color-background)", minHeight: "100vh" }}
    >
      {/* Header */}
      <HeaderNav />

      <Container size="xl" py="xl">
        <Stack gap="xl">
          {/* Cara Kerja - section */}
          <CaraKerja/>

          {/* Hero section — carousel */}
          <HeroSection />

          {/* <LocationPermissionGate /> */}

          {/* Layanan / features */}
          <Box
            component="section" py={20}
          >
            <Stack gap="md" >
              <Title
                id="layanan-heading"
                order={2}
                py={20}
                style={{ color: "var(--color-text-primary)" }}
              >
                Layanan kami
              </Title>
              <SimpleGrid cols={{ base: 1, sm: 3 }}>
                {FEATURES.map((f) => (
                  <FeatureCard key={f.title} {...f} />
                ))}
              </SimpleGrid>
            </Stack>
          </Box>
        </Stack>
      </Container>
      {/* Footer */}
      <Footer />
    </Box>
  );
}
