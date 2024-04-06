// En src/context/CharacterContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCall } from '../api/client';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

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
  
  console.log('Characters in Context:', characters); // Verificar si los datos se están almacenando en el estado del contexto
  
  

  return <CharacterContext.Provider value={{ characters }}>{children}</CharacterContext.Provider>;
};

export const useCharacters = () => useContext(CharacterContext);
