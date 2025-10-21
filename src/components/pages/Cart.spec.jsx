import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cart from './Cart'

jest.mock('../organisms/Product', () => {
  return function Product({ name, price, onRemove }) {
    return (
      <div data-testid="product-card">
        <h3>{name}</h3>
        <div className="producto-precio">${price} CLP</div>
        {onRemove && <button onClick={onRemove}>Eliminar</button>}
      </div>
    )
  }
})

describe('Cart Component', () => {
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

  beforeEach(() => {
    localStorage.clear()
    localStorage.setItem('products', JSON.stringify(mockProducts))
    jest.spyOn(Storage.prototype, 'clear')
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('muestra los productos en el carrito', () => {
    render(<Cart />)
    expect(screen.getByText('Oso patriarcal')).toBeInTheDocument()
    expect(screen.getByText('Oso africano')).toBeInTheDocument()
  })

  test('el boton invoca a clear y limpia lista', () => {
    render(<Cart />)
    const button = screen.getByText('Limpiar carrito')
    fireEvent.click(button)
    expect(localStorage.clear).toHaveBeenCalled()
    expect(screen.queryByText('Oso patriarcal')).not.toBeInTheDocument()
    expect(screen.queryByText('Oso africano')).not.toBeInTheDocument()
  })

  test('muestra mensaje cuando carrito está vacío', () => {
    localStorage.setItem('products', JSON.stringify([]))
    render(<Cart />)
    expect(screen.getByText('Tu carrito está vacío')).toBeInTheDocument()
  })

  test('muestra total correcto', () => {
    render(<Cart />)
    expect(screen.getByText('Total: $27000 CLP')).toBeInTheDocument()
  })

  test('elimina un producto al hacer click en eliminar', () => {
    render(<Cart />)
    const eliminarBtns = screen.getAllByText('Eliminar')
    fireEvent.click(eliminarBtns[0]) // eliminar primer producto
    expect(screen.queryByText('Oso patriarcal')).not.toBeInTheDocument()
  })
})
