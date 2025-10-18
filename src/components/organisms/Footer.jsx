import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          {/* Información de la empresa */}
          <div className="footer-section">
            <h3>Pastelería 1000 Sabores</h3>
            <p>50 años endulzando Chile con tradición, calidad e innovación en cada uno de nuestros productos.</p>
            
            <div className="social-section">
              <h4>Síguenos en redes</h4>
              <div className="social-icons">
                <a href="https://facebook.com/1000sabores" target="_blank" rel="noopener noreferrer" 
                   className="social-icon" aria-label="Facebook">
                  📘
                </a>
                <a href="https://instagram.com/1000sabores" target="_blank" rel="noopener noreferrer" 
                   className="social-icon" aria-label="Instagram">
                  📸
                </a>
                <a href="https://twitter.com/1000sabores" target="_blank" rel="noopener noreferrer" 
                   className="social-icon" aria-label="Twitter">
                  🐦
                </a>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h3>Contáctanos</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="contact-text">
                  <p>Av. Dulce 123, Providencia</p>
                  <p>Santiago, Chile</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-text">
                  <a href="tel:+56223456789">+56 2 2345 6789</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div className="contact-text">
                  <a href="mailto:info@1000sabores.cl">info@1000sabores.cl</a>
                </div>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="footer-section">
            <h3>Horarios</h3>
            <div className="horarios-list">
              <div className="horario-item">
                <span className="horario-dias">Lunes a Viernes</span>
                <span className="horario-horas">8:00 - 20:00</span>
              </div>
              <div className="horario-item">
                <span className="horario-dias">Sábados</span>
                <span className="horario-horas">9:00 - 18:00</span>
              </div>
              <div className="horario-item">
                <span className="horario-dias">Domingos</span>
                <span className="horario-horas">10:00 - 16:00</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer-section">
            <h3>Enlaces rápidos</h3>
            <div className="footer-links">
              <a href="#inicio">Inicio</a>
              <a href="#promociones">Promociones</a>
              <a href="#catalogo">Catálogo</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#registro">Registro</a>
              <a href="#contacto">Contacto</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Pastelería 1000 Sabores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}