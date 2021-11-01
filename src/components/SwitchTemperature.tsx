import React from 'react';
import { useDispatch } from "react-redux";
import { toggleTemperature } from "../features/switcherSlice";
// css
import { StyledFormSwitch } from "../css/styled-containers";

const SwitchTemperature: React.FC = () => {
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