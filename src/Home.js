import React, { useContext } from 'react';
import { GlobalContext } from "./GlobalContext";
import City from './City';

const Home = () => {
    const { state, dispatch } = useContext(GlobalContext);

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
                    return (
                        <City
                            {...city}
                            key={city.Key}

                            img={state.images[index]}
                            city={city.LocalizedName}
                            country={city.Country.LocalizedName}
                            weatherText={city.WeatherText}
                            weatherIcon={city.WeatherIcon}
                            weatherTemperatureUnit={city.Temperature.Metric.Unit}
                            weatherTemperatureValue={city.Temperature.Metric.Value}
                            onIsFavorite={() =>  
                                dispatch({ 
                                    type: 'ADD_FAVORITE_ITEM', 
                                    payload: city.Key,
                                    img: state.images[index],
                                    city: city.LocalizedName,
                                    country: city.Country.LocalizedName,
                                    weatherText: city.WeatherText,
                                    weatherIcon: city.WeatherIcon,
                                    weatherTemperatureUnit: city.Temperature.Metric.Unit,
                                    weatherTemperatureValue: city.Temperature.Metric.Value,
                            })}
                      
                        ></City>
                    );
                })}  
            </div>
        </div>
    );
};

export default Home;