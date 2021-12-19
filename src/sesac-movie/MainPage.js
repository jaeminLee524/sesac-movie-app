import React, { useCallback, useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_URL } from './api';
import MainImage from './MainImage';
import GridCards from './GridCards';
import styled from 'styled-components';
import Header from './Header';
import Modal from './Modal';

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
`;

const MovieCardBody = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    width: 90%;
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
    const [filterFlags, setFilterFlags] = useState([true, false, false, false]);
    // mainMovieImage : 0번째 인덱스의 배열
    const [mainMovieImage, setMainMovieImage] = useState(null);
    const [page, setPage] = useState(0);
    const [number, setNumber] = useState(0);
    const name = ['인기', '인기', '최신', '장르'];

    // 최초 브라우저 redering되었을 때 실행
    useEffect(() => {
        const response = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        movieCall(response);
    }, []);

    const movieCall = response => {
        fetch(response)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                // 메인Image가 초기에는 null
                setMainMovieImage(mainMovieImage || response.results[0]);
                // 기존 배열 얕은 복사 후 movies에 세팅
                setMovies([...movies, ...response.results]);
                // 페이지 셋팅
                setPage(response.page);
            });
    };
    useEffect(() => {
        setMoviesCopy(movies.concat());
        filterFlags.forEach((f, i) => {
            if (f) {
                filter(i);
            }
        });
    }, [movies]);

    const onClick = () => {
        // 페이지 1추가하여 api 쿼리 생성
        const response = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
            page + 1
        }`;

        // movieCall 호출
        movieCall(response);
    };

    const filter = useCallback(id => {
        const nextMovies = moviesCopy.concat();
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
            //new=
            setMoviesCopy(
                nextMovies.sort((a, b) =>
                    new Date(a.release_date) > new Date(b.release_date) ? -1 : 1
                )
            );
        } else if (id === '3') {
            //genre
        }
    });

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
                setNumber={setNumber}
                nameChange={nameChange}
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
            <MovieCardBlock>
                <h2 className="text">{`${name[number]}영화`}</h2>
                {/* Movie Grid Cards */}
                <MovieCardBody>
                    {moviesCopy &&
                        moviesCopy.map((movie, index) => (
                            <div key={index}>
                                <GridCards
                                    posterPath={
                                        movie.poster_path
                                            ? `${IMAGE_URL}w500${movie.poster_path}`
                                            : null
                                    }
                                    id={movie.id}
                                    originalTitle={movie.original_title}
                                    movie={movie}
                                    // overview={movie.overview}
                                    // releaseDate={movie.release_date}
                                    // voteAverage={movie.vote_average}
                                />
                            </div>
                        ))}
                </MovieCardBody>
            </MovieCardBlock>
            {/* TODO : 버튼 위치 조정 */}
            <ButtonBlock>
                <Button onClick={onClick}>더보기</Button>
            </ButtonBlock>
        </MainPageBlock>
    );
}

export default MainPage;
