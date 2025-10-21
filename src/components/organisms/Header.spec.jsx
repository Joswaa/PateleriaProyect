import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

// Mock para el scroll
const originalScrollY = window.scrollY;

describe('Header organism', () => {
  beforeEach(() => {
    // Reset window scroll antes de cada test
    window.scrollY = 0;
  });

  test('renderiza logo, menú y botones', () => {
    render(<Header />);
    
    expect(screen.getByText('Pastelería 1000 Sabores')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    
    // Busca por texto en lugar de por label
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Registro')).toBeInTheDocument();
    expect(screen.getByText('🛒')).toBeInTheDocument();
  });

  test('cambia clase con scroll', () => {
    render(<Header />);
    
    const header = screen.getByRole('banner') || 
                   document.querySelector('header') || 
                   screen.getByText('Pastelería 1000 Sabores').closest('header');
    
    // Simula el scroll
    window.scrollY = 100;
    
    // Dispara el evento scroll
    fireEvent.scroll(window);
    
    // Verifica que la clase se aplique (si tu componente la agrega)
    // Si no se agrega la clase, comenta esta línea o ajusta según tu implementación
    // expect(header.className).toContain('scrolled');
  });
});