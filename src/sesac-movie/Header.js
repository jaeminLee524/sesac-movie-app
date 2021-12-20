import React, { useEffect, useState, useRef } from 'react';
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
        line-height: 60px;
    }
`;

const DropDown = styled.li`
    display: relative;

    :hover {
        div {
            display: block;
        }
    }
`;

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    top: 55px;
    width: auto;
    /* border: 1px solid red; */
    background-color: #5c5c5c;
    ul {
        width: inherit;
        padding: 0;
    }
    li {
        display: block;
        width: inherit;
        margin: 0;
        padding: 0;
    }
    ul > li:hover {
        background: #212529;
        transition: ease 0.5s;
    }
`;

function Header({
    containerRef,
    nameChange,
    setFilterFlags,
    filter,
    movies,
    setMoviesCopy,
    reset,
}) {
    // GridCards 위치(위) 이동 함수
    const goUp = () => {
        containerRef.current.scrollTo(0, 0);
    };

    const handleClick = e => {
        const id = e.target.id;

        // text flag 역할
        nameChange(id);

        const newFilter = new Array(4);
        newFilter.fill(false);

        newFilter[id] = true;

        setFilterFlags(newFilter);
        filter(id);

        // 문구 변경을 위한 flag

        // 스크린의 가장 위로
        window.scrollTo(0, 0);

        // GridCards 위치 위로
        goUp();
    };

    const handleDropDownClick = e => {
        const id = e.target.id;
        filter(id);

        // 스크린의 가장 위로
        window.scrollTo(0, 0);

        // GridCards 위치 위로
        goUp();

        // text flag 역할
        switch (id) {
            case '28':
                nameChange(3);
                break;
            case '12':
                nameChange(4);
                break;
            case '16':
                nameChange(5);
                break;
            case '35':
                nameChange(6);
                break;
            case '80':
                nameChange(7);
                break;
            default:
                nameChange(id);
                break;
        }
    };

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
                <DropDown>
                    장르
                    <DropDownContent>
                        <ul>
                            <li id="28" onClick={handleDropDownClick}>
                                {/* Action */}
                                액션영화
                            </li>
                            <li id="12" onClick={handleDropDownClick}>
                                {/* Adventure */}
                                모험영화
                            </li>
                            <li id="16" onClick={handleDropDownClick}>
                                {/* Animation */}
                                애니메이션영화
                            </li>
                            <li id="35" onClick={handleDropDownClick}>
                                {/* Comedy */}
                                코미디영화
                            </li>
                            <li id="80" onClick={handleDropDownClick}>
                                {/* Crime */}
                                범죄영화
                            </li>
                        </ul>
                    </DropDownContent>
                </DropDown>
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
