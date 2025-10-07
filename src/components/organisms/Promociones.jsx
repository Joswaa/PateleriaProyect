import React from 'react'

export default function Promociones() {
  return (
    <section id="promociones" class="promotions-section">
            <div class="container">
                <h2 class="text-center mb-lg">Promociones especiales de aniversario</h2>
                <div class="grid grid-3">
                    <article class="promo-card">
                        <div class="promo-icon">🎂</div>
                        <h3>50% OFF para +50 años</h3>
                        <p>Usuarios mayores de 50 años reciben un <strong>50% de descuento</strong> en todos nuestros
                            productos. ¡Celebra la experiencia!</p>
                        <button class="btn btn-secondary">Registrarse ahora</button>
                    </article>

                    <article class="promo-card">
                        <div class="promo-icon">🎁</div>
                        <h3>Descuento permanente</h3>
                        <p>Usa el código <strong class="codigo-promo">FELICES50</strong> al registrarte y obtén un
                            <strong>10% de descuento</strong> de por vida.</p>
                        <button class="btn btn-secondary" onclick="copyPromoCode()">Copiar código</button>
                    </article>

                    <article class="promo-card">
                        <div class="promo-icon">🍰</div>
                        <h3>Torta gratis - Estudiantes Duoc</h3>
                        <p>Estudiantes de Duoc UC reciben una <strong>torta gratis</strong> en su cumpleaños. Solo
                            regístrate con tu correo institucional.</p>
                        <button class="btn btn-secondary">Registrarse con @duoc.cl</button>
                    </article>
                </div>
            </div>
        </section>
  )
}

