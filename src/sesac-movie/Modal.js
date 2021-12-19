import React from 'react';
import styled from 'styled-components';
import { IMAGE_URL } from './api';

const ModalContainerBlock = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
`;

const ModalBlock = styled.div`
    width: 500px;
    height: 500px;
    background-color: #fff;
    // Modal 창 가운데 위치
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100%;
`;

const ModalButton = styled.button`
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

function Modal({ modalClose, movie }) {
    const imgSrc = `${IMAGE_URL}w200${movie.poster_path}`;
    console.log(imgSrc);
    const onCloseModal = e => {
        console.log(`e.target: ${e.target}`);
        console.log(`e.currentTarget: ${e.currentTarget}`);
        if (e.target === e.currentTarget) {
            modalClose();
        }
    };

    return (
        <ModalContainerBlock onClick={onCloseModal}>
            <ModalBlock>
                <div>
                    <img src={imgSrc} alt={movie.original_title} />
                </div>
                <span>제목: {movie.original_title}</span>
                {/* <p>줄거리: {movie.overview}</p> */}
                <p>개봉일: {movie.release_date}</p>
                <p>평점: {movie.vote_average}</p>
                {/* <ModalButton onClick={modalClose}>ModalClose</ModalButton> */}
            </ModalBlock>
        </ModalContainerBlock>
    );
}

export default Modal;
