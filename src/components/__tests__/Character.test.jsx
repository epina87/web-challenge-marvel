import React from 'react';
import { render } from '@testing-library/react';
import Character from '../Character';
import { CharacterContext } from '../../context/CharacterContext';

test('renders Character component', () => {
  // Proporciona un contexto válido con valores ficticios para favorites y setFavorites
  const mockContextValue = {
    favorites: [],
    setFavorites: jest.fn(),
  };

  render(
    <CharacterContext.Provider value={mockContextValue}>
      <Character />
    </CharacterContext.Provider>
  );
});

