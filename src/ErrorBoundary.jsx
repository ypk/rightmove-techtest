import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const errorHandler = (error) => {
            console.error('Error caught by ErrorBoundary:', error);
            setHasError(true);
        };

        window.addEventListener('error', errorHandler);

        return () => {
            window.removeEventListener('error', errorHandler);
        };
    }, []);

    if (hasError) {
        return <h1>Something went wrong.</h1>;
    }

    return children;
};

export default ErrorBoundary;


ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};