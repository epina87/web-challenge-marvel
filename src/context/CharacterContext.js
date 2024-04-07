// En src/context/CharacterContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCall } from '../api/client';

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCall('characters');
        console.log('Data from API:', data); // Verificar los datos obtenidos de la API
        setCharacters(data.results); // Ajusta según la estructura de datos de Marvel API
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
  
    fetchCharacters();
  }, []);

  return (
    <CharacterContext.Provider value={{ characters, favorites, setFavorites }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => useContext(CharacterContext);
