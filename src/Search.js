import React, { useState, useEffect } from 'react';
import './Search.css';

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
        <>
            <input
                className="searchBar"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="제목을 입력해주세요"
            />
        </>
    );
};

export default Search;
