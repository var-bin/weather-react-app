export const weatherReducer = (state, action) => {
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
        const { payload, ...restPayload } = action;
        const newFavorites = state.favorites.concat({
            Key: payload,
            ...restPayload,
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