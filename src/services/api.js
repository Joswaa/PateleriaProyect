const API_URL = 'http://localhost:9090';

export async function loginRequest(username, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  if (!res.ok) {
    throw new Error('Credenciales incorrectas');
  }

  const data = await res.json(); // { token: '...' }
  localStorage.setItem('token', data.token);
  return data;
}

export async function getProducts() {
  const token = localStorage.getItem('token');

  const res = await fetch(`${API_URL}/api/products`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });

  if (!res.ok) {
    throw new Error('Error al cargar productos');
  }

  return await res.json();
}