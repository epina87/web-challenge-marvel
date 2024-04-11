import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Importa MemoryRouter
import { CharacterContext } from '../context/CharacterContext';
import Header from './Header';

const mockContextValue = {
  favorites: [],
  setFavorites: jest.fn(),
};

const renderComponent = (props) => {
  return render(
    <MemoryRouter> {/* Envuelve tu componente en un MemoryRouter */}
      <CharacterContext.Provider value={mockContextValue}>
        <Header {...props} />
      </CharacterContext.Provider>
    </MemoryRouter>
  );
};

describe('Header component', () => {
  it('renders', () => {
    renderComponent();
    expect(screen.getByTestId('test-id')).toBeInTheDocument(); // Usa screen.getByTestId correctamente
  });
});
