import React from 'react';
import { render, screen } from '@testing-library/react';
import Character from '../Character'; // Asegúrate de tener la ruta correcta

describe('Character component', () => {
  test('renders character name', () => {
    const character = { id: 1, name: 'Iron Man', thumbnail: { path: 'path', extension: 'jpg' } };
    render(<Character character={character} />);
    expect(screen.getByText('Iron Man')).toBeInTheDocument();
  });
});
