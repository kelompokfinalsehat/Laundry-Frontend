import {IconMapPin, IconPackage, IconTruck, IconUser } from "@tabler/icons-react";

export const NAV_LINKS = [
  {
    label: "Profil Saya",
    href: "/profil",
    icon: IconUser,
  },
  {
    label: "Request Pickup",
    href: "/request-pickup",
    icon: IconTruck,
  },
  {
    label: "Pesanan Saya",
    href: "/pesanan",
    icon: IconPackage,
  },
  {
    label: "Alamat",
    href: "/alamat",
    icon: IconMapPin,
  },
] as const;
