// // src/api.js
// const HOST = import.meta.env.DEV
//   ? import.meta.env.VITE_API_BASE_DEV
//   : import.meta.env.VITE_API_BASE_PROD;

// const API_BASE = `${HOST}/api`;

// export async function apiRequest(
//   path,
//   { method = "GET", body, token } = {}
// ) {
//   const headers = {
//     "Content-Type": "application/json",
//   };

//   if (token) {
//     headers.Authorization = `Bearer ${token}`;
//   }

//   const response = await fetch(`${API_BASE}${path}`, {
//     method,
//     headers,
//     body: body ? JSON.stringify(body) : undefined,
//   });

//   if (response.status === 204) return null;

//   const data = await response.json().catch(() => ({}));

//   if (!response.ok) {
//     throw new Error(data.error || data.message || "Request failed");
//   }

//   return data;
// }


// src/api.js

const HOST = import.meta.env.DEV
  ? import.meta.env.VITE_API_BASE_DEV
  : import.meta.env.VITE_API_BASE_PROD;

// Remove any trailing slash from the environment variable
const BASE_URL = HOST.replace(/\/+$/, "");

// Make sure /api is added exactly once
const API_BASE = `${BASE_URL}/api`;

export async function apiRequest(
  path,
  { method = "GET", body, token } = {}
) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // Prevent /api/api/... if the caller already includes /api
  const cleanPath = path.startsWith("/api/")
    ? path.substring(4)
    : path.startsWith("api/")
    ? path.substring(3)
    : path;

  const response = await fetch(`${API_BASE}${cleanPath}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (response.status === 204) return null;

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || data.message || "Request failed");
  }

  return data;
}