import React from 'react';
import { render } from '@testing-library/react';
import { CharacterContext } from '../../context/CharacterContext';
import Header from '../Header';

test('renders Header component', () => {
  // Proporciona un contexto válido con valores ficticios para favorites y setFavorites
  const mockContextValue = {
    favorites: [],
    setFavorites: jest.fn(),
  };

  // Envuelve el componente Header con el contexto proporcionado
  const { container } = render(
    <CharacterContext.Provider value={mockContextValue}>
      <Header />
    </CharacterContext.Provider>
  );

  // Verifica que el componente Header se haya renderizado correctamente
  expect(container).toBeInTheDocument();
});
