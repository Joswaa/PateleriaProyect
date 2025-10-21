import React, { useState, useEffect } from 'react';
import Product from '../organisms/Product';

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    setProducts(savedProducts);
  }, []);

  const handleClearCart = () => {
    localStorage.clear();
    setProducts([]);
  };

  const handleRemoveProduct = (code) => {
    const updated = products.filter((p) => p.code !== code);
    setProducts(updated);
    localStorage.setItem('products', JSON.stringify(updated));
  };

  const total = products.reduce((acc, p) => acc + p.price, 0);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {products.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {products.map((product) => (
            <Product
              key={product.code}
              {...product}
              onRemove={() => handleRemoveProduct(product.code)}
            />
          ))}
          <div>Total: ${total} CLP</div>
          <button onClick={handleClearCart}>Limpiar carrito</button>
        </>
      )}
    </div>
  );
}
