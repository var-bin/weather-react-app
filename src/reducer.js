export const reducer = (state, action) => {
    if (action.type === 'ADD_FAVORITE_ITEM') {
        const addedFavorites = state.favorites.concat({ 
            id: action.id,
            img: action.img,
            city: action.city,
            country: action.country,
            isFavorite: true,
        });
        localStorage.setItem('favorites', JSON.stringify(addedFavorites));
        return {
            ...state,
            favorites: addedFavorites,
        };
    }
    if (action.type === 'REMOVE_FAVORITE') {
        const newFavorites = state.favorites.filter((city) => city.id !== action.payload); 
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        return {
            ...state,
            favorites: newFavorites,
        };
    }
    throw new Error ('no matching action type');
};