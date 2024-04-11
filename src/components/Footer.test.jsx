import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer'; // Asegúrate de que la ruta al componente Footer sea correcta

describe('Footer component', () => {
  it('renders correctly', () => {
    // Envuelve el componente Footer en MemoryRouter para las pruebas
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // Verifica que el Footer esté presente usando el data-testid
    expect(screen.getByTestId('test-id')).toBeInTheDocument();

    // Verifica que el logo de Marvel esté presente
    expect(screen.getByAltText('Marvel Logo')).toBeInTheDocument();

    // Verifica que el enlace lleve a la ruta correcta '/'
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
