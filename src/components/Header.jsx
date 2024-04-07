import React from 'react';
import { useCharacters } from '../context/CharacterContext';
import { FaHeart } from 'react-icons/fa'; // Importa el icono de corazón
import './styles/header.scss';
import marvelLogo from '../img/marvel-logo.jpg'; // Importa la imagen del logo de Marvel

const Header = ({ handleFavoritesClick }) => {
  const { favorites } = useCharacters();

  return (
    <div className="header">
      <div className="header-left">
        <img src={marvelLogo} alt="Marvel Logo" className="logo" />
      </div>
      <div className="header-right">
        <button className="favorites-button" onClick={handleFavoritesClick}>
          <FaHeart className="heart-icon" />
        </button>
        <span className='num-favorites'>{favorites.length}</span>
      </div>
    </div>
  );
};

export default Header;
