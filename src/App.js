import { createGlobalStyle } from 'styled-components';
import MainPage from './sesac-movie/MainPage';
import { Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    body {
        background: #141414;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <MainPage />

            {/* <Route exaact path="" component={} /> */}
        </>
    );
}

export default App;
