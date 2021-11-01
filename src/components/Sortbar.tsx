import React from 'react';
import { useDispatch } from "react-redux";
import { sortName, sortTemperature } from "../features/weatherSlice";

const Sortbar = () => {
    const dispatch = useDispatch();

    const sortNameCards = () => {
        dispatch(sortName());
    };

    const sortTemperatureCards = () => {
        dispatch(sortTemperature());
    };

    return (
        <div className="nav justify-content-center">
            <div className="nav-item d-inline-flex p-2 fw-bold">Sort by:</div>
            <div className="nav-item">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary fw-bold" onClick={sortNameCards}>
                        City name
                    </button>
                    <button type="button" className="btn btn-secondary fw-bold" onClick={sortTemperatureCards}>
                        Temperature
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sortbar;