import { createGlobalStyle } from 'styled-components';
import MainPage from './sesac-movie/MainPage';
import { Router, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    body {
        background: #141414;
    }
`;

// 새로고침 시 맨 위로
// 페이지가 다시 로드되기 전 스크롤 위치가 맨 위
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

function App() {
    return (
        <>
            {/* <Router> */}
            {/* <Route path="/" component={MainPage} exact /> */}
            <MainPage />
            <GlobalStyle />
            {/* </Router> */}
        </>
    );
}

export default App;
