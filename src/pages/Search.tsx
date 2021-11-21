import React from 'react';
import ContentWrap from '../components/ContentWrap';
import City from '../components/City';
import { useData, useIsLoading, useSearchCityName, useSearchCityImage } from '../features/searchSlice';

const Search: React.FC = () => {
    const data = useData();
    const isLoading = useIsLoading();
    const searchCityName = useSearchCityName();
    const searchCityImage = useSearchCityImage();

    if (isLoading == "loading") return (
        <ContentWrap>Loading...</ContentWrap>
    );

    return (
        <ContentWrap>
            {data.map((
                city: {
                    Key: number;
                    WeatherText: string;
                    WeatherIcon: number;
                    Country: string;
                    Temperature: {
                        Metric: { Unit: string; Value: number; };
                        Imperial: { Unit: string; Value: number; };
                    };
                }) => {
                return (
                    <City
                        key={city.Key}

                        isShowDelete={false}
                        img={ searchCityImage}
                        weatherIcon={city.WeatherIcon}
                        weatherText={city.WeatherText}
                        city={searchCityName}
                        country={''}
                        weatherTemperatureUnit={city.Temperature.Metric.Unit}
                        weatherTemperatureValue={city.Temperature.Metric.Value}
                        weatherTemperatureUnitF={city.Temperature.Imperial.Unit}
                        weatherTemperatureValueF={city.Temperature.Imperial.Value}
                        isFavorite={false}
                        onDeleteFavorite={function (): void {
                            throw new Error('Function not implemented.');
                        } }
                    />
                );
            })}
     </ContentWrap>


    );
};

export default Search;