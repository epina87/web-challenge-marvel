import React, { useEffect, useState } from 'react';
import { getComic } from '../api/client';
import './styles/comicItem.scss';

const ComicItem = ({ url }) => {
  const [comicDetails, setComicDetails] = useState(null);

  useEffect(() => {
    const fetchComicDetails = async () => {
      try {
        const comicData = await getComic("comics",url);
        setComicDetails(comicData);
      } catch (error) {
        console.error('Error fetching comic details:', error);
      }
    };

    if (url) {
      fetchComicDetails();
    }
  }, [url]);

  return (
    <div className="comic-item">
        
      {comicDetails ? (
        <div className='comic-card'>
            <img
              src={`${comicDetails.results[0].thumbnail.path}.${comicDetails.results[0].thumbnail.extension}`}
              alt={comicDetails.results[0].title}
              className="comic-image"
            />
          <h4 className="comic-title">{comicDetails.results[0].title}</h4>
          <p className="comic-description">{comicDetails.results[0].dates[0].date.slice(0, 4)}</p>
          
        </div>
      ) : (
        <p>Loading comic details...</p>
      )}
    </div>
  );
};

export default ComicItem;
