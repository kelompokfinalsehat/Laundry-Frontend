"use client";

import { useMemo } from "react";

import { useCurrentEmploye } from "@/hooks/authEmployee.hooks";

import { Carousel } from "@mantine/carousel";
import { Group, Paper, Skeleton, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconBolt, IconClipboardCheck, IconMedal, IconSun } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";

const AUTOPLAY_DELAY_MS = 4000;

const STATIC_GREETINGS = [
  {
    text: "Semangat bekerja hari ini!",
    icon: IconBolt,
  },
  {
    text: "Jangan lupa cek tugasmu ya!",
    icon: IconClipboardCheck,
  },
  {
    text: "Kerja bagus, terus pertahankan!",
    icon: IconMedal,
  },
  {
    text: "Selamat bertugas hari ini!",
    icon: IconSun,
  },
];

export function FieldOpsGreeting() {
  const employeeQuery = useCurrentEmploye();

  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: AUTOPLAY_DELAY_MS,
        stopOnMouseEnter: false,
        stopOnInteraction: false,
      }),
    [],
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
          <Stack gap="lg" p={15} pos="relative" style={{ zIndex: 1 }}>
            <Text fw={600} fz="xl" c="white">
              Halo, {employeeQuery.data.name}!
            </Text>

            <Carousel
              withControls={false}
              withKeyboardEvents={false}
              color="white"
              plugins={[autoplay]}
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
