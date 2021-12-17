import axios from 'axios';

// 네이버 api 시작
const ID_KEY = 'ARwfOtY3uKvBUxPsvcKR';
const SECRET_KEY = 'uDL9FwGwGe';

const api = axios.create({
    baseURL: '/api',
    headers: {
        'X-Naver-Client-Id': ID_KEY,
        'X-Naver-Client-Secret': SECRET_KEY,
        'Access-Control-Allow-Origin': '*',
    },
});

export const naverMoviesApi = {
    search: word =>
        api.get('/v1/search/movie.json', {
            params: {
                query: word,
                display: 20,
            },
        }),
};

// 네이버 api 끝

//TMDB api 시작
export const API_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = '220f52c925904ce3c05f54d1eab95941';
export const IMAGE_URL = 'http://image.tmdb.org/t/p/';
//TMDB api 끝
