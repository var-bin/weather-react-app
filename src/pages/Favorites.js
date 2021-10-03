import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeFavoriteItem } from "../features/favoritesSlice";
import ContentWrap from '../components/ContentWrap';
import City from '../components/City';

const Favorites = () => {
    const favorites = useSelector(state => state.favorites.favorites);
    const dispatch = useDispatch();

    return (
        <ContentWrap>
            {favorites.map((city) => {
                return (
                    <City {...city} key={city.Key}
                        onDeleteFavorite={() => dispatch(removeFavoriteItem(city.Key))}>
                    </City>
                );
            })}
        </ContentWrap>
    );
};

export default Favorites;