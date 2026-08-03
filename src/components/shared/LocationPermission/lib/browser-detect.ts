
export type BrowserName = "chrome" | "firefox" | "safari" | "edge" | "other";

export function detectBrowser(): BrowserName {
  if (typeof navigator === "undefined") return "other";

  const ua = navigator.userAgent;

  // urutan pengecekan penting: Edge & Chrome sama-sama punya "Chrome" di UA
  if (/Edg\//.test(ua)) return "edge";
  if (/Chrome\//.test(ua) && !/Edg\//.test(ua)) return "chrome";
  if (/Firefox\//.test(ua)) return "firefox";
  if (/Safari\//.test(ua) && !/Chrome\//.test(ua)) return "safari";

  return "other";
}

const INSTRUCTIONS: Record<BrowserName, string> = {
  chrome:
    'Klik ikon gembok di sebelah kiri address bar, lalu ubah izin Lokasi jadi "Izinkan".',
  edge:
    'Klik ikon gembok di sebelah kiri address bar, lalu ubah izin Lokasi jadi "Izinkan".',
  firefox:
    'Klik ikon gembok di sebelah kiri address bar, lalu hapus blokir izin Lokasi.',
  safari:
    "Buka menu Safari → Settings for This Website (atau Preferences → Websites → Location), lalu ubah izin jadi Allow.",
  other:
    'Buka pengaturan situs di browser Anda, cari izin "Lokasi", lalu ubah jadi diizinkan.',
};

export function getLocationPermissionInstruction(): string {
  return INSTRUCTIONS[detectBrowser()];
}