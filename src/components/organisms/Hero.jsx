import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="fade-in" style={{
      background: 'linear-gradient(135deg, #fff5ee 0%, #ffe4e1 100%)',
      padding: '4rem 0',
      textAlign: 'center',
      backgroundImage: 'url(/images/banner.jpg)', // agregar imagen si tienes
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: '#332',
    }}>
      <div className="container">
        <article style={{ background: 'rgba(255,255,255,0.8)', padding: '2rem', borderRadius: '12px' }}>
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
  );
}
