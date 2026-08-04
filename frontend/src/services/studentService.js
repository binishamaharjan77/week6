// // src/services/studentService.js
// const API_BASE = "http://localhost:3000/api/students";

// async function handleResponse(response) {
//   if (!response.ok) {
//     const body = await response.json().catch(() => ({}));
//     throw new Error(body.error || body.message || `Request failed with ${response.status}`);
//   }
//   return response.json();
// }

// export async function getStudents() {
//   const response = await fetch(API_BASE);
//   return handleResponse(response);
// }

// export async function getStudentById(id) {
//   const response = await fetch(`${API_BASE}/${id}`);
//   return handleResponse(response);
// }

// export async function createStudent(data) {
//   const response = await fetch(API_BASE, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return handleResponse(response);
// }

// export async function updateStudent(id, data) {
//   const response = await fetch(`${API_BASE}/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return handleResponse(response);
// }

// export async function deleteStudent(id) {
//   const response = await fetch(`${API_BASE}/${id}`, {
//     method: "DELETE",
//   });
//   return handleResponse(response);
// }

import { apiRequest } from "../api";
export async function getStudents(token) {
return apiRequest("/students", { token });
}
export async function getStudentById(id, token) {
return apiRequest(`/students/${id}`, { token });
}
export async function createStudent(data, token) {
return apiRequest("/students", {
method: "POST",
body: data,
token,
});
}
export async function updateStudent(id, data, token) {
return apiRequest(`/students/${id}`, {
method: "PUT",
body: data,
token,
});
}
export async function deleteStudent(id, token) {
return apiRequest(`/students/${id}`, { method: "DELETE", token });
}