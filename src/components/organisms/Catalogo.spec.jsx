// src/components/organisms/Catalogo.spec.jsx
import { render, screen } from '@testing-library/react';
import Catalogo from './Catalogo';

describe('Catalogo component', () => {
  beforeEach(() => {
    render(<Catalogo />);
  });

  test('muestra el título principal del catálogo', () => {
    expect(screen.getByText('Nuestro delicioso catálogo')).toBeInTheDocument();
  });

  test('muestra la descripción del catálogo', () => {
    expect(screen.getByText(/Descubre más de 50 sabores únicos/i)).toBeInTheDocument();
  });

  test('muestra los botones de filtro con texto esperado', () => {
    expect(screen.getByRole('tab', { name: 'Todos los productos' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tortas Cuadradas' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Vegana' })).toBeInTheDocument();
  });

  test('muestra productos destacados con nombre y precio', () => {
    expect(screen.getByText('Torta Cuadrada de Chocolate')).toBeInTheDocument();
    expect(screen.getByText('$45.000 CLP')).toBeInTheDocument();
    expect(screen.getByText('Brownie Sin Gluten')).toBeInTheDocument();
    expect(screen.getByText('$4.000 CLP')).toBeInTheDocument();
  });

  test('muestra botón para ver catálogo completo', () => {
    expect(screen.getByRole('link', { name: 'Ver catálogo completo' })).toHaveAttribute('href', 'pages/catalogo.html');
  });
});
