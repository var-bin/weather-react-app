import React from 'react';
import { useSelector } from "react-redux";
import CityWrapped from '../CityWrapped';

const Home = () => {
    const isLoading = useSelector(state => state.weather.isLoading);
    const weather = useSelector(state => state.weather.weather);
    const favorites = useSelector(state => state.favorites.favorites);

    if (isLoading) return (
        <div className="container pt-4 pb-4">
            <div className="row row-cols-1 row-cols-lg-2 g-4">
            loading...
            </div>
        </div>
    );

    return (
        <div className="container pt-4 pb-4">
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                  {weather.map((city, index) => {
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

            </div>
        </div>
    );
};

export default Home;
