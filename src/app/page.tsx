'use client';

import { useState } from 'react';
import { Baloo_2, Plus_Jakarta_Sans } from 'next/font/google';
import { Container, Group, Button, Badge, Text, Title, SimpleGrid } from '@mantine/core';
import styles from './page.module.css';

const display = Baloo_2({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-display' });
const body = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });

const steps = [
  {
    n: '1',
    title: 'Jadwalkan Jemput',
    desc: 'Pilih waktu jemput lewat app, kurir kami datang langsung ke rumahmu.',
  },
  {
    n: '2',
    title: 'Kami Cuci & Setrika',
    desc: 'Cucian dipilah per warna, dicuci deterjen premium, disetrika rapi.',
  },
  {
    n: '3',
    title: 'Antar ke Rumah',
    desc: 'Bersih, wangi, terlipat rapi, sampai balik ke depan pintu.',
  },
];

const services = [
  { name: 'Cuci Kiloan Reguler', price: 'Rp 7.000', unit: '/kg', note: 'Selesai 2 hari' },
  { name: 'Cuci Kiloan Express', price: 'Rp 12.000', unit: '/kg', note: 'Selesai 6 jam' },
  { name: 'Setrika Saja', price: 'Rp 5.000', unit: '/kg', note: 'Selesai 1 hari' },
  { name: 'Dry Clean Satuan', price: 'Rp 25.000', unit: '/item', note: 'Jas, gaun, jaket' },
];

const testimonials = [
  { name: 'Rani', role: 'Karyawan Kantoran', quote: 'Gak pernah kepikiran laundry bisa semudah ini. Tinggal buka app, beres.' },
  { name: 'Dimas', role: 'Mahasiswa', quote: 'Express 6 jam beneran nolong pas lagi mager total tapi baju abis.' },
  { name: 'Bu Sari', role: 'Ibu Rumah Tangga', quote: 'Wanginya awet, lipatannya rapi kayak dikerjain sendiri.' },
];

