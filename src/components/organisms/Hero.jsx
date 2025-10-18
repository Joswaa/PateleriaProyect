import React from 'react'
import { HashLink } from 'react-router-hash-link'


export default function Header() {
  return (
    <section id="inicio" className="fade-in" style={{ 
        background: 'linear-gradient(135deg, #fff5ee 0%, #ffe4e1 100%)', 
        padding: '4rem 0', 
        textAlign: 'center' 
      }}>
        <div className="container">
          <article style={{ background: 'transparent', boxShadow: 'none' }}>
            <h1>¡Celebra con nosotros 50 años de dulces momentos!</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Desde 1974 creando los sabores más deliciosos de Chile. Descubre nuestras
              exquisiteces y recibe descuentos especiales por nuestro aniversario.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#catalogo" className="btn btn-primary bounce">Ver catálogo completo</a>
              <a href="#promociones" className="btn btn-outline">Ver promociones</a>
            </div>
          </article>
        </div>
      </section>
  )
}
