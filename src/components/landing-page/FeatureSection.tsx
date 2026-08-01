import { Box, Title, Text, Paper, } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import {
  IconTruck,
  IconActivity,
  IconMapPin,
  Icon,
} from "@tabler/icons-react";
import Link from "next/link";

export const FEATURES: {
  icon: Icon;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: IconTruck,
    title: "Request pickup",
    description:
      "Jadwalkan penjemputan cucian dari alamat tersimpan, kapan saja kamu mau.",
    href: "/alamat",
  },
  {
    icon: IconActivity,
    title: "Tracking proses",
    description:
      "Ikuti tiap tahap: pickup, cuci-setrika-packing, sampai diantar kembali.",
    href: "/",
  },
  {
    icon: IconMapPin,
    title: "Outlet Terdekat",
    description:
      "Temukan outlet Popo Laundry terdekat dan nikmati layanan laundry yang cepat, mudah, dan nyaman.",
    href: "/",
  },
];

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
}: (typeof FEATURES)[number]) {
  const { hovered, ref } = useHover();

  return (
    <Paper
      ref={ref}
      component={Link} 
      href={href}
      withBorder
      p="lg"
      radius="md"
      style={{
        borderColor:
          "color-mix(in srgb, var(--color-primary) 20%, transparent)",
        backgroundColor: "var(--color-surface)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "var(--shadow-md)" : "none",
        transition: "transform 160ms ease, box-shadow 160ms ease",
      }}
    >
      <Box
        style={{
          width: 44,
          height: 44,
          borderRadius: "var(--radius-sm)",
          backgroundColor: "var(--color-primary-light)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 12,
        }}
      >
        <Icon size={22} color="var(--color-primary)" />
      </Box>
      <Title order={3} style={{ color: "var(--color-primary)" }}>
        {title}
      </Title>
      <Text c="dimmed" mt={4}>
        {description}
      </Text>
    </Paper>
  );
}
