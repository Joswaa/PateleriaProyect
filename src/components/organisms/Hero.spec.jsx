// src/components/organisms/Hero.spec.jsx
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero component', () => {
  test('se muestran título, descripción y botones', () => {
    render(<Hero />);
    expect(screen.getByText('¡Celebra con nosotros 50 años de dulces momentos!')).toBeInTheDocument();
    expect(screen.getByText(/Desde 1974 creando los sabores más deliciosos/i)).toBeInTheDocument();
    expect(screen.getByText('Ver catálogo completo')).toBeInTheDocument();
    expect(screen.getByText('Ver promociones')).toBeInTheDocument();
  });

  test('los botones tienen enlaces correctos', () => {
    render(<Hero />);
    expect(screen.getByText('Ver catálogo completo').closest('a')).toHaveAttribute('href', '#catalogo');
    expect(screen.getByText('Ver promociones').closest('a')).toHaveAttribute('href', '#promociones');
  });
});
