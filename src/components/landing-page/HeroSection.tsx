"use client";

import { Button, Group, Text, Title } from "@mantine/core";
import Image from "next/image";
import heroImage from "@/../public/images/popomaskot.png";
import Link from "next/link";

const STATS = [
  { num: "4.9/5", label: "rating pengguna" },
  { num: "12rb+", label: "cucian selesai" },
];

export default function HeroSection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 40,
        flexWrap: "wrap",
      }}
    >
      {/* Kolom kiri — konten teks */}
      <div
        style={{
          flex: "1 1 480px",
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <Title
          style={{
            fontSize: "clamp(36px, 5vw, 52px)",
            lineHeight: 1.08,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            color: "var(--color-text-primary)",
          }}
        >
          Cucian numpuk?
          <br />
          Tinggal jemput,{" "}
          <span
            style={{
              position: "relative",
              color: "var(--color-primary)",
              backgroundImage:
                "linear-gradient(var(--color-accent), var(--color-accent))",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 10px",
              backgroundPosition: "0 88%",
              opacity: 1,
            }}
          >
            beres.
          </span>
        </Title>

        <Text
          style={{
            fontSize: 18,
            color: "var(--color-text-secondary)",
            maxWidth: 460,
            lineHeight: 1.6,
          }}
        >
          Jadwalkan penjemputan laundry dari HP. Kami cuci, setrika, lipat rapi,
          lalu antar balik ke rumahmu. Gak perlu keluar rumah sama sekali.
        </Text>

        <Button
          radius="md"
          size="md"
          visibleFrom="sm"
          component={Link}
          href="/request-pickup"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-text-on-primary)",
            alignSelf: "flex-start",
          }}
        >
          Pesan Sekarang
        </Button>

        <Group
          gap={28}
          style={{
            paddingTop: 30,
            marginBottom: 40,
            maxWidth: "100%",
            borderTop: "2px solid rgba(16, 48, 79, 0.1)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{ display: "flex", alignItems: "center", gap: 28 }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 22,
                    color: "var(--color-text-primary)",
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {stat.label}
                </div>
              </div>

              {i < STATS.length - 1 && (
                <div
                  style={{
                    width: 2,
                    height: 32,
                    background: "rgba(16, 48, 79, 0.15)",
                  }}
                />
              )}
            </div>
          ))}
        </Group>
      </div>

      {/* Kolom kanan — gambar */}
      <div
        style={{
          flex: "1 1 400px",
          position: "relative",
          aspectRatio: "1 / 1",
          minWidth: 300,
        }}
      >
        <Image
          src={heroImage}
          alt="Ilustrasi layanan laundry"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
