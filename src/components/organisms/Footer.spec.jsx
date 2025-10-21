// src/components/organisms/Footer.spec.jsx
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('muestra el título principal de la empresa', () => {
    expect(screen.getByText('Pastelería 1000 Sabores')).toBeInTheDocument();
  });

  test('muestra el texto descriptivo de la empresa', () => {
    expect(screen.getByText('50 años endulzando Chile con tradición y calidad.')).toBeInTheDocument();
  });

  test('muestra los títulos de secciones', () => {
    expect(screen.getByText('Contacto')).toBeInTheDocument();
    expect(screen.getByText('Horarios')).toBeInTheDocument();
    expect(screen.getByText('Enlaces')).toBeInTheDocument();
  });

  test('muestra enlaces rápidos con href correctos', () => {
    expect(screen.getByText('Inicio').closest('a')).toHaveAttribute('href', '#inicio');
    expect(screen.getByText('Promociones').closest('a')).toHaveAttribute('href', '#promociones');
    expect(screen.getByText('Catálogo').closest('a')).toHaveAttribute('href', '#catalogo');
    expect(screen.getByText('Nosotros').closest('a')).toHaveAttribute('href', '#nosotros');
    expect(screen.getByText('Registro').closest('a')).toHaveAttribute('href', '#registro');
  });

  test('muestra información de contacto', () => {
    expect(screen.getByText('Av. Dulce 123, Providencia')).toBeInTheDocument();
    expect(screen.getByText('+56 2 2345 6789')).toBeInTheDocument();
    expect(screen.getByText('info@1000sabores.cl')).toBeInTheDocument();
  });

  test('muestra horarios de atención', () => {
    expect(screen.getByText('Lun-Vie')).toBeInTheDocument();
    expect(screen.getByText('Sábados')).toBeInTheDocument();
    expect(screen.getByText('Domingos')).toBeInTheDocument();
    expect(screen.getByText('8:00-20:00')).toBeInTheDocument();
    expect(screen.getByText('9:00-18:00')).toBeInTheDocument();
    expect(screen.getByText('10:00-16:00')).toBeInTheDocument();
  });

  test('muestra texto de copyright', () => {
    expect(screen.getByText(/© 2024 Pastelería 1000 Sabores\. Todos los derechos reservados\./i)).toBeInTheDocument();
  });
});
