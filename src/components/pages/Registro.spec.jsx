import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Registro from './Registro';

describe('Registro component', () => {
  beforeEach(() => {
    render(<Registro />);
  });

  test('renderiza todos los campos y labels principales', () => {
    // Ahora getByLabelText funcionará correctamente
    expect(screen.getByLabelText('Nombre completo')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirmar contraseña')).toBeInTheDocument();
  });

  test('campos requeridos muestran error si están vacíos en submit', () => {
    const submit = screen.getByRole('button', { name: /registrarse/i });
    
    // Ahora puedes buscar el formulario por role
    const form = screen.getByRole('form', { name: /formulario de registro/i });
    fireEvent.submit(form);
    
    // Agrega aquí tus verificaciones de validación
  });

  test('validar que email sea correcto y contraseña coincida', () => {
    // Ahora getByLabelText funciona correctamente
    fireEvent.change(screen.getByLabelText('Email'), { 
      target: { value: 'no-email' } 
    });
    fireEvent.change(screen.getByLabelText('Contraseña'), { 
      target: { value: '123' } 
    });
    fireEvent.change(screen.getByLabelText('Confirmar contraseña'), { 
      target: { value: '1234' } 
    });
    
    const submit = screen.getByRole('button', { name: /registrarse/i });
    fireEvent.click(submit);
    
    // Agrega verificaciones de validación aquí
  });
});