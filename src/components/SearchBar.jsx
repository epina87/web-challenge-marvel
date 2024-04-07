import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importamos el icono de la lupa desde react-icons
import './styles/searchBar.scss'; // Importamos los estilos del componente

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // Estado para almacenar la consulta de búsqueda

  const handleInputChange = (event) => {
    const value = event.target.value; // Obtenemos el valor del campo de entrada
    setQuery(value); // Actualizamos el estado de la consulta de búsqueda
    onSearch(value); // Llamamos a la función de búsqueda con la consulta actual
  };

  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="SEARCH A CHARACTER ..."
        value={query} // Asignamos el valor del estado como valor del campo de entrada
        onChange={handleInputChange} // Asignamos el manejador de cambios al campo de entrada
      />
      <div className="underline"></div>
    </div>
  );
};

export default SearchBar;
