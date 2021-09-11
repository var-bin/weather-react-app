import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext([{}]);

const weatherReducer = (state, action) => {
    if (action.type === 'LOADING') {
        return {
            ...state,
            isLoading: action.payload,
        };
    }
    if (action.type === 'CURRENT_CONDITIONS') {
        return {
            ...state,
            weather: action.payload,
        };
    }
    if (action.type === 'IMAGES') {
        return {
            ...state,
            images: action.payload,
        };
    }
    if (action.type === 'ADD_FAVORITE_ITEM') {
        const cityIsFavorite = state.weather.find((city) => city.Key === action.payload);
        cityIsFavorite.isFavorite = true;

        // creacte new {favorites}
        const newFavorites = state.favorites.concat({ 
            Key: action.payload,
            img: action.img,
            city: action.city,
            country: action.country,
            weatherText: action.weatherText,
            weatherIcon: action.weatherIcon,
            weatherTemperatureUnit: action.weatherTemperatureUnit,
            weatherTemperatureValue: action.weatherTemperatureValue,
            isFavorite: true,
            isShowDelete: true,
        });
        return {
            ...state,
            weather: state.weather,
            favorites: newFavorites,
        };
    }
    if (action.type === 'REMOVE_FAVORITE') {
        const cityNotFavorite = state.weather.find((city) => city.Key === action.payload);
        cityNotFavorite.isFavorite = false;

        const restFavorites = state.favorites.filter((city) => city.Key !== action.payload);
        return {
            ...state,
            weather: state.weather,
            favorites: restFavorites,
        };
    }
    throw new Error ('no matching action type');
};
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