import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import './styles/characterDetail.scss';
import { FaHeart } from 'react-icons/fa';



import ComicItem from './ComicItem';


const CharacterDetail = () => {
  const { id } = useParams();
  const { characters, favorites, setFavorites } = useContext(CharacterContext);
  const [character, setCharacter] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const foundCharacter = characters.find(char => char.id === parseInt(id));
    setCharacter(foundCharacter);

    if (foundCharacter) {
      const isCharacterFavorite = favorites.some(fav => fav.id === foundCharacter.id);
      setIsFavorite(isCharacterFavorite);
    }
  }, [characters, favorites, id]);

  const handleFavoriteClick = () => {
    if (character) {

      const index = favorites.findIndex((fav) => fav.id === character.id);
      if (index === -1) {

        setFavorites([...favorites, character]);
        setIsFavorite(true);
      } else {

        const updatedFavorites = favorites.filter((fav) => fav.id !== character.id);
        setFavorites(updatedFavorites);
        setIsFavorite(false);
      }
    }
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="detail-character-card">
        <div className="detail-character-details">
          <div className='character-img' >
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              className="detail-character-image"
            />
          </div>
          <div className="detail-character-description">
            <div className="detail-character-info">
              <p className='detail-name-character'>{character.name}</p>
              <span className={isFavorite ? 'heart-icon favorite' : 'heart-icon'} onClick={handleFavoriteClick}>
                <FaHeart />
              </span>
            </div>
            <div className='detail-description'>
              <p>{character.description}</p>
            </div>
          </div>
        </div>

      </div>
   

      <div className="detail-character-comics">
          <div className='character-comics' >
            <h2 className='title-page'>Comics</h2>
            <div className='comics-seccion-detail'>             
              <div className="slider">
                  {character.comics.items.map((comic) => (
                    <div key={comic.resourceURI} className="slide"> {/* Mueve la key aquí y usa un identificador único si es posible */}
                      <ComicItem
                        url={comic.resourceURI}
                      />
                    </div>
                  ))}
              </div>

            </div>      
          </div>
      </div>
     
    </div>
  

  
    
  );
};

export default CharacterDetail;

