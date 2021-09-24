import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import City from '../City';

const Favorites = () => {
    const { state, dispatch } = useContext(GlobalContext);

    return (
        <div className="container pt-4 pb-4">
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                 {state.favorites.map((city) => {
                    return (
                        <City {...city} key={city.Key}
                        onDeleteFavorite={() => dispatch({ type: 'REMOVE_FAVORITE', payload: city.Key})}>
                        </City>
                    );
                })}
            </div>
        </div>
    );
};

export default Favorites;