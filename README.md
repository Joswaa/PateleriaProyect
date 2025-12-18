# Pastelería 1000 Sabores - Frontend Web

Frontend web desarrollado con **React** para la pastelería **1000 Sabores**.  
La aplicación consume la API REST en **Spring Boot** (desplegada en AWS EC2 o local) para mostrar el catálogo de productos, manejar el carrito de compras y realizar el inicio de sesión con autenticación basada en token.

## 🚀 Tecnologías utilizadas

- React 18
- React Router DOM
- JavaScript (ES6+)
- HTML5 semántico
- CSS3 (Flexbox, Grid, diseño responsivo)
- Context API (carrito de compras, autenticación)
- Fetch API para consumo de la API REST del backend

## ✨ Funcionalidades principales

- Landing page con información de la pastelería y secciones de promociones.
- Catálogo de productos consumido desde el backend (`/productos`) con filtros por categoría.
- Carrito de compras con manejo de cantidades y total.
- Formulario de **login** integrado con la API (`/auth/login`) y almacenamiento de token en `localStorage`.
- Rutas protegidas (`/catalogo`, `/cart`) mediante `PrivateRoute`, accesibles solo para usuarios autenticados.
- Diseño responsivo para escritorio y dispositivos móviles.

## 🧩 Estructura del proyecto

src/
├─ components/
│ ├─ pages/
│ │ ├─ Home.jsx
│ │ ├─ Login.jsx
│ │ ├─ Registro.jsx
│ │ └─ Cart.jsx
│ ├─ organisms/
│ │ ├─ Catalogo.jsx
│ │ └─ Footer.jsx
│ └─ PrivateRoute.jsx
├─ context/
│ ├─ AuthContext.jsx
│ └─ CartContext.jsx
├─ services/
│ └─ api.js # loginRequest, getProducts, etc.
├─ App.jsx
└─ main.jsx


## 🔗 Integración con el backend

Este frontend consume la **Pastelería API** desarrollada con Spring Boot:

- `POST /auth/login` → autenticación de usuario y obtención de token (JWT).
- `GET /productos` → listado de productos para el catálogo.
- Otros endpoints CRUD según la implementación del backend.

En `src/services/api.js` se definen las funciones que llaman a estos endpoints y envían el token en el header `Authorization` cuando es necesario.

## ▶️ Ejecución del proyecto
Instalar dependencias
npm install

Levantar en modo desarrollo
npm run dev # Vite (ajustar si se usa otro template)

Abrir en el navegador
http://localhost:5173 # o el puerto configurado en tu entorno


> Nota: Es necesario tener el backend levantado (por ejemplo, en `http://localhost:9090`) para que el login y el catálogo funcionen correctamente.

## 📚 Contexto académico

Proyecto académico desarrollado como parte de las asignaturas de **Desarrollo de Aplicaciones Web** y **Desarrollo de Aplicaciones Móviles**, integrando:

- Frontend web en React.
- Backend REST en Spring Boot.
- Consumo de API desde cliente web y móvil.
