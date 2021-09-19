import React, { createContext, useReducer } from 'react';
import { weatherReducer } from './weatherReducer';

export const GlobalContext = createContext([{}]);

// use memo
const GlobalContextProvider = React.memo(({ children }) => {
    const [state, dispatch] = useReducer(weatherReducer, {
        isLoading: true,
        weather: null,
        images: null,
        favorites: [],
    });

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
});
export default GlobalContextProvider;