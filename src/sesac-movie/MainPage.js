import React, { useCallback, useEffect, useState, useRef } from 'react';
import { API_URL, API_KEY, IMAGE_URL } from './api';
import MainImage from './MainImage';
import GridCards from './GridCards';
import styled from 'styled-components';
import Header from './Header';
import TopButton from './TopButton';
import axios from 'axios';

const MainPageBlock = styled.div`
    width: 100%;
    margin: 0px;
`;

const MovieCardBlock = styled.div`
    width: 90%;
    /* height: ; */
    margin: 1rem auto;
    .text {
        color: white;
    }
    box-sizing: border-box;
`;

const MovieCardBody = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    width: 90%;
    box-sizing: border-box;
    /* 이미지가 div영역 밖으로 나가는거 방지 */
    overflow: auto;
    /* overflow의 스크롤바 없애고 기능은 살림*/
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const ButtonBlock = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    width: 104px;
    height: 34px;
    background-color: rgba(0, 0, 0, 0.2);
    color: rgba(250, 250, 250, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    outline: none;
    &:hover {
        cursor: pointer;
    }
    &:active {
        box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
        position: relative;
        top: 2px;
    }
`;

function MainPage() {
    const [movies, setMovies] = useState([]);
    const [moviesCopy, setMoviesCopy] = useState(movies.concat());
    const [filterFlags, setFilterFlags] = useState(
        //home, popular, latest, genre
        [true, false, false, false]
    );
    // mainMovieImage : 0번째 인덱스의 배열
    const [mainMovieImage, setMainMovieImage] = useState(null);
    const [page, setPage] = useState(20);
    const [number, setNumber] = useState(0);
    const name = [
        '인기',
        '인기',
        '최신',
        '액션',
        '모험',
        '애니메이션',
        '코미디',
        '범죄',
        // 'Action',
        // 'Adventure',
        // 'Animation',
        // 'Comedy',
        // 'Crime',
    ];
    // ref를 넘겨줘 current로 접근하기 위해
    const containerRef = useRef();

    // 최초 브라우저 redering되었을 때 실행
    useEffect(() => {
        const response = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=`;
        callMovie(response);
        // getMovie(response);
    }, []);

    const callMovie = async response => {
        let movieList = [];
        for (let i = 1; i < 11; i++) {
            movieList = movieList.concat(
                await fetch(response + i)
                    .then(response => response.json())
                    .then(response => response.results)
            );
        }
        setMovies(movieList.concat());
        setMainMovieImage(movieList[0]);
    };

    // const getMovie = async response => {
    //     try {
    //         let movieList = [];
    //         for (let i = 1; i < 11; i++) {
    //             const res = await axios.get(response + i);
    //             console.log(res);
    //             await movieList.concat(res.data.results);
    //           }
    //           console.log(movieList);
    //         setMovies(movieList.concat());
    //         setMainMovieImage(movieList[0]);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    useEffect(() => {
        setMoviesCopy(movies.concat());
    }, [movies]);

    const onClick = () => {
        setPage(page + 20);
    };

    const filter = useCallback(
        id => {
            const nextMovies = movies.concat();
            setPage(20); // 최대 표시값 초기화
            if (id === '0') {
                //home
                reset();
            } else if (id === '1') {
                //popular
                setMoviesCopy(
                    nextMovies.sort((a, b) =>
                        a.popularity > b.popularity ? -1 : 1
                    )
                );
            } else if (id === '2') {
                //new
                setMoviesCopy(
                    nextMovies.sort((a, b) =>
                        new Date(a.release_date) > new Date(b.release_date)
                            ? -1
                            : 1
                    )
                );
            } else {
                const genreNo = parseInt(id);
                setMoviesCopy(
                    nextMovies.filter(movie =>
                        movie.genre_ids.includes(genreNo)
                    )
                );
            }
        },
        [moviesCopy]
    );

    const reset = () => {
        setMoviesCopy(movies.concat());
    };

    // header 컨텐츠 클릭에 따른 id value setting
    const nameChange = number => {
        setNumber(number);
    };
    return (
        <MainPageBlock>
            <Header
                nameChange={nameChange}
                filterFlags={filterFlags}
                setFilterFlags={setFilterFlags}
                filter={filter}
                movies={movies}
                moviesCopy={moviesCopy}
                setMoviesCopy={setMoviesCopy}
                reset={reset}
            />
            {/* Main Image */}
            {/* image는 url을 갖고있음 */}
            {mainMovieImage && (
                <MainImage
                    image={`${IMAGE_URL}w1280${mainMovieImage.backdrop_path}`}
                    title={mainMovieImage.original_title}
                    overview={mainMovieImage.overview}
                />
            )}
            {/* <MovieCardBlock> */}
            <MovieCardBlock>
                <h2 className="text">{`${name[number]}영화`}</h2>
                {/* Movie Grid Cards */}
                <MovieCardBody ref={containerRef}>
                    {/* <MovieCardBody> */}
                    {moviesCopy &&
                        moviesCopy.map((movie, index) =>
                            index < page ? (
                                <div key={index}>
                                    <GridCards
                                        posterPath={
                                            movie.poster_path
                                                ? `${IMAGE_URL}w500${movie.poster_path}`
                                                : null
                                        }
                                        movie={movie}
                                        modalPosterPath={
                                            movie.poster_path
                                                ? `${IMAGE_URL}original${movie.poster_path}`
                                                : null
                                        }
                                    />
                                </div>
                            ) : (
                                ''
                            )
                        )}
                </MovieCardBody>
            </MovieCardBlock>
            {page < 200 ? (
                <ButtonBlock>
                    <Button onClick={onClick}>더보기</Button>
                </ButtonBlock>
            ) : (
                ''
            )}
            <TopButton containerRef={containerRef}></TopButton>
        </MainPageBlock>
    );
}

export default MainPage;
