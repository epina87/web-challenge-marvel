import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import './styles/characterDetail.scss';
import { FaHeart } from 'react-icons/fa';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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


  
  const sliderSettings = {
    dots: false, // Oculta los botones de navegación
    arrows: true, // Oculta las flechas de navegación
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false, // Desactiva la navegación vertical
    className: "slider-container",
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
            <h3>Comics</h3>
            <div className="detail-character-comics">
              {console.log(character.comics.items)}
              <Slider {...sliderSettings} >
                {character.comics.items.map((comic, index) => (
                  <ComicItem
                    key={index}
                    url={comic.resourceURI}
                  />
                ))}
              </Slider>
            </div>


            
          </div>
        </div>
      
    </div>
  

  
    
  );
};

export default CharacterDetail;

