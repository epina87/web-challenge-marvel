import React from 'react';
import SearchBar from './SearchBar';
import CharacterList from './CharacterList';
import './styles/favoritesList.scss'; // Agrega los estilos específicos de FavoritesList

const FavoritesList = () => {
  return (
    <div className="favorites-list">
      <h2 className="favorites-title">Favorites</h2>
      <SearchBar />
      <CharacterList />
    </div>
  );
};

export default FavoritesList;
