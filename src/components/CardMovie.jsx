import React from 'react'

export const CardMovie = ({movie}) => {

  const urlPoster = movie.poster ? movie.poster.url : '/img/woman.jpg';
  //alternativeName
  const nameMovie = movie.name ? movie.name : movie.alternativeName;

  return (
    <div className="movies-card">
        <div className='movies-card__image' style={{backgroundImage: `url(${urlPoster})`}}></div>
        <div className='movies-card__name'>{nameMovie}</div>
    </div>
  )
}
