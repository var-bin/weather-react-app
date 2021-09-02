import React, { useReducer} from 'react';
import City from './City';
import { reducer } from './reducer';

const Favorites = () => { 
    // retrieve the array from local storage and parse
    const arrayFavorites = JSON.parse(localStorage.getItem('favorites'));  

    const defaultState = {
        favorites: arrayFavorites,
    };
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <div className="container pt-4 pb-4">
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                {state.favorites.map((city) => {
                    return (
                        <City {...city} key={city.id} 
                        isFavorite={true}
                        onDeleteFavorite={() => dispatch({ type: 'REMOVE_FAVORITE', payload: city.id})}></City>
                    );      
                })}
            </div>
        </div>
    );
};

export default Favorites;