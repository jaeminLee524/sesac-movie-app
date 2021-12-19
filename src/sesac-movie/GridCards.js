import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const MovieCardImg = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

function GridCards({ posterPath, id, originalTitle, movie }) {
    // modal Flag
    const [open, setOpen] = useState(false);

    // modal control function
    const modalClose = () => {
        setOpen(!open);
    };

    return (
        <div>
            {/* a태그에서 div태그로 변경 새로고침 발생으로 modal창이 꺼짐 */}
            <div
                className="id"
                // href={`/movie/${id}`}
                // href="/"
                onClick={() => modalClose()}
                style={{ cursor: 'pointer' }}
            >
                {open && <Modal modalClose={modalClose} movie={movie} />}

                <img
                    className="image"
                    style={{
                        width: '90%',
                        height: '320px',
                    }}
                    src={posterPath}
                    alt={originalTitle}
                />
            </div>
        </div>
    );
}
export default GridCards;
