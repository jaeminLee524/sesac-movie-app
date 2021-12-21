import React, { useState } from 'react';
import { API_KEY } from './api';
import Modal from './Modal';

function GridCards({ posterPath, movie, modalPosterPath }) {
    //modal on/off
    const [openModal, setOpenModal] = useState(false);
    const [actors, setActors] = useState([]);
    const handleModal = () => {
        if (!openModal) {
            getActors();
        }
        setOpenModal(!openModal);
    };

    const getActors = async () => {
        let actorsList = [];

        const request = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${API_KEY}`;

        actorsList = actorsList.concat(
            await fetch(request).then(response => response.json())
        );

        actorsList = actorsList[0].cast
            .filter(actor => actor.order < 3)
            .map(actor => actor.name);

        let actorsInfo = '';

        actorsList.forEach((actor, index) => {
            if (index !== actorsList.length - 1) {
                actorsInfo += actor + ', ';
            } else {
                actorsInfo += actor + ' ...';
            }
        });

        setActors(actorsInfo);
    };

    return (
        <div>
            {/* a tag -> div tag */}
            <div className="id" onClick={handleModal}>
                <img
                    className="image"
                    style={{
                        width: '90%',
                        height: '320px',
                    }}
                    src={posterPath}
                    alt={movie.original_title}
                />
                {openModal && (
                    <Modal
                        movie={movie}
                        modalPosterImg={modalPosterPath}
                        actors={actors}
                        handleModal={handleModal}
                    />
                )}
            </div>
        </div>
    );
}
export default GridCards;
