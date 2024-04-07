import React, { useContext, useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa'; // Importa el icono de corazón
import { CharacterContext } from '../context/CharacterContext';
import './styles/character.scss';

const Character = ({ character }) => {
  const { favorites, setFavorites } = useContext(CharacterContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Verifica si el personaje está en la lista de favoritos
    const index = favorites.findIndex((fav) => fav.id === character.id);
    setIsFavorite(index !== -1);
  }, [favorites, character]);

  const handleFavoriteClick = () => {
    // Verifica si el personaje está en la lista de favoritos
    const index = favorites.findIndex((fav) => fav.id === character.id);
    if (index === -1) {
      // Si no está en la lista de favoritos, agrégalo
      setFavorites([...favorites, character]);
    } else {
      // Si ya está en la lista de favoritos, quítalo
      const updatedFavorites = favorites.filter((fav) => fav.id !== character.id);
      setFavorites(updatedFavorites);
    }
  };

  return (
    <div className="character-card">
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="character-image"
      />
      <div className="character-details">
        <div className="character-line"></div>
        <div className="character-info">
          <p>{character.name}</p>
          <span className={isFavorite ? 'heart-icon favorite' : 'heart-icon'} onClick={handleFavoriteClick}>
            <FaHeart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Character;
