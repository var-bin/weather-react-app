import React from 'react';
import { Link } from 'react-router-dom';

const Error: React.FC = () => {
    return (
        <div className="container pt-4 pb-4">
            <h1> Error page</h1>
            <Link to="/" className="btn btn-primary btn-lg">Back Home</Link>
        </div>
    );
};

export default Error;