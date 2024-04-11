import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterContext } from '../context/CharacterContext';
import Header from './Header';

const mockContextValue = {
  favorites: [],
  setFavorites: jest.fn(),
};

const renderComponent = (props) => {
  return render(
    <CharacterContext.Provider value={mockContextValue}>
      <Header {...props} />
    </CharacterContext.Provider>
  );
};

describe('Header component', () => {
  it('renders', () => {
    renderComponent()
  })
});



