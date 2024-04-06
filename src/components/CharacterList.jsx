// En src/components/CharacterList.jsx
import React from 'react';
import { useCharacters } from '../context/CharacterContext';
import Character from './Character'; // Asegúrate de que la ruta de importación es correcta

const CharacterList = () => {
  const { characters } = useCharacters();
  console.log('Characters in CharacterList:', characters); // Verificar si se están recibiendo los datos del contexto

  return (
    <div className="character-list">
      {characters.map((character) => (
        <Character
          key={character.id}
          character={character}
        />
      ))}
    </div>
  );
};

export default CharacterList;
