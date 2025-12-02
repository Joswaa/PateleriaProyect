import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import { useCart } from '../../context/CartContext';

export default function Catalogo() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('todos');
  const {addToCart} = useCart();

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => {
        console.error(err);
        window.location.href = '/login'; // si no hay token o falla, mandar a login
      });
  }, []);

  const filteredProducts = products.filter((p) => {
    if (filter === 'todos') return true;
    const cat = (p.category || '').toLowerCase();

    if (filter === 'tortas-cuadradas') return cat === 'tortas cuadradas';
    if (filter === 'tortas-circulares') return cat === 'tortas circulares';
    if (filter === 'postres-individuales') return cat === 'postres individuales';
    if (filter === 'sin-azucar') return cat === 'sin azúcar' || cat === 'sin azucar';
    if (filter === 'sin-gluten') return cat === 'sin gluten';
    if (filter === 'vegana') return cat === 'vegana';

    return true;
  });

  return (
    <section id="catalogo" className="catalog-section">
      <div className="container">
        <h2 className="text-center mb-md">Nuestro delicioso catálogo</h2>
        <p className="text-center texto-secundario mb-lg">
          Descubre más sabores únicos, desde nuestras recetas tradicionales hasta las creaciones más innovadoras
        </p>

        <nav className="filters mb-lg" role="tablist" aria-label="Filtros de productos">
          <button
            className={`filter-btn ${filter === 'todos' ? 'active' : ''}`}
            onClick={() => setFilter('todos')}
          >
            Todos los productos
          </button>
          <button
            className={`filter-btn ${filter === 'tortas-cuadradas' ? 'active' : ''}`}
            onClick={() => setFilter('tortas-cuadradas')}
          >
            Tortas Cuadradas
          </button>
          <button
            className={`filter-btn ${filter === 'tortas-circulares' ? 'active' : ''}`}
            onClick={() => setFilter('tortas-circulares')}
          >
            Tortas Circulares
          </button>
          <button
            className={`filter-btn ${filter === 'postres-individuales' ? 'active' : ''}`}
            onClick={() => setFilter('postres-individuales')}
          >
            Postres Individuales
          </button>
          <button
            className={`filter-btn ${filter === 'sin-azucar' ? 'active' : ''}`}
            onClick={() => setFilter('sin-azucar')}
          >
            Sin Azúcar
          </button>
          <button
            className={`filter-btn ${filter === 'sin-gluten' ? 'active' : ''}`}
            onClick={() => setFilter('sin-gluten')}
          >
            Sin Gluten
          </button>
          <button
            className={`filter-btn ${filter === 'vegana' ? 'active' : ''}`}
            onClick={() => setFilter('vegana')}
          >
            Vegana
          </button>
        </nav>

        <div className="products-grid grid grid-3" id="productos-container">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="producto-card"
              data-category={product.category?.toLowerCase()}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="producto-imagen"
                loading="lazy"
              />
              <div className="producto-contenido">
                <span className="producto-categoria">{product.category}</span>
                <h3 className="producto-titulo">{product.name}</h3>
                <p className="producto-descripcion">{product.description}</p>
                <div className="producto-precio">
                  ${product.price?.toLocaleString('es-CL')} CLP
                </div>
                <button
                  className="btn btn-primary add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Añadir al carrito
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-lg">
          <button className="btn btn-outline" onClick={() => console.log('Ver catálogo completo')}>
            Ver catálogo completo
          </button>
        </div>
      </div>
    </section>
  );
}