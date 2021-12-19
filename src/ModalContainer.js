import React, { useState } from 'react';
import Modal from './sesac-movie/Modal';
import styled from 'styled-components';

const ModalContainerBlock = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
`;

function ModalContainer() {
    // open flag
    const [open, setOpen] = useState(false);
    // falg setting
    const modalClose = () => {
        setOpen(!open);
    };

    return (
        <>
            <button onClick={modalClose}>click</button>
            {open && <Modal modalClose={modalClose} open={open} />}
            {console.log(open)}
        </>
    );
}

export default ModalContainer;
