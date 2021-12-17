import styled from 'styled-components';

const MovieTemplateBlock = styled.div`
    display: flex;
    justify-content: center;
    * {
        /* 메인 Image */
        width: 100%;
        /* 메인 Image */
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

function MovieTemplate({ children }) {
    return <MovieTemplateBlock>{children}</MovieTemplateBlock>;
}

export default MovieTemplate;
