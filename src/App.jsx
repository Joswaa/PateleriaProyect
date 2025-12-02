import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Registro from './components/pages/Registro';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Catalogo from './components/organisms/Catalogo';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/organisms/Footer';


function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Header */}
        <header
          style={{
            background: 'linear-gradient(135deg, #FFF5E1 0%, #FFC0CB 100%)',
            padding: '1rem 0',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h1
                  style={{
                    fontFamily: 'Pacifico, cursive',
                    color: '#8B4513',
                    margin: 0,
                    fontSize: '1.8rem'
                  }}
                >
                  Pastelería 1000 Sabores
                </h1>
              </div>

              <nav>
                <Link
                  to="/"
                  style={{ margin: '0 0.5rem', color: '#5D4037', textDecoration: 'none', fontWeight: '500' }}
                >
                  Inicio
                </Link>
                <Link
                  to="/login"
                  style={{ margin: '0 0.5rem', color: '#5D4037', textDecoration: 'none', fontWeight: '500' }}
                >
                  Login
                </Link>
                <Link
                  to="/registro"
                  style={{ margin: '0 0.5rem', color: '#5D4037', textDecoration: 'none', fontWeight: '500' }}
                >
                  Registro
                </Link>
                <Link
                  to="/catalogo"
                  style={{ margin: '0 0.5rem', color: '#5D4037', textDecoration: 'none', fontWeight: '500' }}
                >
                  Catálogo
                </Link>
                <Link
                  to="/cart"
                  style={{ margin: '0 0.5rem', color: '#5D4037', textDecoration: 'none', fontWeight: '500' }}
                >
                  Carrito
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main content con rutas */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />

            {/* Rutas protegidas */}
            <Route element={<PrivateRoute />}>
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/cart" element={<Cart />} />
            </Route>

            {/* fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer/>

      </div>
    </BrowserRouter>
  );
}

export default App;