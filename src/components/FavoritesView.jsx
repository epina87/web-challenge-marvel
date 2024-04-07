import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CharacterList from './CharacterList';
import './styles/favoritesview.scss'; // Agrega los estilos específicos de FavoritesList

const FavoritesView = () => {
  const [searchTerm, setSearchTerm] = useState('');
 
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="favorites-view">
      <h2 className="favorites-title">FAVORITES</h2>
      <SearchBar onSearch={handleSearch} />
      <CharacterList searchTerm={searchTerm} showAll='false' />
    </div>
  );
};

export default FavoritesView;
