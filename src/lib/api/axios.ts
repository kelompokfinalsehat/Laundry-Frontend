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
    .then(() => {
      // Backend mengirim:
      // Set-Cookie: accessToken=...
      // Set-Cookie: refreshToken=...
    })
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

    // Tidak ada request config
    if (!originalRequest) {
      return Promise.reject(error);
    }

    /*
     * Endpoint authentication/public tidak boleh
     * memicu refresh access token.
     *
     * Contoh:
     * /auth/verify-email
     * /auth/forgot-password
     * /auth/reset-password
     */
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

    /*
     * Request selain endpoint public:
     * kalau access token expired, coba refresh.
     * Cek code spesifik (bukan cuma status 401) supaya
     * SESSION_REQUIRED / TOKEN_INVALID tidak ikut memicu
     * refresh yang percuma — dua kasus itu jelas tidak akan
     * tertolong oleh refresh.
     */
    const code = error.response?.data?.error?.code;

    if (status === 401 && code === "ACCESS_TOKEN_EXPIRED" && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await refreshAccessToken();

        // Cookie accessToken baru sudah dikirim backend.
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh token juga sudah tidak valid — tidak ada jalan lain,
        // paksa balik ke halaman login.
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
        return Promise.reject(refreshError);
      }
    }

    /*
     * Semua error lainnya dikonversi menjadi ApiError.
     */
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