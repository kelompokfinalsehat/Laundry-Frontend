import { ApiError } from "@/lib/api/axios";

export function getCreateOrderErrorMessage(error: unknown) {
  if (!(error instanceof ApiError)) {
    return null;
  }

  switch (error.code) {
    case "OUTLET_OUT_OF_RANGE":
      return "Alamat ini berada di luar jangkauan 10 km dari outlet manapun.";

    case "NO_ACTIVE_OUTLET":
      return "Tidak ada outlet aktif yang bisa melayani saat ini.";

    case "PRICING_NOT_AVAILABLE":
      return "Layanan sedang tidak tersedia. Coba lagi nanti.";

    case "OUTSIDE_OPERATIONAL_HOURS":
      return "Request pickup hanya bisa dibuat pada jam operasional.";

    default:
      return error.message;
  }
}