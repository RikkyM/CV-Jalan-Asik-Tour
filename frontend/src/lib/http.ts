import axios from "axios";

export const baseURL = import.meta.env.VITE_API_URL;

export const http = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  withXSRFToken: true,
});
