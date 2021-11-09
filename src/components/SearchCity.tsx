import React from "react";
// import  layout icon's
import { IconSearch } from "../icons/Icons";
// css
import { StyledSearchInput } from "../css/styled-containers";

const SearchCity: React.FC = () => {
    return (
        <StyledSearchInput>
            <input className="form-control fw-bold" list="datalistOptions" type="search" placeholder="Seach city" />
            <datalist id="datalistOptions">
                <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
            </datalist>
            <button className="btn"><IconSearch /></button>
        </StyledSearchInput>
    );
};

export default SearchCity;