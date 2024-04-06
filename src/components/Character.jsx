// En src/components/Character.jsx
import React from 'react';

const Character = ({ character }) => { // Asegúrate de pasar el personaje correctamente como prop
  return (
    <div className="character-card">
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <h2>{character.name}</h2>
    </div>
  );
};

export default Character;
