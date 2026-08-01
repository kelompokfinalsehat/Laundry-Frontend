"use client";

import {
  Container,
  Group,
  Button,
  Badge,
  Text,
  Title,
  SimpleGrid,
  Box,
  Paper,
} from "@mantine/core";

const STEPS: {
  n: number;
  title: string;
  desc: string;
}[] = [
  {
    n: 1,
    title: "Request Pickup",
    desc: "Ajukan penjemputan lewat aplikasi, kurir kami datang ke lokasimu.",
  },
  {
    n: 2,
    title: "Dicuci & Dirapikan",
    desc: "Pakaian dicuci, dikeringkan, dan dilipat dengan rapi.",
  },
  {
    n: 3,
    title: "Diantar Kembali",
    desc: "Laundry bersih diantar langsung sampai depan pintu.",
  },
];

export default function CaraKerja() {
  return (
   <Box component="section" id="cara-kerja" py={20}>
      <Container size="xl">
        <Text
          tt="uppercase"
          fw={700}
          fz={13}
          c="orange.6"
          style={{ letterSpacing: 1.2 }}
        >
          Tiga langkah
        </Text>

        <Title order={2} mt={8} fz={{ base: 28, sm: 34 }}>
          Semudah menjemur baju
        </Title>

        <Box pos="relative" mt={56}>
          {/* garis putus-putus penghubung, hanya tampil di desktop */}
          <Box
            visibleFrom="md"
            pos="absolute"
            top={22}
            left="8%"
            right="8%"
            h={0}
            style={{ borderTop: "2px dashed var(--mantine-color-gray-4)" }}
          />

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={32}>
            {STEPS.map((s) => (
              <Paper
                key={s.n}
                pos="relative"
                radius="lg"
                shadow="sm"
                pt={40}
                pb={28}
                px={24}
                ta="center"
                style={{
                  boxShadow: "0 12px 30px rgba(16, 48, 79, 0.06)",
                }}
              >
                {/* nomor bulat */}
                <Box
                  pos="absolute"
                  top={-22}
                  left="50%"
                  w={44}
                  h={44}
                  style={{
                    transform: "translateX(-50%)",
                    borderRadius: "50%",
                    background: "var(--mantine-color-orange-4)",
                    boxShadow: "0 6px 16px rgba(245, 185, 66, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "var(--mantine-color-dark-7)",
                  }}
                >
                  {s.n}
                </Box>

                <Title order={3} mt={20} fz={19}>
                  {s.title}
                </Title>

                <Text mt={10} fz={15} lh={1.6} c="dimmed">
                  {s.desc}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
