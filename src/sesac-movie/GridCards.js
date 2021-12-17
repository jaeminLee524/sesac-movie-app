import React from 'react';
import styled from 'styled-components';

const MovieCardImg = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

function GridCards({ posterpath, id, originaltitle }) {
    return (
        <div>
            <a className="id" href={`/movie/${id}`}>
                <img
                    className="image"
                    style={{
                        width: '90%',
                        height: '320px',
                    }}
                    src={posterpath}
                    alt={originaltitle}
                />
            </a>
        </div>
    );
}
export default GridCards;
