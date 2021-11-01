import React from 'react';
import ContentWrap from '../components/ContentWrap';
import CityWrapped from '../components/CityWrapped';
import { useIsLoading, useData } from "../features/weatherSlice";
import { useFavorites } from "../features/favoritesSlice";

const Home: React.FC = () => {
    const isLoading = useIsLoading();
    const data = useData();
    const favorites = useFavorites();

    if (isLoading) return (
        <ContentWrap>loading...</ContentWrap>
    );

    return (
        <ContentWrap>
            {data.map((city:any, index: number) => {
                const isFavorite = favorites.findIndex((favorite: any) => favorite?.Key === city.Key) > -1;
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