// src/components/organisms/Registro.spec.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Registro from './Registro';

describe('Registro component', () => {
  beforeEach(() => {
    render(<Registro />);
  });

  test('renderiza todos los campos y labels principales', () => {
    expect(screen.getByLabelText('Nombre completo *')).toBeInTheDocument();
    expect(screen.getByLabelText('Correo electrónico *')).toBeInTheDocument();
    expect(screen.getByLabelText('Fecha de nacimiento *')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña *')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirmar contraseña *')).toBeInTheDocument();
    expect(screen.getByLabelText('Código promocional (opcional)')).toBeInTheDocument();
    expect(screen.getByLabelText(/acepto los términos y condiciones/i)).toBeInTheDocument();
  });

  test('campos requeridos muestran error si están vacíos en submit', () => {
    const submit = screen.getByRole('button', { name: /registrarse/i });
    fireEvent.click(submit);
    expect(screen.getByText(/por favor ingresa tu nombre completo/i)).toBeInTheDocument();
    expect(screen.getByText(/por favor ingresa un correo electrónico válido/i)).toBeInTheDocument();
    expect(screen.getByText(/por favor selecciona tu fecha de nacimiento/i)).toBeInTheDocument();
    expect(screen.getByText(/la contraseña debe tener al menos 6 caracteres/i)).toBeInTheDocument();
    expect(screen.getByText(/las contraseñas no coinciden/i)).toBeInTheDocument();
    expect(screen.getByText(/debes aceptar los términos y condiciones/i)).toBeInTheDocument();
  });

  test('validar que email sea correcto y contraseña coincida', () => {
    fireEvent.change(screen.getByLabelText('Correo electrónico *'), { target: { value: 'no-email' } });
    fireEvent.change(screen.getByLabelText('Contraseña *'), { target: { value: '123' } });
    fireEvent.change(screen.getByLabelText('Confirmar contraseña *'), { target: { value: '1234' } });
    const submit = screen.getByRole('button', { name: /registrarse/i });
    fireEvent.click(submit);

    expect(screen.getByText(/por favor ingresa un correo electrónico válido/i)).toBeInTheDocument();
    expect(screen.getByText(/la contraseña debe tener al menos 6 caracteres/i)).toBeInTheDocument();
    expect(screen.getByText(/las contraseñas no coinciden/i)).toBeInTheDocument();
  });
});
