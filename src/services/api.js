// src/services/api.js
const API_URL = 'http://localhost:9090';

export async function loginRequest(username, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    throw new Error('Credenciales incorrectas');
  }

  const data = await res.json();
  localStorage.setItem('token', data.token);
  return data;
}

// NUEVO:
export async function getProducts() {
  const token = localStorage.getItem('token'); // si tu API necesita auth

  const res = await fetch(`${API_URL}/products`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });

  if (!res.ok) {
    throw new Error('Error al obtener productos');
  }

  return res.json(); // devuelve array de productos
}