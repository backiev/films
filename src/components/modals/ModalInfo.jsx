import React from 'react'

export const Modalinfo = ({activeInfo, setActiveInfo}) => {

    // console.log(activeInfo);

    const closeModal = () => {
        setActiveInfo({
            visible: false,
            movieInfo: {}
        });
    }
    const movie = activeInfo.movieInfo;
    // console.log(movie);

    return (
        <div className={activeInfo.visible ? "modal active" : "modal"} onClick={closeModal}>
            <div className={activeInfo.visible ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="modal__info-title">{movie.name}</div>
                <div className='modal__info-main'>
                    <div>
                        <span className='modal__info-main-title'>Altrernative Name:</span> {movie.alternativeName ? movie.alternativeName : 'Нет информации'}
                    </div>
                    <div>
                        <span className='modal__info-main-title'>Year:</span> {movie.year ? movie.year : 'Нет информации'}
                    </div>
                    <div>
                        <span className='modal__info-main-title'>Rating:</span> {movie.rating ? movie.rating.kp : 'Нет информации'}/10
                    </div>
                    <div>
                        <span className='modal__info-main-title'>Votes:</span> {movie.votes ? movie.votes.kp : 'Нет информации'}
                    </div>
                    <div>
                        <span className='modal__info-main-title'>Id Film:</span> {movie.id ? movie.id : 'Нет информации'}
                    </div>
                    <div>
                        <span className='modal__info-main-title'>Description:</span> {movie.description ? movie.description : 'Нет информации'}
                    </div>
                </div>
            </div>
        </div>
    )
}