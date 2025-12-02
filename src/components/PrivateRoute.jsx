import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const token = localStorage.getItem('token');
  // Si hay token, deja pasar; si no, manda a /login
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}