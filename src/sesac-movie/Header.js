import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from '../Search';
const HeaderBlock = styled.div`
    z-index: 2;
    width: 100%;
    height: 60px;
    display: flex;
    position: fixed;
    justify-content: space-around;
    align-items: center;
    backdrop-filter: blur(0px);
    background-color: rgb(21, 21, 21, 0.55);
    border-bottom-color: rbg(35, 35, 35, 0.2);
    border: 1px solid black;
    box-sizing: border-box;
    color: rgb(250, 250, 250);
`;

const H2 = styled.h2`
    box-sizing: border-box;
    color: rgb(230, 230, 230);
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    padding: 0px 10xp;
    text-align: center;
`;

// 부모로부터 moveCall 함수를 받음
function Header({
    setNumber,
    nameChange,
    setFilterFlags,
    filter,
    movies,
    setMoviesCopy,
    reset,
}) {
    const handleClick = e => {
        const id = e.target.id;
        // 문구 변경을 위한 flag
        setNumber(id);
        nameChange(id);

        const newFilter = new Array(4);
        newFilter.fill(false);

        newFilter[id] = true;

        setFilterFlags(newFilter);
        filter(id);

        // 스크린의 가장 위로
        window.scrollTo(0, 0);
    };

    useEffect(() => {});
    return (
        <HeaderBlock>
            <H2>
                <a id="0" onClick={handleClick}>
                    홈
                </a>
            </H2>
            <H2>
                <a id="1" onClick={handleClick}>
                    인기
                </a>
            </H2>
            <H2>
                <a id="2" onClick={handleClick}>
                    최신
                </a>
            </H2>
            <H2>
                <a id="3">장르</a>
            </H2>
            <Search
                movies={movies}
                setMoviesCopy={setMoviesCopy}
                reset={reset}
            />
        </HeaderBlock>
    );
}

export default Header;
