// src/components/atoms/Button.spec.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button atom', () => {
  test('renderiza el texto recibido por props', () => {
    render(<Button>Haz clic aquí</Button>);
    expect(screen.getByText('Haz clic aquí')).toBeInTheDocument();
  });

  test('dispara el callback onClick', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Enviar</Button>);
    fireEvent.click(screen.getByText('Enviar'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('aplica la clase "disabled" si está desactivado', () => {
    render(<Button disabled>Desactivado</Button>);
    const boton = screen.getByText('Desactivado');
    expect(boton).toHaveAttribute('disabled');
  });
});
