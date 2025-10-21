import React from 'react'

export default function Header() {
  return (
    <section id="inicio" className="fade-in" style={{
      background: 'linear-gradient(135deg, #fff5ee 0%, #ffe4e1 100%)',
      padding: '4rem 0'
    }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          {/* Imagen temporal online */}
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab794f27d2e9?w=600&h=400&fit=crop" 
              alt="Pasteles deliciosos" 
              style={{ 
                width: '100%', 
                height: '300px',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(139, 69, 19, 0.2)'
              }}
            />
            <div className="about-badge">
              <div className="badge-number">50</div>
              <div className="badge-text">Años</div>
            </div>
          </div>

          {/* Contenido a la derecha */}
          <div style={{ textAlign: 'left' }}>
            <h1>¡Celebra con nosotros 50 años de dulces momentos!</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#5D4037' }}>
              Desde 1974 creando los sabores más deliciosos de Chile. Descubre nuestras
              exquisiteces y recibe descuentos especiales por nuestro aniversario.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#catalogo" className="btn btn-primary bounce">Ver catálogo completo</a>
              <a href="#promociones" className="btn btn-outline">Ver promociones</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}