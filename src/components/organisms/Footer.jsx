import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          {/* Información de la empresa */}
          <div className="footer-section">
            <h3>Pastelería 1000 Sabores</h3>
            <p>50 años endulzando Chile con tradición, calidad e innovación.</p>
            <div className="social-icons" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="https://facebook.com/1000sabores" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                📘
              </a>
              <a href="https://instagram.com/1000sabores" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                📸
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h3>Contáctanos</h3>
            <div style={{ marginBottom: '0.8rem' }}>
              <span style={{ marginRight: '0.5rem' }}>📍</span>
              <span>Av. Dulce 123, Providencia, Santiago</span>
            </div>
            <div style={{ marginBottom: '0.8rem' }}>
              <span style={{ marginRight: '0.5rem' }}>📞</span>
              <a href="tel:+56223456789">+56 2 2345 6789</a>
            </div>
            <div style={{ marginBottom: '0.8rem' }}>
              <span style={{ marginRight: '0.5rem' }}>✉️</span>
              <a href="mailto:info@1000sabores.cl">info@1000sabores.cl</a>
            </div>
          </div>

          {/* Horarios */}
          <div className="footer-section">
            <h3>Horarios de atención</h3>
            <p><strong>Lunes a Viernes:</strong> 8:00 - 20:00</p>
            <p><strong>Sábados:</strong> 9:00 - 18:00</p>
            <p><strong>Domingos:</strong> 10:00 - 16:00</p>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer-section">
            <h3>Enlaces rápidos</h3>
            <a href="#inicio">Inicio</a>
            <a href="#promociones">Promociones</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#registro">Registro</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Pastelería 1000 Sabores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )

}