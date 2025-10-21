<<<<<<< HEAD
﻿import React from 'react'
=======
import React from 'react'
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cart from './Cart'

jest.mock('../organisms/Product', () => {
<<<<<<< HEAD
  return function Product({ name, price, onRemove }) {
=======
  return function Product({ name, price }) {
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
    return (
      <div data-testid="product-card">
        <h3>{name}</h3>
        <div className="producto-precio">${price} CLP</div>
<<<<<<< HEAD
        {onRemove && <button onClick={onRemove}>Eliminar</button>}
=======
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
      </div>
    )
  }
})

describe('Cart Component', () => {
<<<<<<< HEAD
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

=======
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

>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
  afterEach(() => {
    jest.restoreAllMocks()
  })

<<<<<<< HEAD
  test('muestra los productos en el carrito', () => {
    render(<Cart />)
=======
  it('muestra los productos en el carrito', () => {
    render(<Cart />)
    
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
    expect(screen.getByText('Oso patriarcal')).toBeInTheDocument()
    expect(screen.getByText('Oso africano')).toBeInTheDocument()
  })

<<<<<<< HEAD
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
=======
  it('el boton invoca a clear', () => {
    render(<Cart />)
    
    const button = screen.getByText('Limpiar carrito')
    fireEvent.click(button)
    
    expect(localStorage.clear).toHaveBeenCalled()
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
  })
})
