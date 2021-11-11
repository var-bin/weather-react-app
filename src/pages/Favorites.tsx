import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFavoriteItem, useFavorites, Favorites as FavoritesCity } from '../features/favoritesSlice';
import ContentWrap from '../components/ContentWrap';
import City from '../components/City';

const Favorites: React.FC = () => {
    const favorites = useFavorites();
    const dispatch = useDispatch();

    return (
        <ContentWrap>
            {favorites.map((city: FavoritesCity) => {
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
