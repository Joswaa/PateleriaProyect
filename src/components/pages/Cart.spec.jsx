import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cart from './Cart'

jest.mock('../organisms/Product', () => {
  return function Product({ name, price }) {
    return (
      <div data-testid="product-card">
        <h3>{name}</h3>
        <div className="producto-precio">${price} CLP</div>
      </div>
    )
  }
})

describe('Cart Component', () => {
  beforeEach(() => {
    localStorage.clear()
    
    const mockProducts = [
      {
        code: 'oso-001',
        image: '/images/oso1.jpg',
        name: 'Oso patriarcal',
        description: 'Oso de peluche grande',
        price: 15000,
        category: 'Peluches'
      },
      {
        code: 'oso-002',
        image: '/images/oso2.jpg',
        name: 'Oso africano',
        description: 'Oso de peluche mediano',
        price: 12000,
        category: 'Peluches'
      }
    ]
    
    localStorage.setItem('products', JSON.stringify(mockProducts))
    jest.spyOn(Storage.prototype, 'clear')
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('muestra los productos en el carrito', () => {
    render(<Cart />)
    
    expect(screen.getByText('Oso patriarcal')).toBeInTheDocument()
    expect(screen.getByText('Oso africano')).toBeInTheDocument()
  })

  it('el boton invoca a clear', () => {
    render(<Cart />)
    
    const button = screen.getByText('Limpiar carrito')
    fireEvent.click(button)
    
    expect(localStorage.clear).toHaveBeenCalled()
  })
})
