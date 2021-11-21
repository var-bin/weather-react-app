import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCityItem, writeCityName, fetchCityImage } from '../features/searchSlice';

// import  layout icon's
import { IconSearch } from '../icons/Icons';
// css
import { StyledSearchForm } from '../css/styled-containers';

const SearchCity: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleSearchCity = () => {
        history.push('/search');
        if (searchInput) {
            dispatch(fetchCityItem(searchInput));
            dispatch(writeCityName(searchInput));
            dispatch(fetchCityImage(searchInput));
        }
    };

    return (
        <StyledSearchForm action="#" onSubmit={handleSubmit}>
            <input
                className="form-control fw-bold"
                type="search"
                placeholder="Seach city"
                value={searchInput}
                onChange={(e) => {
                    setSearchInput(e.target.value);
                }}
            />
            <button type="submit" className="btn"  onClick={handleSearchCity}>
                <IconSearch />
            </button>
        </StyledSearchForm>
    );
};

export default SearchCity;