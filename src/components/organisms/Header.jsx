import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header role="banner" className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="flex-between flex-wrap">
          {/* Logo SIEMPRE visible (eliminamos la condición !scrolled) */}
          <Link to="/" className="logo-combined">
            <img 
              src="/images/logo.PNG" 
              alt="Logo Pastelería 1000 Sabores" 
              className="logo-image" 
            />
            <span className="logo">Pastelería 1000 Sabores</span>
          </Link>

          {/* Navegación */}
          <nav role="navigation" aria-label="Menú principal">
            <ul>
              <li>
                <a href="#inicio" className="activo">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#catalogo">Catálogo</a>
              </li>
              <li>
                <a href="#nosotros">Nosotros</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </nav>

          {/* Acciones de usuario */}
          <div className="user-actions flex">
            <button className="btn btn-secondary" aria-label="Iniciar sesión">
              <span className="btn-text">Iniciar sesión</span>
            </button>
            <button className="carrito-compacto" aria-label="Ver carrito">
              🛒
              <span id="cart-count">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}