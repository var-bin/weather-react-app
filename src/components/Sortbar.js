import React from 'react';

const Sortbar = () => {
    return (
        <div className="nav justify-content-center">
            <div className="nav-item d-inline-flex p-2 fw-bold">Sort by:</div>
            <div className="nav-item">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary fw-bold">City name</button>
                    <button type="button" className="btn btn-secondary fw-bold">Temperature</button>
                </div>
            </div>
        </div>
    );
};

export default Sortbar;