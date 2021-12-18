import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const SearchBox = styled.div`
    padding: 10px;
    /* position: absolute; */
    /* left: 100%; */
    /* transform: translate(-100%, 0%); */
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid rgb(250, 250, 250);
    border-radius: 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`;

const SearchBlock = styled.input`
    background-color: rgba(0, 0, 0, 0);
    color: rgb(250, 250, 250);
    padding: 0px;
    width: 180px;
    border: none;
    outline: none;
    float: left;
    font-size: 1rem;
    line-height: 30px;
`;

const Search = ({ movies, setMoviesCopy, reset }) => {
    const [value, setValue] = useState('');
    const handleChange = e => {
        const text = e.target.value;
        setValue(text);
    };

    useEffect(() => {
        const queryText = value.toLowerCase().replaceAll(' ', '');
        if (queryText.trim() == '') {
            reset();
            return;
        }
        setMoviesCopy(
            movies
                .concat()
                .filter(movie =>
                    movie.title
                        .toLowerCase()
                        .replaceAll(' ', '')
                        .includes(queryText)
                )
        );
    }, [value]);
    return (
        <SearchBox>
            <SearchBlock
                className="searchBar"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="제목을 입력해주세요"
            />
        </SearchBox>
    );
};

export default Search;
