import React from 'react';
// import  layout icon's
import { IconGrid, IconList } from '../icons/Icons';
import { useDispatch } from "react-redux";
import { toggleLayout } from "../features/switcherSlice";

import styled from 'styled-components';

const StyledFormSwitch = styled.div`
    padding-left: 0;

    .form-check-input {
        margin: 6px 5px;
        float: none;
    }

    svg {
        font-size: 1em;
    }
`;

const SwitchLayout = () => {
    const dispatch = useDispatch();

    const toggleLayoutIcon = () => {
        dispatch(toggleLayout());
    };

    return (
        <StyledFormSwitch className="form-check form-switch">
            <label htmlFor="switchLayout" onClick={toggleLayoutIcon}>
                <IconGrid/>
            </label>
            <input className="form-check-input" type="checkbox" id="switchLayout" />
            <label htmlFor="switchLayout" onClick={toggleLayoutIcon}>
                <IconList />
            </label>
        </StyledFormSwitch>
    );
};

export default SwitchLayout;