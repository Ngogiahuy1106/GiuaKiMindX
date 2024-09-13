import React from 'react';
import './FilmCard.css';

function FilmCard({ image, movieName, episode }) {
  return (
    <div className="filmCard">
      {image && <img src={image} alt={movieName}/>}
      <div className="filmCardEpisode">Episode: {episode}</div>
      <div className="filmCardTitle">{movieName}</div>
    </div>
  );
}

export default FilmCard;