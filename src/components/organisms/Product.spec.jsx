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
<<<<<<< HEAD
    localStorage.clear()
    global.alert = jest.fn()
=======
    // Limpiar localStorage antes de cada test
    localStorage.clear()
    
    // Mock de alert para no interrumpir los tests
    global.alert = jest.fn()
    
    // Mock de localStorage
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
    jest.spyOn(Storage.prototype, 'setItem')
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('[]')
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renderiza el componente Product', () => {
    render(<Product {...mockProduct} />)
<<<<<<< HEAD
=======
    
    // Verifica que el componente se renderice
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
    const productCard = screen.getByTestId('oso-001')
    expect(productCard).toBeInTheDocument()
  })

  it('muestra el nombre del producto', () => {
    render(<Product {...mockProduct} />)
<<<<<<< HEAD
=======
    
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
    expect(screen.getByText('Oso de Peluche')).toBeInTheDocument()
  })

  it('muestra la descripción del producto', () => {
    render(<Product {...mockProduct} />)
<<<<<<< HEAD
=======
    
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
    expect(screen.getByText('Un adorable oso de peluche')).toBeInTheDocument()
  })

  it('muestra la categoría del producto', () => {
    render(<Product {...mockProduct} />)
<<<<<<< HEAD
=======
    
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
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
<<<<<<< HEAD
=======
    
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
    const image = screen.getByAltText('Oso de Peluche')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/images/oso.jpg')
    expect(image).toHaveAttribute('loading', 'lazy')
  })

<<<<<<< HEAD
  it('muestra imagen placeholder si no hay imagen', () => {
    const productWithoutImage = { ...mockProduct, image: '' }
    render(<Product {...productWithoutImage} />)
    const image = screen.getByAltText('Oso de Peluche')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/images/placeholder.jpg') // ajusta según tu placeholder real
  })

  it('tiene un botón para agregar al carrito', () => {
    render(<Product {...mockProduct} />)
=======
  it('tiene un botón para agregar al carrito', () => {
    render(<Product {...mockProduct} />)
    
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

<<<<<<< HEAD
  it('botón tiene aria-label adecuado', () => {
    render(<Product {...mockProduct} />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Agregar Oso de Peluche al carrito')
  })

  it('agrega el producto al carrito al hacer click', () => {
    render(<Product {...mockProduct} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
=======
  it('agrega el producto al carrito al hacer click', () => {
    render(<Product {...mockProduct} />)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
    expect(localStorage.setItem).toHaveBeenCalled()
    expect(global.alert).toHaveBeenCalled()
  })

  it('guarda el producto con la estructura correcta', () => {
    render(<Product {...mockProduct} />)
<<<<<<< HEAD
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const savedData = localStorage.setItem.mock.calls[0][1]
    const savedProducts = JSON.parse(savedData)
=======
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    const savedData = localStorage.setItem.mock.calls[0][1]
    const savedProducts = JSON.parse(savedData)
    
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
    expect(savedProducts).toHaveLength(1)
    expect(savedProducts[0]).toMatchObject({
      code: 'oso-001',
      name: 'Oso de Peluche',
      price: 15000
    })
  })
<<<<<<< HEAD
})
=======
})
>>>>>>> 1f9ae98db9a1d34dc910197cdb5231b89e1f2f06
