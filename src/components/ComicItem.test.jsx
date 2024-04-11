// ComicItem.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ComicItem from './ComicItem';
// Importamos la función específica que queremos mockear
import * as apiClient from '../api/client';

// Preparamos el mock de la función getComic
const mockedGetComic = jest.spyOn(apiClient, 'getComic');


describe('ComicItem', () => {
    beforeEach(() => {
      // Configura el mock para devolver datos de prueba
      mockedGetComic.mockResolvedValue({
        results: [{
          thumbnail: { path: 'http://example.com/image', extension: 'jpg' },
          title: 'Example Comic Title',
          dates: [{ date: '2024-01-01T00:00:00-0500' }],
        }],
      });
    });
  
    afterEach(() => {
      // Limpia el mock después de cada test
      mockedGetComic.mockClear();
    });
  
    it('renders comic details successfully', async () => {
      render(<ComicItem url="some-comic-url" />);
      
      // Esperamos a que el texto del título esté en el documento
      const comicTitle = await screen.findByText('Example Comic Title');
      expect(comicTitle).toBeInTheDocument();
  
      // Verificamos si la descripción del año está presente
      const comicYear = await screen.findByText('2024');
      expect(comicYear).toBeInTheDocument();
  
      // Puedes añadir más expectativas aquí según necesites verificar otros elementos
    });
  });
  