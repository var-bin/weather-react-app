import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import CityWrapped from '../CityWrapped';

const Home = () => {
    const { state } = useContext(GlobalContext);

    if (state.isLoading) return (
        <div className="container pt-4 pb-4">
            <div className="row row-cols-1 row-cols-lg-2 g-4">
            loading...
            </div>
        </div>
    );

    return (
        <div className="container pt-4 pb-4">
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                  {state.weather.map((city, index) => {
                    const isFavorite = state.favorites.findIndex(favorite => favorite?.Key === city.Key) > -1;

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
