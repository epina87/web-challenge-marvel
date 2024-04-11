import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Importamos el icono de corazón
import { NavLink } from 'react-router-dom'; // Importamos Link para la navegación
import { useCharacters } from '../context/CharacterContext';
import './styles/header.scss';
import marvelLogo from '../img/marvel-logo.jpg'; // Importa la imagen del logo de Marvel

const Header = () => {
  const { favorites } = useCharacters();

  const numFavorites = favorites ? favorites.length : 0;

  return (
    <div className="header" id="test-id">
      <div className="header-left">
        <NavLink to="/" className="favorites-link">
          <img src={marvelLogo} alt="Marvel Logo" className="logo" />
        </NavLink>
      </div>
      <div className="header-right">
        <NavLink to="/favorites" className="favorites-link">
          <FaHeart className="heart-icon" />
        </NavLink>
        <span className='num-favorites'>{numFavorites}</span>
      </div>
    </div>
  );
};

export default Header;
