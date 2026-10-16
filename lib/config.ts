const defaultApiUrl =
  process.env.NODE_ENV === "production"
    ? "https://resto-pzct.onrender.com"
    : "http://localhost:4000";

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? defaultApiUrl;
export const SOCKET_URL =
  process.env.NEXT_PUBLIC_SOCKET_URL ?? API_URL;
