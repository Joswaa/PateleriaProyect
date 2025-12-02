import React from 'react';
import { useCart } from '../../context/CartContext';

export default function Cart() {
  const { items, removeFromCart, clearCart, total } = useCart();

  if (items.length === 0) {
    return <p style={{ padding: '2rem' }}>Tu carrito está vacío.</p>;
  }

  return (
    <section style={{ padding: '2rem' }}>
      <h2>Carrito de compras</h2>
      {items.map((item) => (
        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div>
            <strong>{item.name}</strong>
            <p>Cantidad: {item.quantity}</p>
          </div>
          <div>
            <span>${(item.price * item.quantity).toLocaleString('es-CL')} CLP</span>
            <button onClick={() => removeFromCart(item.id)} className="btn btn-outline" style={{ marginLeft: '1rem' }}>
              Quitar
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ${total.toLocaleString('es-CL')} CLP</h3>
      <button onClick={clearCart} className="btn btn-primary">
        Vaciar carrito
      </button>
    </section>
  );
}