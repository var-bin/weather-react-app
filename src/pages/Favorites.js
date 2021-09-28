import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeFavoriteItem } from "../features/favoritesSlice";
import City from '../City';

const Favorites = () => {
    const favorites = useSelector(state => state.favorites.favorites);
    const dispatch = useDispatch();

    return (
        <div className="container pt-4 pb-4">
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                 {favorites.map((city) => {
                    return (
                        <City {...city} key={city.Key}
                         onDeleteFavorite={() => dispatch(removeFavoriteItem(city.Key))}>
                        </City>
                    );
                })}
            </div>
        </div>
    );
};

export default Favorites;