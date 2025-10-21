import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home'

// Mock de los componentes hijos
jest.mock('../organisms/Header', () => {
  return function Header() {
    return <div data-testid="header">Header Mock</div>
  }
})

jest.mock('../organisms/Hero', () => {
  return function Hero() {
    return <div data-testid="hero">Hero Mock</div>
  }
})

jest.mock('../organisms/Promociones', () => {
  return function Promociones() {
    return <div data-testid="promociones">Promociones Mock</div>
  }
})

jest.mock('../organisms/Catalogo', () => {
  return function Catalogo() {
    return <div data-testid="catalogo">Catalogo Mock</div>
  }
})

jest.mock('../organisms/Registro', () => {
  return function Registro() {
    return <div data-testid="registro">Registro Mock</div>
  }
})

jest.mock('../organisms/Nosotros', () => {
  return function Nosotros() {
    return <div data-testid="nosotros">Nosotros Mock</div>
  }
})

jest.mock('../organisms/Footer', () => {
  return function Footer() {
    return <div data-testid="footer">Footer Mock</div>
  }
})

describe('Home Component', () => {
  it('renderiza todos los componentes principales', () => {
    render(<Home />)
    
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('promociones')).toBeInTheDocument()
    expect(screen.getByTestId('catalogo')).toBeInTheDocument()
    expect(screen.getByTestId('registro')).toBeInTheDocument()
    expect(screen.getByTestId('nosotros')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renderiza los componentes en el orden correcto', () => {
    const { container } = render(<Home />)
    const elements = container.querySelectorAll('[data-testid]')
    
    expect(elements[0]).toHaveAttribute('data-testid', 'header')
    expect(elements[1]).toHaveAttribute('data-testid', 'hero')
    expect(elements[2]).toHaveAttribute('data-testid', 'promociones')
    expect(elements[3]).toHaveAttribute('data-testid', 'catalogo')
    expect(elements[4]).toHaveAttribute('data-testid', 'registro')
    expect(elements[5]).toHaveAttribute('data-testid', 'nosotros')
    expect(elements[6]).toHaveAttribute('data-testid', 'footer')
  })
})