export default function LandingPage() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={`${styles.page} ${display.variable} ${body.variable}`}>
      {/* NAV */}
      <header className={styles.nav}>
        <Container size="lg" className={styles.navInner}>
          <div className={styles.logo}>
            <span className={styles.logoDot} />
            Wangi
          </div>

          <Group gap={32} visibleFrom="sm">
            <a href="#cara-kerja" className={styles.navLink}>Cara Kerja</a>
            <a href="#harga" className={styles.navLink}>Harga</a>
            <a href="#testimoni" className={styles.navLink}>Testimoni</a>
          </Group>

          <Button
            radius="xl"
            size="sm"
            visibleFrom="sm"
            className={styles.ctaButton}
          >
            Pesan Sekarang
          </Button>

          <button
            className={styles.burger}
            onClick={() => setNavOpen((o) => !o)}
            aria-label="Buka menu"
          >
            <span />
            <span />
            <span />
          </button>
        </Container>

        {navOpen && (
          <div className={styles.mobileMenu}>
            <a href="#cara-kerja" onClick={() => setNavOpen(false)}>Cara Kerja</a>
            <a href="#harga" onClick={() => setNavOpen(false)}>Harga</a>
            <a href="#testimoni" onClick={() => setNavOpen(false)}>Testimoni</a>
            <Button radius="xl" className={styles.ctaButton} fullWidth mt="sm">
              Pesan Sekarang
            </Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <Container size="lg" className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <Badge className={styles.eyebrow} radius="sm" variant="light">
              Laundry on-demand buat kamu yang sibuk
            </Badge>

            <Title className={styles.heroTitle}>
              Cucian numpuk?
              <br />
              Tinggal jemput, <span className={styles.underline}>beres.</span>
            </Title>

            <Text className={styles.heroSubtitle}>
              Jadwalkan penjemputan laundry dari HP. Kami cuci, setrika, lipat
              rapi, lalu antar balik ke rumahmu. Gak perlu keluar rumah sama
              sekali.
            </Text>

            <Group gap={16} mt={32}>
              <Button size="lg" radius="xl" className={styles.ctaButton}>
                Jadwalkan Jemput
              </Button>
              <Button size="lg" radius="xl" variant="subtle" className={styles.ghostButton}>
                Lihat cara kerja ↓
              </Button>
            </Group>

            <Group gap={28} mt={40} className={styles.statRow}>
              <div>
                <div className={styles.statNum}>4.9/5</div>
                <div className={styles.statLabel}>rating pengguna</div>
              </div>
              <div className={styles.statDivider} />
              <div>
                <div className={styles.statNum}>12rb+</div>
                <div className={styles.statLabel}>cucian selesai</div>
              </div>
              <div className={styles.statDivider} />
              <div>
                <div className={styles.statNum}>Jabodetabek</div>
                <div className={styles.statLabel}>area jemput</div>
              </div>
            </Group>
          </div>

          {/* Clothesline signature illustration */}
          <div className={styles.clotheslineWrap} aria-hidden="true">
            <svg viewBox="0 0 420 320" className={styles.clotheslineSvg}>
              <line x1="10" y1="40" x2="410" y2="40" stroke="var(--ink)" strokeWidth="3" strokeDasharray="1 10" strokeLinecap="round" />
              <line x1="20" y1="10" x2="20" y2="40" stroke="var(--ink)" strokeWidth="3" />
              <line x1="400" y1="10" x2="400" y2="40" stroke="var(--ink)" strokeWidth="3" />

              <g className={styles.swayA}>
                <rect x="60" y="42" width="70" height="86" rx="14" fill="var(--accent)" />
                <rect x="72" y="42" width="46" height="14" rx="6" fill="var(--accent)" />
                <circle x="95" cx="95" cy="40" r="5" fill="var(--ink)" />
              </g>

              <g className={styles.swayB}>
                <path d="M215 42 L275 42 L275 60 L262 60 L262 150 L228 150 L228 60 L215 60 Z" fill="var(--primary)" />
                <circle cx="245" cy="40" r="5" fill="var(--ink)" />
              </g>

              <g className={styles.swayC}>
                <ellipse cx="345" cy="90" rx="34" ry="48" fill="var(--teal)" />
                <circle cx="345" cy="40" r="5" fill="var(--ink)" />
              </g>
            </svg>
          </div>
        </Container>
      </section>

      {/* CARA KERJA */}
      <section id="cara-kerja" className={styles.steps}>
        <Container size="lg">
          <Text className={styles.sectionEyebrow}>Tiga langkah</Text>
          <Title className={styles.sectionTitle}>Semudah menjemur baju</Title>

          <div className={styles.stepsRow}>
            <div className={styles.stepsLine} />
            {steps.map((s) => (
              <div key={s.n} className={styles.stepCard}>
                <div className={styles.stepClip}>{s.n}</div>
                <Title order={3} className={styles.stepTitle}>{s.title}</Title>
                <Text className={styles.stepDesc}>{s.desc}</Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* HARGA */}
      <section id="harga" className={styles.pricing}>
        <Container size="lg">
          <Text className={styles.sectionEyebrow}>Transparan, gak ada biaya siluman</Text>
          <Title className={styles.sectionTitle}>Pilih layanan sesuai kebutuhan</Title>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={20} mt={40}>
            {services.map((s) => (
              <div key={s.name} className={styles.priceCard}>
                <Text className={styles.priceName}>{s.name}</Text>
                <div className={styles.priceValue}>
                  {s.price}<span>{s.unit}</span>
                </div>
                <Text className={styles.priceNote}>{s.note}</Text>
              </div>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      {/* TESTIMONI */}
      <section id="testimoni" className={styles.testimonials}>
        <Container size="lg">
          <Text className={styles.sectionEyebrow}>Kata mereka</Text>
          <Title className={styles.sectionTitle}>Dipercaya tetangga sekitarmu</Title>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={24} mt={40}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testiCard}>
                <Text className={styles.testiQuote}>&ldquo;{t.quote}&rdquo;</Text>
                <div className={styles.testiFooter}>
                  <div className={styles.testiAvatar}>{t.name[0]}</div>
                  <div>
                    <div className={styles.testiName}>{t.name}</div>
                    <div className={styles.testiRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      {/* CTA FOOTER */}
      <section className={styles.finalCta}>
        <Container size="lg" className={styles.finalCtaInner}>
          <Title className={styles.finalCtaTitle}>
            Cucian pertama, diskon 20%
          </Title>
          <Text className={styles.finalCtaSubtitle}>
            Coba sekarang, jadwalkan jemputan pertamamu dalam 2 menit.
          </Text>
          <Button size="lg" radius="xl" className={styles.ctaButtonLight}>
            Jadwalkan Jemput Sekarang
          </Button>
        </Container>
      </section>

      <footer className={styles.footer}>
        <Container size="lg" className={styles.footerInner}>
          <div className={styles.logo}>
            <span className={styles.logoDot} />
            Wangi
          </div>
          <Text className={styles.footerNote}>© 2026 Wangi Laundry — laman dummy untuk keperluan development.</Text>
        </Container>
      </footer>
    </div>
  );
}
