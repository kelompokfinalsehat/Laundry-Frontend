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
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/../public/images/request-pickup.png";
import img2 from "@/../public/images/menunggu-cucian.png";
import img3 from "@/../public/images/delivery.png";
import classes from "./css/CarouselSection.module.css";
import { useLocationPermission } from "../shared/LocationPermission/hooks/useLocationPermission";

const HERO_SLIDES = [
  {
    title: "Cucian Menumpuk? Kami Jemput.",
    description:
      "Ucapkan selamat tinggal pada pekerjaan mencuci yang melelahkan. Pesan layanan pickup dari smarthphone dan nikmati kemudahan laundry tanpa harus meninggalkan rumah.",
    src: img1,
  },
  {
    title: "Laundry Berjalan, Aktivitas Tetap Lancar",
    description:
      "Nikmati kemudahan memantau progres laundry tanpa harus menghubungi outlet. Semua update dikirim langsung ke aplikasi Anda.",
    src: img2,
  },
  {
    title: "Laundry Bersih, Diantar Sampai Depan Pintu",
    description:
      "Nikmati kemudahan layanan antar langsung ke rumah. Pakaian yang telah dicuci, dikeringkan, dan dirapikan akan kami kirim kembali dengan aman, tepat waktu, dan siap digunakan.",
    src: img3,
  },
];

export default function CarouselSection() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const { requestPermission } = useLocationPermission();
  return (
    <Carousel
      withIndicators
      emblaOptions={{ loop: true }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      classNames={{ indicator: classes.indicator }}
    >
      {HERO_SLIDES.map((slide, i) => (
        <Carousel.Slide key={slide.title}>
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
            <SimpleGrid
              cols={{ base: 1, md: 2 }}
              spacing="xl"
              verticalSpacing="lg"
            >
              {/* Kolom gambar */}
              <Box style={{ position: "relative", aspectRatio: "16 / 9" }}>
                <Image
                  src={slide.src}
                  alt="ilustrasi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
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
                    onClick={() => requestPermission()} 
                    style={{
                      backgroundColor: "var(--color-accent)",
                      color: "var(--color-text-on-accent)",
                    }}
                  >
                    Request Pickup
                  </Button>
                  <Button component={Link} href="/pesanan" variant="outline">
                    Lacak Pesanan
                  </Button>
                </Group>
              </Stack>
            </SimpleGrid>
          </Paper>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
