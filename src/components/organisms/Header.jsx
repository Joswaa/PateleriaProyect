import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // ajusta ruta si es otra

const Header = () => {
  const navigate = useNavigate();
  const { items } = useCart();
  const cartCount = items.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <header>
      <div className="container">
        <div className="flex-between">
          <Link to="/" className="logo-combined">
            <img src="/images/logo.PNG" alt="Logo Pastelería" className="logo-image" />
            <span className="logo">Pastelería 1000 Sabores</span>
          </Link>

          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/catalogo">Catálogo</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>

          <div className="user-actions">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/registro" className="btn btn-secondary">Registro</Link>
            <button className="carrito-compacto" onClick={() => navigate('/cart')}>
              🛒
              <span id="cart-count">{cartCount}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;