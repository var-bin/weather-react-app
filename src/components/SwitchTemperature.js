import React from 'react';
import { useDispatch } from "react-redux";
import { toggleTemperature } from "../features/switcherSlice";

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

const SwitchTemperature = () => {
    const dispatch = useDispatch();

    const toggleTemperatureIcon = () => {
        dispatch(toggleTemperature());
    };
    return (
        <StyledFormSwitch className="form-check form-switch">
            <label htmlFor="switchTemperature" onClick={toggleTemperatureIcon}>°C</label>
            <input className="form-check-input" type="checkbox" id="switchTemperature" />
            <label htmlFor="switchTemperature" onClick={toggleTemperatureIcon}>°F</label>
        </StyledFormSwitch>
    );
};

export default SwitchTemperature;