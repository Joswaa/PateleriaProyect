import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex-between flex-wrap">
          <div>
            <Link to="/" className="logo-combined">
              <img src="/logo.png" alt="Logo Pastelería 1000 Sabores" className="logo-image" width="60" height="40" />
              <span className="logo">Pastelería 1000 Sabores</span>
            </Link>
            <p className="texto-secundario">50 años endulzando Chile</p>
          </div>

          <nav role="navigation" aria-label="Menú principal">
            <ul>
              <li><a href="#inicio" className="activo">Inicio</a></li>
              <li><a href="#catalogo">Catálogo</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>

          <div className="user-actions flex">
            <button className="btn btn-secondary" aria-label="Iniciar sesión">
              Iniciar sesión
            </button>
            <Link to="/cart" className="btn btn-primary" aria-label="Ver carrito">
              🛒 Carrito (<span id="cart-count">0</span>)
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}