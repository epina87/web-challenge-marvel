// En tu componente de vista principal (MainView.jsx o similar)
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CharacterList from './CharacterList';
import './styles/mainView.scss';

const MainView = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="main-view">
      <SearchBar onSearch={handleSearch} />
      <CharacterList searchTerm={searchTerm} />
    </div>
  );
};

export default MainView;
