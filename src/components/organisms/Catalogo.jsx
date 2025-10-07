import React from 'react'

export default function Catalogo() {
  return (
    // Catálogo de Productos Section
    <section id="catalogo" className="catalog-section">
      <div className="container">
        <h2 className="text-center mb-md">Nuestro delicioso catálogo</h2>
        <p className="text-center texto-secundario mb-lg">Descubre más de 50 sabores únicos, desde nuestras recetas
          tradicionales hasta las creaciones más innovadoras</p>

        {/* Filtros de productos */}
        <nav className="filters mb-lg" role="tablist" aria-label="Filtros de productos">
          <button className="filter-btn active" data-filter="todos" role="tab" aria-selected="true">Todos los
            productos</button>
          <button className="filter-btn" data-filter="tortas-cuadradas" role="tab">Tortas Cuadradas</button>
          <button className="filter-btn" data-filter="tortas-circulares" role="tab">Tortas Circulares</button>
          <button className="filter-btn" data-filter="postres-individuales" role="tab">Postres
            Individuales</button>
          <button className="filter-btn" data-filter="sin-azucar" role="tab">Sin Azúcar</button>
          <button className="filter-btn" data-filter="sin-gluten" role="tab">Sin Gluten</button>
          <button className="filter-btn" data-filter="vegana" role="tab">Vegana</button>
        </nav>

        {/* Grid de productos */}
        <div className="products-grid grid grid-3" id="productos-container">
          <article className="producto-card" data-category="tortas-cuadradas" data-product="TC001">
            <img src="tortarica.jpg" alt="Torta Cuadrada de Chocolate" className="producto-imagen"
              loading="lazy" />
            <div className="producto-contenido">
              <span className="producto-categoria">Tortas Cuadradas</span>
              <h3 className="producto-titulo">Torta Cuadrada de Chocolate</h3>
              <p className="producto-descripcion">Deliciosa torta de chocolate con capas de ganache y un toque
                de avellanas. Personalizable con mensajes especiales.</p>
              <div className="producto-precio">$45.000 CLP</div>
              <button className="btn btn-primary add-to-cart" data-product-id="TC001"
                data-product-name="Torta Cuadrada de Chocolate" data-product-price="45000">
                Añadir al carrito
              </button>
            </div>
          </article>

          <article className="producto-card" data-category="tortas-circulares" data-product="TT001">
            <img src="Vainilla.jpg" alt="Torta Circular de Vainilla" className="producto-imagen"
              loading="lazy" />
            <div className="producto-contenido">
              <span className="producto-categoria">Tortas Circulares</span>
              <h3 className="producto-titulo">Torta Circular de Vainilla</h3>
              <p className="producto-descripcion">Bizcocho de vainilla clásico relleno con crema pastelera y
                cubierto con un glaseado dulce, perfecto para cualquier ocasión.</p>
              <div className="producto-precio">$40.000 CLP</div>
              <button className="btn btn-primary add-to-cart" data-product-id="TT001"
                data-product-name="Torta Circular de Vainilla" data-product-price="40000">
                Añadir al carrito
              </button>
            </div>
          </article>

          <article className="producto-card" data-category="postres-individuales" data-product="PI001">
            <img src="mousse.jpg" alt="Mousse de Chocolate" className="producto-imagen" loading="lazy" />
            <div className="producto-contenido">
              <span className="producto-categoria">Postres Individuales</span>
              <h3 className="producto-titulo">Mousse de Chocolate</h3>
              <p className="producto-descripcion">Postre individual cremoso y suave, hecho con chocolate de
                alta calidad, ideal para los amantes del chocolate.</p>
              <div className="producto-precio">$5.000 CLP</div>
              <button className="btn btn-primary add-to-cart" data-product-id="PI001"
                data-product-name="Mousse de Chocolate" data-product-price="5000">
                Añadir al carrito
              </button>
            </div>
          </article>

          <article className="producto-card" data-category="sin-azucar" data-product="PSA001">
            <img src="torta-naranja-sin-azucar.jpg" alt="Torta Sin Azúcar de Naranja"
              className="producto-imagen" loading="lazy" />
            <div className="producto-contenido">
              <span className="producto-categoria">Sin Azúcar</span>
              <h3 className="producto-titulo">Torta Sin Azúcar de Naranja</h3>
              <p className="producto-descripcion">Torta ligera y deliciosa, endulzada naturalmente, ideal para
                quienes buscan opciones más saludables.</p>
              <div className="producto-precio">$48.000 CLP</div>
              <button className="btn btn-primary add-to-cart" data-product-id="PSA001"
                data-product-name="Torta Sin Azúcar de Naranja" data-product-price="48000">
                Añadir al carrito
              </button>
            </div>
          </article>

          <article className="producto-card" data-category="sin-gluten" data-product="PG001">
            <img src="brownie-sin-gluten.jpg" alt="Brownie Sin Gluten" className="producto-imagen"
              loading="lazy" />
            <div className="producto-contenido">
              <span className="producto-categoria">Sin Gluten</span>
              <h3 className="producto-titulo">Brownie Sin Gluten</h3>
              <p className="producto-descripcion">Rico y denso, este brownie es perfecto para quienes
                necesitan evitar el gluten sin sacrificar el sabor.</p>
              <div className="producto-precio">$4.000 CLP</div>
              <button className="btn btn-primary add-to-cart" data-product-id="PG001"
                data-product-name="Brownie Sin Gluten" data-product-price="4000">
                Añadir al carrito
              </button>
            </div>
          </article>

          <article className="producto-card" data-category="vegana" data-product="PV001">
            <img src="torta-vegana-chocolate.jpg" alt="Torta Vegana de Chocolate"
              className="producto-imagen" loading="lazy" />
            <div className="producto-contenido">
              <span className="producto-categoria">Vegana</span>
              <h3 className="producto-titulo">Torta Vegana de Chocolate</h3>
              <p className="producto-descripcion">Torta de chocolate húmeda y deliciosa, hecha sin productos
                de origen animal, perfecta para veganos.</p>
              <div className="producto-precio">$50.000 CLP</div>
              <button className="btn btn-primary add-to-cart" data-product-id="PV001"
                data-product-name="Torta Vegana de Chocolate" data-product-price="50000">
                Añadir al carrito
              </button>
            </div>
          </article>
        </div>

        <div className="text-center mt-lg">
          <a href="pages/catalogo.html" className="btn btn-outline">Ver catálogo completo</a>
        </div>
      </div>
    </section>
  )
}