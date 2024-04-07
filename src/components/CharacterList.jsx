import React from 'react';
import { useCharacters } from '../context/CharacterContext';
import Character from './Character';
import './styles/characterList.scss';

const CharacterList = ({ searchTerm, showAll }) => {
  const { characters, favorites } = useCharacters() || [];

  let filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (showAll==='false') {
    console.log('showAll', showAll);
    filteredCharacters = filteredCharacters.filter((character) =>
      favorites.some((fav) => fav.id === character.id)
    );
  }

  const numResults = filteredCharacters.length;

  return (
    <div className="character-list-body">
      <p className="num-result">
        {numResults} result{numResults !== 1 ? 's' : ''}
      </p>
      <div className="character-list">
        {filteredCharacters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
