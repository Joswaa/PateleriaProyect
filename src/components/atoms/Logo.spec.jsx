// src/components/atoms/Logo.spec.jsx
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo atom', () => {
  test('renderiza el logo con alt por defecto', () => {
    render(<Logo />);
    const img = screen.getByTestId('main-logo');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Logo');
  });

  test('cambia el texto alt por props', () => {
    render(<Logo alt="Mi Logo Dulce" />);
    expect(screen.getByAltText('Mi Logo Dulce')).toBeInTheDocument();
  });

  test('permite cambiar el tamaño', () => {
    render(<Logo size={100} />);
    const img = screen.getByTestId('main-logo');
    expect(img).toHaveAttribute('width', '100');
    expect(img).toHaveAttribute('height', '100');
  });
});
