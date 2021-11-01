import React from 'react';
import { useDispatch } from "react-redux";
import { removeFavoriteItem, useFavorites } from "../features/favoritesSlice";
import ContentWrap from '../components/ContentWrap';
import City from '../components/City';

const Favorites = () => {
    const favorites = useFavorites();
    const dispatch = useDispatch();

    return (
        <ContentWrap>
            {favorites.map((city: any) => {
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