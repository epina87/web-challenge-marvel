import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { CharacterContext } from '../context/CharacterContext';
import './styles/character.scss';

const Character = ({ character }) => {
  const { favorites, setFavorites } = useContext(CharacterContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (character) {
     
      const index = favorites.findIndex((fav) => fav.id === character.id);
      setIsFavorite(index !== -1);
    }
  }, [favorites, character]);

  const handleFavoriteClick = () => {
    if (character) {
     
      const index = favorites.findIndex((fav) => fav.id === character.id);
      if (index === -1) {
       
        setFavorites([...favorites, character]);
      } else {
        
        const updatedFavorites = favorites.filter((fav) => fav.id !== character.id);
        setFavorites(updatedFavorites);
      }
    }
  };

  if (!character || !character.id) {
    return null; 
  }

  return (
    <div className="character-card">
      <Link className='character-detail-link' to={`/detail/${character.id}`}>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className="character-image"
        />
        </Link>
        <div className="character-details">
          <div className="character-line"></div>
          <div className="character-info">
            <Link className='character-detail-link' to={`/detail/${character.id}`}>
              <p>{character.name}</p>
            </Link>
            <span className={isFavorite ? 'heart-icon favorite' : 'heart-icon'} onClick={handleFavoriteClick}>
              <FaHeart />
            </span>
          </div>
        </div>
      
    </div>
  );
};

export default Character;
