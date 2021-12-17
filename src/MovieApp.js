// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import MovieBody from './MovieBody';
// import { API_URL, API_KEY, IMAGE_URL } from './api.js';

// const Text = styled.p`
//     text-align: center;
//     font-weight: bold;
//     width: 230px;
//     color: rgb(200, 200, 200);
// `;

// const ImgText = styled.div`
//     margin: 5px 20px !important ;
// `;

// function MovieApp() {
//     const [loading, setLoading] = useState(true);
//     const [movies, setMovies] = useState([]);
//     // const [mainMovieImage, setMainMovieImage] = useState(null);
//     const [error, setError] = useState(null);

//     const getMovies = async () => {
//         // 에러 check
//         try {
//             setMovies(null);
//             setError(null);
//             setLoading(true);
//             const response = await axios.get(
//                 // 최초 인기있는 순서로 apiCall
//                 `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
//             );
//             setMovies(response.results);
//             console.log(response.results);
//             setMainMovieImage(response.results[0]);

//             // const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

//             // fetch(endpoint)
//             //     .then(response => response.json())
//             //     .then(response => {
//             //         console.log(response.results);
//             //         setMovies([response.results]);
//             //         setLoading(false);
//             //     });
//         } catch (e) {
//             setError(e);
//         }
//     };
//     // 받아온 값을 출력
//     console.log(movies);

//     //depts가 공백 => react가 관리 안함 : 최초 로딩때만
//     useEffect(() => {
//         getMovies();
//     }, []);

//     return (
//         <MovieBody>
//             {loading ? (
//                 <h1>Loading...</h1>
//             ) : (
//                 console.log('test')
//                 movies.map(movie => (
//                     <ImgText key={movie.id}>
//                         <img src={movie.backdrop_path} alt="img" />
//                         <Text>{movie.original_title}</Text>
//                         {/* <p>{movie.summary}</p> */}
//                         {/* <ul>
//                             {movie.genres.map(g => (
//                                 <li key={g}>{g}</li>
//                             ))}
//                         </ul> */}
//                     </ImgText>
//                 ))
//             )}
//         </MovieBody>
//     );
// }

// export default MovieApp;
