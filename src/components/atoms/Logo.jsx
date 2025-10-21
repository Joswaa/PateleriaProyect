// src/components/atoms/Logo.jsx
export default function Logo({ alt = "Logo", size = 48 }) {
  return (
    <img
      src="/public/images/logo.PNG"  // Ruta del logo
      alt={alt}
      width={size}
      height={size}
      style={{ display: "block" }}
      data-testid="main-logo"
    />
  );
}
