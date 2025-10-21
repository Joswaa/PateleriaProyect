// src/components/organisms/Promociones.spec.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Promociones from './Promociones';

describe('Promociones component', () => {
  test('renderiza los títulos y botones principales', () => {
    render(<Promociones />);

    expect(screen.getByText('Promociones especiales de aniversario')).toBeInTheDocument();
    expect(screen.getByText('50% OFF para +50 años')).toBeInTheDocument();
    expect(screen.getByText('Descuento permanente')).toBeInTheDocument();
    expect(screen.getByText('Torta gratis - Estudiantes Duoc')).toBeInTheDocument();

    expect(screen.getAllByRole('button')).toHaveLength(3);
    expect(screen.getByText('Registrarse ahora')).toBeInTheDocument();
    expect(screen.getByText('Copiar código')).toBeInTheDocument();
    expect(screen.getByText('Registrarse con @duoc.cl')).toBeInTheDocument();
  });

  test('simula click en copiar código y muestra alerta', () => {
    window.alert = jest.fn();

    render(<Promociones />);
    
    const copyButton = screen.getByText('Copiar código');
    fireEvent.click(copyButton);

    expect(window.alert).toHaveBeenCalledWith('Código copiado: FELICES50');
  });
});
