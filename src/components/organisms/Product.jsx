import React from 'react'

export default function Product({ code, image, name, description, price, category, onRemove }) {
  const handleAddToCart = () => {
    // Obtener productos existentes del localStorage
    const existingProducts = JSON.parse(localStorage.getItem('products') || '[]')

    // Agregar el nuevo producto (con o sin category)
    const newProduct = category 
      ? { code, image, name, description, price, category }
      : { code, image, name, description, price }

    const updatedProducts = [...existingProducts, newProduct]

    // Guardar en localStorage
    localStorage.setItem('products', JSON.stringify(updatedProducts))

    // Feedback visual (opcional)
    alert(`${name} agregado al carrito!`)
  }

  // Formatear precio - CRÍTICO: Manejar undefined
  const formattedPrice = !price 
    ? '$0 CLP'
    : typeof price === 'string' 
      ? `$${parseInt(price).toLocaleString('es-CL')} CLP`
      : `$${price.toLocaleString('es-CL')} CLP`

  return (
    <article className="producto-card" data-product={code} data-testid={code}>
      {/* Fallback para imagen */}
      <img 
        src={image || '/images/placeholder.jpg'} 
        alt={name} 
        className="producto-imagen" 
        loading="lazy" 
      />
      <div className="producto-contenido">
        {category && <span className="producto-categoria">{category}</span>}
        <h3 className="producto-titulo">{name}</h3>
        <p className="producto-descripcion">{description}</p>
        <div className="producto-precio">{formattedPrice}</div>
        {!onRemove && (
          <button 
            className="btn btn-primary add-to-cart"
            onClick={handleAddToCart}
            data-product-id={code}
            aria-label={`Agregar ${name} al carrito`}
          >
            Añadir al carrito
          </button>
        )}
        {onRemove && (
          <button 
            className="btn btn-danger remove-from-cart"
            onClick={onRemove}
          >
            Eliminar
          </button>
        )}
      </div>
    </article>
  )
}
