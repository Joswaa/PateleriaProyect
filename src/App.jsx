import React from 'react'
import Registro from "./components/pages/Registro"
import Login from "./components/pages/Login"
import Home from "./components/pages/Home"
import Cart from "./components/pages/Cart"

function App() {
  return (
    <div>
      {/* Header */}
      <header style={{ 
        background: 'linear-gradient(135deg, #FFF5E1 0%, #FFC0CB 100%)', 
        padding: '1rem 0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h1 style={{ 
                fontFamily: 'Pacifico, cursive', 
                color: '#8B4513', 
                margin: 0,
                fontSize: '1.8rem'
              }}>
                Pastelería 1000 Sabores
              </h1>
            </div>
            
            <nav>
              <a href="#home" style={{ margin: '0 0.5rem', color: '#5D4037', textDecoration: 'none', fontWeight: '500' }}>
                Inicio
              </a>
              <a href="#login" style={{ margin: '0 0.5rem', color: '#5D4037', textDecoration: 'none', fontWeight: '500' }}>
                Login
              </a>
              <a href="#registro" style={{ margin: '0 0.5rem', color: '#5D4037', textDecoration: 'none', fontWeight: '500' }}>
                Registro
              </a>
              <a href="#cart" style={{ margin: '0 0.5rem', color: '#5D4037', textDecoration: 'none', fontWeight: '500' }}>
                Carrito
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* Home Section */}
        <Home />
        
        {/* Login Section */}
        <Login />
        
        {/* Registro Section */}
        <Registro />
        
        {/* Cart Section */}
        <Cart />
      </main>

      {/* Footer */}
      <footer style={{ 
        background: 'linear-gradient(135deg, #8B4513 0%, #6d3710 100%)', 
        color: 'white', 
        padding: '2rem 0',
        marginTop: '4rem'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 1rem 0', fontSize: '1.1rem' }}>
              Pastelería 1000 Sabores
            </p>
            <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>
              &copy; 2024 Todos los derechos reservados. 50 años endulzando Chile.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App