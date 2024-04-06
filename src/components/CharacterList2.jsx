// En src/components/Character.js
import React, { useEffect, useState } from 'react';
import { getCall } from '../api/client';

const CharacterList2 = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCall('characters');
        setCharacters(data.results); // Ajusta según la estructura de datos de Marvel API
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Marvel Characters</h2>
      {characters.map(character => (
        <div key={character.id}>
          {character.name}
        </div>
      ))}
    </div>
  );
};

export default CharacterList2;
