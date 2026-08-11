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
      // Backend mengirim Set-Cookie:
      // accessToken baru
      // refreshToken baru
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

    // Jangan refresh request /auth/refresh
    if (originalRequest.url?.includes("/auth/refresh")) {
      return Promise.reject(error);
    }

    // Access token expired / tidak valid
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await refreshAccessToken();

        // Backend sudah mengirim accessToken baru
        // melalui Set-Cookie.
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh token sudah tidak valid / expired.
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
