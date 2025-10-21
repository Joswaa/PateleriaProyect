import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex-between">
          <a href="#home" className="logo-combined">
            <img src="/images/logo.PNG" alt="Logo Pastelería" className="logo-image" />
            <span className="logo">Pastelería 1000 Sabores</span>
          </a>
          
          <nav>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#catalogo">Catálogo</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
          
          <div className="user-actions">
            <a href="#login" className="btn btn-primary">Login</a>
            <a href="#registro" className="btn btn-secondary">Registro</a>
            <button className="carrito-compacto">
              🛒
              <span id="cart-count">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;