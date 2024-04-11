import React from 'react';
import { FaHeart } from 'react-icons/fa'; 
import { NavLink } from 'react-router-dom'; 
import { useCharacters } from '../context/CharacterContext';
import './styles/header.scss';
import marvelLogo from '../img/marvel-logo.jpg'; 

const Header = () => {
  const { favorites } = useCharacters();

  const numFavorites = favorites ? favorites.length : 0;


  console.log('Favorites: ', favorites);
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
