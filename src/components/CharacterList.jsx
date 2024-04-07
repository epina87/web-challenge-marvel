// En tu componente CharacterList.jsx
import React from 'react';
import { useCharacters } from '../context/CharacterContext';
import Character from './Character';
import './styles/characterList.scss';

const CharacterList = ({ searchTerm }) => { 
  const { characters } = useCharacters() || []; // Manejo de la posible ausencia de personajes
  
  // Filtrar personajes según el término de búsqueda
  const filteredCharacters = characters.filter(character => 
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const numResults = filteredCharacters.length; // Obtener el número de resultados

  return (
    <div className="character-list-body">
        <p className='num-result'>
            {numResults} result{numResults !== 1 ? 's' : ''} 
        </p>
        <div className="character-list">

        {filteredCharacters.map((character) => (
            <Character
            key={character.id}
            character={character}
            />
        ))}
        </div>
    </div>
  );
};

export default CharacterList;
