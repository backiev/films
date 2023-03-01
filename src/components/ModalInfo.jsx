import React from 'react'

export const Modalinfo = ({active, setActive}) => {

    const closeModal = () => {
        setActive({
            visible: false,
            movieInfo: {}
        });
    }
    const movie = active.movieInfo;

    return (
        <div className={active.visible ? "modal active" : "modal"} onClick={closeModal}>
            <div className={active.visible ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="modal__info-title">{movie.name}</div>
                <div className='modal__info-main'>
                    <div><span className='modal__info-main-title'>Altrernative Name:</span> {movie.alternativeName}</div>
                    <div><span className='modal__info-main-title'>Year:</span> {movie.year}</div>
                    <div><span className='modal__info-main-title'>Rating:</span> {movie.rating ? movie.rating.kp : ''}/10</div>
                    <div><span className='modal__info-main-title'>Votes:</span> {movie.votes.kp ? movie.votes.kp : ' '}</div>
                    <div><span className='modal__info-main-title'>Description:</span> {movie.description}</div>
                </div>
            </div>
        </div>
    )
}