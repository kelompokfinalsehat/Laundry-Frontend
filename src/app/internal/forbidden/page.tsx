"use client";

import { Stack, Title, Text, Button, Center } from "@mantine/core";
import Link from "next/link";
import forbidden from "@/../public/images/forbidden.png";
import Image from "next/image";

export default function ForbiddenPage() {
  return (
    <Center mih="100vh" px="md">
      <Stack align="center" gap="md" maw={420} ta="center">
        <Image
          alt="ilustrasi"
          src={forbidden}
          sizes="(max-width: 768px) 60vw, 300px"
          style={{
            width: "100%",
            maxWidth: 280,
            height: "auto",
          }}
        />

        <Title order={2} style={{ color: "var(--color-text-primary)" }}>
          Akses Ditolak
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          Kamu tidak memiliki izin untuk mengakses halaman ini. Role atau
          cakupan outlet akunmu tidak sesuai dengan halaman yang dituju.
        </Text>

        <Button
          component={Link}
          href="/"
          mt="sm"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Kembali ke Beranda
        </Button>
      </Stack>
    </Center>
  );
}