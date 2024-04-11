import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import CharacterList from './CharacterList';


const mockCharacters = [
  {
    id: 1,
    name: 'Spider-Man',
    thumbnail: {
      path: 'http://example.com/spiderman',
      extension: 'jpg',
    },
  },
  {
    id: 2,
    name: 'Iron Man',
    thumbnail: {
      path: 'http://example.com/ironman',
      extension: 'jpg',
    },
  },
  {
    id: 3,
    name: 'Captain America',
    thumbnail: {
      path: 'http://example.com/captainamerica',
      extension: 'jpg',
    },
  },
];

const mockContext = {
  characters: mockCharacters,
  favorites: [],
};

describe('CharacterList', () => {
  it('displays the correct number of search results', async () => {
    render(
      <MemoryRouter>
        <CharacterContext.Provider value={mockContext}>
          <CharacterList searchTerm="" showAll="true" />
        </CharacterContext.Provider>
      </MemoryRouter>
    );

    // Verifica que se muestre el número correcto de personajes
    // Esto depende del texto exacto que muestres, ajusta según sea necesario
    expect(await screen.findByText('3 results')).toBeInTheDocument();
  });

  // Puedes añadir más pruebas aquí según sea necesario
});
