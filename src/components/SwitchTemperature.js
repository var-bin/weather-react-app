import React from 'react';

const SwitchTemperature = () => {
    return (
        <div className="form-check form-switch">
            <span>°C</span>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">°F</label>
        </div>
    );
};

export default SwitchTemperature;