// src/components/atoms/SecondaryText.spec.jsx
import { render, screen } from '@testing-library/react';
import SecondaryText from './SecondaryText';

describe('SecondaryText atom', () => {
  test('renderiza el texto secundario', () => {
    render(<SecondaryText>Texto ayuda</SecondaryText>);
    expect(screen.getByText('Texto ayuda')).toBeInTheDocument();
  });

  test('aplica color recibido por props', () => {
    render(<SecondaryText color="red">Rojo</SecondaryText>);
    const span = screen.getByTestId('secondary-text');
    expect(span).toHaveStyle('color: rgb(255, 0, 0)');
  });

  test('aplica el tamaño de fuente', () => {
    render(<SecondaryText size={24}>Grande</SecondaryText>);
    const span = screen.getByTestId('secondary-text');
    expect(span).toHaveStyle('font-size: 24px');
  });
});
