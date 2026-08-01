import {
  Paper,
  Title,
  Text,
  Stack,
  Group,
  Button,
  Box,
  SimpleGrid,
} from "@mantine/core";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/../public/images/request-pickup.png";
import img2 from "@/../public/images/menunggu-cucian.png";
import img3 from "@/../public/images/delivery.png";

const HERO_SLIDES = [
  {
    title: "Cucian Menumpuk? Tinggal jemput, beres",
    description:"Ucapkan selamat tinggal pada pekerjaan mencuci yang melelahkan. Pesan layanan pickup dari smarthphone dan nikmati kemudahan laundry tanpa harus meninggalkan rumah.",
    src: img1,
  },
  {
    title: "Laundry Berjalan, Aktivitas Tetap Lancar",
    description:"Nikmati kemudahan memantau progres laundry tanpa harus menghubungi outlet. Semua update dikirim langsung ke aplikasi Anda. -gambar menunggu cucian.",
    src: img2,
  },
  {
    title: "Laundry Bersih, Diantar Sampai Depan Pintu",
    description:"Nikmati kemudahan layanan antar langsung ke rumah. Pakaian yang telah dicuci, dikeringkan, dan dirapikan akan kami kirim kembali dengan aman, tepat waktu, dan siap digunakan.",
    src: img3,
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[activeSlide];
  return (
    <Paper
      p={40}

      radius="md"
      style={{
        backgroundImage:
          "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" verticalSpacing="lg">
        {/* Kolom gambar */}
        <Box style={{ position: "relative", aspectRatio: "16 / 9" }}>
          <Image
            src={slide.src}
            key={activeSlide}
            alt="ilustrasi"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={activeSlide === 0}
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* Kolom konten */}
        <Stack justify="center" gap="md">
          <Title
            order={1}
            c="var(--color-background-dark)"
            fz={{ base: 28, sm: 40 }}
          >
            {slide.title}
          </Title>
          <Text c="var(--color-background-dark)" opacity={0.85}>
          {slide.description}
        </Text>
          <Group>
            <Button
              component={Link}
              href="/request-pickup"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-text-on-accent)",
              }}
            >
              Request Pickup
            </Button>
            <Button
              component={Link}
              href="/pesanan"
              variant="outline"
            >
              Lacak Pesanan
            </Button>
          </Group>

          {/* Carousel indicator dots */}
          <Group gap={8}>
            {HERO_SLIDES.map((s, i) => (
              <Box
                key={s.title}
                component="button"
                type="button"
                onClick={() => setActiveSlide(i)}
                aria-label={`Slide ${i + 1}`}
                style={{
                  width: i === activeSlide ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  backgroundColor:
                    i === activeSlide
                      ? "var(--color-accent)"
                      : "color-mix(in srgb, var(--color-background) 33%, transparent)",
                  transition: "width 200ms ease",
                }}
              />
            ))}
          </Group>
        </Stack>
      </SimpleGrid>
    </Paper>
  );
}
