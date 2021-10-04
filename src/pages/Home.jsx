import React from 'react';
import { useSelector } from "react-redux";
import ContentWrap from '../components/ContentWrap';
import CityWrapped from '../components/CityWrapped';

const Home = () => {
    const isLoading = useSelector(state => state.weather.isLoading);
    const data = useSelector(state => state.weather.data);
    const favorites = useSelector(state => state.favorites.favorites);

    if (isLoading) return (
        <ContentWrap>loading...</ContentWrap>
    );

    return (
        <ContentWrap>
            {data.map((city, index) => {
                const isFavorite = favorites.findIndex(favorite => favorite?.Key === city.Key) > -1;
                return (
                    <CityWrapped
                        city={city}
                        key={city.Key}
                        index={index}
                        isFavorite={isFavorite}
                    />
                );
            })}
     </ContentWrap>
    );
};

export default Home;
