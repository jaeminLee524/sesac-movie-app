import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from './Search';

const HeaderBlock = styled.div`
    margin: 0 auto;
    z-index: 2;
    width: 100%;
    height: 60px;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(0px);
    background-color: rgb(21, 21, 21, 0.55);
    border-bottom-color: rbg(35, 35, 35, 0.2);
    border: 1px solid black;
    box-sizing: border-box;
    color: rgb(250, 250, 250);
`;

const NavBlock = styled.ul`
    display: flex;
    list-style: none;

    li {
        display: inline-block;
        margin: 0px 50px;
        /* padding: 0px 25px; */
        box-sizing: border-box;
        color: rgb(230, 230, 230);
        cursor: pointer;
        font-size: 18px;
        font-weight: 500;
        text-align: center;
    }
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
            <NavBlock>
                <li id="0" onClick={handleClick}>
                    홈
                </li>
                <li id="1" onClick={handleClick}>
                    인기
                </li>
                <li id="2" onClick={handleClick}>
                    최신
                </li>
                <li id="3" onClick={handleClick}>
                    장르
                </li>
            </NavBlock>
            <Search
                movies={movies}
                setMoviesCopy={setMoviesCopy}
                reset={reset}
            />
        </HeaderBlock>
    );
}

export default Header;
