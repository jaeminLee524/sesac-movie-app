import React from 'react';
import styled, { css } from 'styled-components';

// const MainimageBlock = styled.div`
//     position: relative;
//     width: 100%;
//     height: 500px;
//     background-size: 100% cover;
//     background-position: center center;
//     ${props =>
//         props.image &&
//         css`
//             background: url(props.image) #1c1c1c;
//         `}
// `;

const ContentBlock = styled.div`
    position: absolute;
    max-width: 500px;
    bottom: 2rem;
    margin-left: 2rem;
`;

const Title = styled.h2`
    color: white;
`;

const Overview = styled.p`
    color: white;
    font-size: 1rem;
`;

function MainImage({ image, title, overview }) {
    return (
        <div
            style={{
                background: `linear-gradient(
                            to bottom,
                            rgba(0,0,0,0) 39%,
                            rgba(0,0,0,0) 41%,
                            rgba(0,0,0,0.65) 100%),
                            url('${image}'), #1c1c1c`,
                height: '500px',
                backgroundSize: '100%, cover',
                backgroundPosition: 'center, center',
                width: '100%',
                position: 'relative',
            }}
        >
            <div>
                <ContentBlock>
                    <Title>{title}</Title>
                    <Overview>{overview}</Overview>
                </ContentBlock>
            </div>
        </div>
    );
}

export default MainImage;
