// src/components/organisms/Header.spec.jsx
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header organism', () => {
  test('renderiza logo, menú y botones', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('Pastelería 1000 Sabores')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByLabelText('Iniciar sesión')).toBeInTheDocument();
    expect(screen.getByLabelText('Ver carrito')).toBeInTheDocument();
  });

  test('cambia clase con scroll', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const header = screen.getByRole('banner') || screen.getByTestId('main-header');
    expect(header.className).toBe('');

    act(() => {
      window.scrollY = 60;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(header.className).toBe('scrolled');
  });
});
