import { render, screen } from '@testing-library/react';
import Catalogo from './Catalogo';


describe('Catalogo component', () => {
  test('renderiza el título principal', () => {
    render(<Catalogo />);
    const heading = screen.getByRole('heading', { name: /nuestro delicioso catálogo/i });
    expect(heading).toBeInTheDocument();
  });


  test('renderiza todos los filtros de productos', () => {
    render(<Catalogo />);
    const filtros = [
      /todos los productos/i,
      /tortas cuadradas/i,
      /tortas circulares/i,
      /postres individuales/i,
      /sin azúcar/i,
      /sin gluten/i,
      /vegana/i
    ];


    filtros.forEach(filtro => {
      expect(screen.getByRole('tab', { name: filtro })).toBeInTheDocument();
    });
  });


  test('renderiza todos los productos en la grilla', () => {
    render(<Catalogo />);
    const productos = [
      /torta cuadrada de chocolate/i,
      /torta circular de vainilla/i,
      /mousse de chocolate/i,
      /torta sin azúcar de naranja/i,
      /brownie sin gluten/i,
      /torta vegana de chocolate/i
    ];


    productos.forEach(nombre => {
      expect(screen.getByRole('heading', { name: nombre })).toBeInTheDocument();
    });
  });


  test('cada producto tiene botón para añadir al carrito', () => {
    render(<Catalogo />);
    const botones = screen.getAllByRole('button', { name: /añadir al carrito/i });
    expect(botones.length).toBe(6); // hay 6 productos
  });


  test('renderiza el enlace para ver catálogo completo', () => {
    render(<Catalogo />);
    const link = screen.getByRole('link', { name: /ver catálogo completo/i });
    expect(link).toHaveAttribute('href', 'pages/catalogo.html');
  });
});
