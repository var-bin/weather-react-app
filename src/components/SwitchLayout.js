import React from 'react';
// import  layout icon's
import { IconGrid, IconList } from '../icons/Icons';

const SwitchLayout = () => {
    return (
        <div className="form-check form-switch">
            <span><IconList /></span>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><IconGrid /></label>
        </div>
    );
};

export default SwitchLayout;