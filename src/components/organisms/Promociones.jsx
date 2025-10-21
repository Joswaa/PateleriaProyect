import React from 'react';

export default function Promociones() {
  const copyPromoCode = () => {
    alert('Código copiado: FELICES50');
  };

  return (
    <section id="promociones" className="promotions-section">
      <div className="container">
        <h2 className="text-center mb-lg">Promociones especiales de aniversario</h2>
        <div className="grid grid-3">
          <article className="promo-card">
            <div className="promo-icon">🎂</div>
            <h3>50% OFF para +50 años</h3>
            <p>
              Usuarios mayores de 50 años reciben un <strong>50% de descuento</strong> en todos nuestros
              productos. ¡Celebra la experiencia!
            </p>
            <button className="btn btn-secondary">Registrarse ahora</button>
          </article>

          <article className="promo-card">
            <div className="promo-icon">🎁</div>
            <h3>Descuento permanente</h3>
            <p>
              Usa el código <strong className="codigo-promo">FELICES50</strong> al registrarte y obtén un
              <strong>10% de descuento</strong> de por vida.
            </p>
            <button className="btn btn-secondary" onClick={copyPromoCode}>Copiar código</button>
          </article>

          <article className="promo-card">
            <div className="promo-icon">🍰</div>
            <h3>Torta gratis - Estudiantes Duoc</h3>
            <p>
              Estudiantes de Duoc UC reciben una <strong>torta gratis</strong> en su cumpleaños. Solo
              regístrate con tu correo institucional.
            </p>
            <button className="btn btn-secondary">Registrarse con @duoc.cl</button>
          </article>
        </div>
      </div>
    </section>
  );
}
