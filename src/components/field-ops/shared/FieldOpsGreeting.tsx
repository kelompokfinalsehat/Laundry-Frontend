"use client";

import { useRef } from "react";

import { useCurrentEmploye } from "@/hooks/authEmployee.hooks";

import { Carousel } from "@mantine/carousel";
import { Box, Group, Marquee, Paper, Skeleton, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconBolt, IconClipboardCheck, IconCloudFilled, IconMedal, IconSun } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";

const AUTOPLAY_DELAY_MS = 4000;

const STATIC_GREETINGS = [
  { text: "Semangat bekerja hari ini!", icon: IconBolt },
  { text: "Jangan lupa cek tugasmu ya!", icon: IconClipboardCheck },
  { text: "Kerja bagus, terus pertahankan!", icon: IconMedal },
  { text: "Selamat bertugas hari ini!", icon: IconSun },
];

// Dua baris awan dengan ukuran & opacity berbeda biar ada depth/parallax
const CLOUD_ROW_TOP = [60, 90, 70, 100, 55, 80];
const CLOUD_ROW_BOTTOM = [50, 75, 65, 95, 60];

export function FieldOpsGreeting() {
  const employeeQuery = useCurrentEmploye();

  const autoplay = useRef(
    Autoplay({
      delay: AUTOPLAY_DELAY_MS,
      stopOnMouseEnter: false,
      stopOnInteraction: false,
    }),
  );

  return (
    <Stack>
      {employeeQuery.isPending && <Skeleton height={24} width={150} radius="md" />}

      {employeeQuery.isError && (
        <Text size="sm" c="dimmed">
          Halo, selamat datang!
        </Text>
      )}

      {employeeQuery.data && (
        <Paper
          radius="lg"
          shadow="md"
          pos="relative"
          style={{
            overflow: "hidden",
            background:
              "linear-gradient(135deg, var(--mantine-color-orange-6) 0%, var(--mantine-color-orange-5) 45%, var(--mantine-color-yellow-5) 100%)",
          }}
        >
          {/* Background clouds - baris atas, jalan ke kanan, pelan */}
          <Box pos="absolute" top="-10%" left={0} right={0} style={{ zIndex: 0, pointerEvents: "none" }}>
            <Marquee duration={5000} gap="xl" fadeEdges={false}>
              {CLOUD_ROW_TOP.map((size, index) => (
                <IconCloudFilled key={index} size={size} color="white" style={{ opacity: 0.16 }} />
              ))}
            </Marquee>
          </Box>

          {/* Background clouds - baris bawah, jalan ke kiri, beda kecepatan */}
          <Box pos="absolute" bottom="-8%" left={0} right={0} style={{ zIndex: 0, pointerEvents: "none" }}>
            <Marquee duration={10000} gap="xl" reverse fadeEdges={false}>
              {CLOUD_ROW_BOTTOM.map((size, index) => (
                <IconCloudFilled key={index} size={size} color="white" style={{ opacity: 0.12 }} />
              ))}
            </Marquee>
          </Box>

          {/* Main content, di atas awan */}
          <Stack gap="xs" p={15} pos="relative" style={{ zIndex: 1 }}>
            <Text fw={600} fz="xl" c="white">
              Halo, {employeeQuery.data.name}!
            </Text>

            <Carousel
              withControls={false}
              withKeyboardEvents={false}
              color="white"
              plugins={[autoplay.current]}
              emblaOptions={{
                loop: true,
                watchDrag: false,
              }}
            >
              {STATIC_GREETINGS.map(({ text, icon: Icon }) => (
                <Carousel.Slide key={text}>
                  <Group gap="sm" wrap="nowrap">
                    <ThemeIcon size={36} radius="xl" variant="white" c="orange.6">
                      <Icon size={20} stroke={2} />
                    </ThemeIcon>
                    <Text fw={600} size="md" c="white">
                      {text}
                    </Text>
                  </Group>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Stack>
        </Paper>
      )}
    </Stack>
  );
}
