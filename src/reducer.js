export const reducer = (state, action) => {
    if (action.type === 'ADD_FAVORITE_ITEM') {
        // update props for {cities}
        const cityIsFavorite = state.cities.find((city) => city.id === action.id);
        cityIsFavorite.isFavorite = true;

        // creacte new {favorites}
        const newFavorites = state.favorites.concat({ 
            id: action.id,
            img: action.img,
            city: action.city,
            country: action.country,
            isFavorite: true,
            isShowDelete: true,
        });
        return {
            cities: state.cities,
            favorites: newFavorites,
        };
    }
    if (action.type === 'REMOVE_FAVORITE') {
        // remove items from {favorites}
        const restFavorites = state.favorites.filter((city) => city.id !== action.payload); 
        return {
            ...state,
            favorites: restFavorites,
        };
    }
    throw new Error ('no matching action type');
};