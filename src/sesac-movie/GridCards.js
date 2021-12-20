import React, { useState } from 'react';
import Modal from './Modal';

function GridCards({ posterPath, movie, modalPosterPath }) {
    //modal on/off
    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => {
        setOpenModal(!openModal);
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
                        handleModal={handleModal}
                    />
                )}
            </div>
        </div>
    );
}
export default GridCards;
