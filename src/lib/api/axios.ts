import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export class ApiError extends Error {
  code: string;
  fields?: Record<string, string>;

  constructor(code: string, message: string, fields?: Record<string, string>) {
    super(message);

    this.name = "ApiError";
    this.code = code;
    this.fields = fields;
  }
}

type ErrorEnvelope = {
  success: false;
  error: {
    code: string;
    message: string;
    fields?: Record<string, string>;
  };
};

type RetryableRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

let refreshPromise: Promise<void> | null = null;

const NO_REFRESH_ENDPOINTS = [
  "/auth/login",
  "/auth/register",
  "/auth/verify-email",
  "/auth/resend-verification",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/auth/login/google",
  "/auth/refresh",
];

function shouldSkipRefresh(url?: string): boolean {
  if (!url) return false;

  return NO_REFRESH_ENDPOINTS.some((endpoint) => url.includes(endpoint));
}

export async function refreshAccessToken(): Promise<void> {
  if (refreshPromise) {
    return refreshPromise;
  }

  refreshPromise = axios
    .post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
      {},
      {
        withCredentials: true,
      },
    )
    .then(() => {})
    .finally(() => {
      refreshPromise = null;
    });

  return refreshPromise;
}

api.interceptors.response.use(
  (response) => response,

  async (error: AxiosError<ErrorEnvelope>) => {
    const originalRequest = error.config as RetryableRequestConfig | undefined;
    const status = error.response?.status;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    if (shouldSkipRefresh(originalRequest.url)) {
      const payload = error.response?.data?.error;
      return Promise.reject(
        new ApiError(
          payload?.code ?? "UNKNOWN_ERROR",
          payload?.message ?? "Terjadi kesalahan. Silakan coba lagi.",
          payload?.fields,
        ),
      );
    }

    const code = error.response?.data?.error?.code;

    // HANYA coba refresh untuk token yang benar-benar EXPIRED
    // (pernah login, tokennya basi). Kalau ACCESS_TOKEN_REQUIRED
    // (belum pernah login sama sekali / tidak ada cookie), refresh
    // dijamin gagal karena refreshToken juga tidak ada — percuma dicoba.
    if (code === "ACCESS_TOKEN_EXPIRED" && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await refreshAccessToken();
        return api(originalRequest);
      } catch (refreshError) {
        console.error("❌ Refresh gagal:", refreshError);

        // Hindari infinite reload: cuma redirect kalau BELUM di /login,
        // dan pakai client-side navigation, bukan full reload.
        if (
          typeof window !== "undefined" &&
          !window.location.pathname.startsWith("/login")
        ) {
          window.location.href = "/login";
        }

        return Promise.reject(refreshError);
      }
    }

    const payload = error.response?.data?.error;
    return Promise.reject(
      new ApiError(
        payload?.code ?? "UNKNOWN_ERROR",
        payload?.message ?? "Terjadi kesalahan. Silakan coba lagi.",
        payload?.fields,
      ),
    );
  },
);
