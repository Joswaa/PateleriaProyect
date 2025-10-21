import React, { useState, useEffect } from 'react'
import Product from '../organisms/Product'

export default function Cart() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Cargar productos del localStorage
    const savedProducts = JSON.parse(localStorage.getItem('products') || '[]')
    setProducts(savedProducts)
  }, [])

  const handleClearCart = () => {
    localStorage.clear()
    setProducts([])
  }

  return (
    <div>
      <h1>Carrito de Compras</h1>
      
      {products.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {products.map((product) => (
            <Product key={product.code} {...product} />
          ))}
          <button onClick={handleClearCart}>Limpiar carrito</button>
        </>
      )}
    </div>
  )
}
