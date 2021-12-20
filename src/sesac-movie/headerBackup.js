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

  > li {
    /* padding은 계속 주석 */
    /* padding: 0px 25px; */
    /* display: inline-block;
    margin: 0px 50px;
    box-sizing: border-box;*/
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    color: rgb(230, 230, 230);
    float: left;
    width: 140px;
    position: relative;
  }

  > li > ul {
    width: 130px;
    display: none;
    position: absolute;
    font-size: 14px;
    /* background: rgb(21, 21, 21, 0.55); */
    background: #343a40;
  }

  > li:hover > ul {
    display: block;
  }

  > li > ul > li {
    list-style: none;
  }

  > li > ul > li:hover {
    background: #212529;
    /* background: rgb(21, 21, 21, 0.8); */
    transition: ease 0.5s;
  }
`;

function Header({
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
    nameChange(id);

    const newFilter = new Array(4);
    newFilter.fill(false);

    newFilter[id] = true;

    setFilterFlags(newFilter);
    filter(id);

    // 스크린의 가장 위로
    window.scrollTo(0, 0);
  };

  const genreClick = () => {
    // todo
  };

  return (
    // div
    <HeaderBlock>
      {/* ul */}
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
          <ul>
            <li id="4" onClick={genreClick}>
              액션
            </li>
            <li id="4" onClick={genreClick}>
              모험
            </li>
            <li id="4" onClick={genreClick}>
              애니메이션
            </li>
            <li id="4" onClick={genreClick}>
              코미디
            </li>
            <li id="4" onClick={genreClick}>
              범죄
            </li>
          </ul>
        </li>
      </NavBlock>
      <Search movies={movies} setMoviesCopy={setMoviesCopy} reset={reset} />
    </HeaderBlock>
  );
}

export default Header;
