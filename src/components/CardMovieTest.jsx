import React from 'react'

export const CardMovieTest = () => {

  const urlPoster = '/img/woman.jpg';
  //alternativeName
  const nameMovie = 'woman';

  return (
    <div className="movies-card">
        <div className='movies-card__image' style={{backgroundImage: `url(${urlPoster})`}}></div>
        <div className='movies-card__name'>{nameMovie}</div>
    </div>
  )
}
