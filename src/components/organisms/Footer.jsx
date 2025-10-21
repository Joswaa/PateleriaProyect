import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">

          <div className="footer-section">
            <h3>Pastelería 1000 Sabores</h3>
            <p>50 años endulzando Chile con tradición y calidad.</p>

          </div>

          <div className="footer-section">
            <h3>Contacto</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="contact-text">
                  Av. Dulce 123, Providencia
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


          <div className="footer-section">
            <h3>Horarios</h3>
            <div className="horarios-list">
              <div className="horario-item">
                <span className="horario-dias">Lun-Vie</span>
                <span className="horario-horas">8:00-20:00</span>
              </div>
              <div className="horario-item">
                <span className="horario-dias">Sábados</span>
                <span className="horario-horas">9:00-18:00</span>
              </div>
              <div className="horario-item">
                <span className="horario-dias">Domingos</span>
                <span className="horario-horas">10:00-16:00</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Enlaces</h3>
            <div className="footer-links">
              <a href="#inicio">Inicio</a>
              <a href="#promociones">Promociones</a>
              <a href="#catalogo">Catálogo</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#registro">Registro</a>
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