import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import './styles/searchBar.scss'; 

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(''); 

  const handleInputChange = (event) => {
    const value = event.target.value; 
    setQuery(value); 
    onSearch(value); 
  };

  return (
    <div className="search-bar" data-testid="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="SEARCH A CHARACTER ..."
        value={query}
        onChange={handleInputChange}
        data-testid="search-bar-input" 
      />
      <div className="underline"></div>
    </div>
  );
};

export default SearchBar;
