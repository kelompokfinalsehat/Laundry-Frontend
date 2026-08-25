"use client";

import { Box, Container, SimpleGrid, Stack, Title } from "@mantine/core";
import Footer from "@/components/shared/Footer";
import FeatureCard, {
  FEATURES,
} from "@/components/landing-page/FeatureSection";
import Header from "@/components/shared/Headers/Header";
import CaraKerja from "@/components/landing-page/CaraKerjaSection";
import CarouselSection from "@/components/landing-page/CarouselSection";
import HeroSection from "@/components/landing-page/HeroSection";
import { LocationPermissionGate } from "@/components/shared/LocationPermission/LocationPermissionGate";

export default function Page() {
  return (
    <Box
      style={{ backgroundColor: "var(--color-background)", minHeight: "100vh" }}
    >
      {/* Header */}
      
      <Header />

      <Container size="lg" pt={40}>
        <Stack gap="xl">
          {/* Hero section — carousel */}
          <HeroSection />

          <CarouselSection />

          {/* Cara Kerja - section */}
          <CaraKerja />

          <LocationPermissionGate />

          {/* Layanan / features */}
          <Box component="section" py={20}>
            <Stack gap="md">
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
