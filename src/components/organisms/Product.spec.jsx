import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Product from './Product'

// IMPORTANTE: Asegúrate de que NO haya otros mocks de Product activos
jest.unmock('./Product')

describe('Product Component', () => {
  const mockProduct = {
    code: 'oso-001',
    image: '/images/oso.jpg',
    name: 'Oso de Peluche',
    description: 'Un adorable oso de peluche',
    price: 15000,
    category: 'Peluches'
  }

  beforeEach(() => {
    // Limpiar localStorage antes de cada test
    localStorage.clear()
    
    // Mock de alert para no interrumpir los tests
    global.alert = jest.fn()
    
    // Mock de localStorage
    jest.spyOn(Storage.prototype, 'setItem')
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('[]')
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renderiza el componente Product', () => {
    render(<Product {...mockProduct} />)
    
    // Verifica que el componente se renderice
    const productCard = screen.getByTestId('oso-001')
    expect(productCard).toBeInTheDocument()
  })

  it('muestra el nombre del producto', () => {
    render(<Product {...mockProduct} />)
    
    expect(screen.getByText('Oso de Peluche')).toBeInTheDocument()
  })

  it('muestra la descripción del producto', () => {
    render(<Product {...mockProduct} />)
    
    expect(screen.getByText('Un adorable oso de peluche')).toBeInTheDocument()
  })

  it('muestra la categoría del producto', () => {
    render(<Product {...mockProduct} />)
    
    expect(screen.getByText('Peluches')).toBeInTheDocument()
  })

  it('no muestra categoría si no existe', () => {
    const productWithoutCategory = { ...mockProduct }
    delete productWithoutCategory.category
    
    render(<Product {...productWithoutCategory} />)
    
    expect(screen.queryByText('Peluches')).not.toBeInTheDocument()
  })

  it('muestra la imagen del producto', () => {
    render(<Product {...mockProduct} />)
    
    const image = screen.getByAltText('Oso de Peluche')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/images/oso.jpg')
    expect(image).toHaveAttribute('loading', 'lazy')
  })

  it('tiene un botón para agregar al carrito', () => {
    render(<Product {...mockProduct} />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('agrega el producto al carrito al hacer click', () => {
    render(<Product {...mockProduct} />)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(localStorage.setItem).toHaveBeenCalled()
    expect(global.alert).toHaveBeenCalled()
  })

  it('guarda el producto con la estructura correcta', () => {
    render(<Product {...mockProduct} />)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    const savedData = localStorage.setItem.mock.calls[0][1]
    const savedProducts = JSON.parse(savedData)
    
    expect(savedProducts).toHaveLength(1)
    expect(savedProducts[0]).toMatchObject({
      code: 'oso-001',
      name: 'Oso de Peluche',
      price: 15000
    })
  })
})