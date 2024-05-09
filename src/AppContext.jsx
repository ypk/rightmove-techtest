import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export const AppDataProvider = ({ children }) => {
    const [data, setData] = useState(null);

    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    );
};

AppDataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};