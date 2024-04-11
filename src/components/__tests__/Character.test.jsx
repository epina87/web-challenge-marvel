import React from 'react';
import { render } from '@testing-library/react';
import Character from '../Character';
import { CharacterContext } from '../../context/CharacterContext';

test('renders Character component', () => {
  // Proporciona un contexto válido con valores ficticios para favorites y setFavorites
  const mockContextValue = {
    favorites: [{ id: 1, name: 'Spiderman', thumbnail: 
    {path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784', extension: 'jpg'}}],
    setFavorites: jest.fn(),
  };

  render(
    <CharacterContext.Provider value={mockContextValue}>
      <Character />
    </CharacterContext.Provider>
  );
});

