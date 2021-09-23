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
            favorites: newFavorites,
        };
    }
    if (action.type === 'REMOVE_FAVORITE') {
        const restFavorites = state.favorites.filter((city) => city.Key !== action.payload);

        return {
            ...state,
            favorites: restFavorites,
        };
    }

    throw new Error ('no matching action type');
};
