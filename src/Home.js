import React, { useState, useEffect } from 'react';
import { useGetAxios } from './useGetAxios';
import { createApi } from 'unsplash-js';
import City from './City';

const url = 'http://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=r0f1L4gMsX9SDBDfkv3b8tlkPCBILlvL&language=en';
/* const cities = ["Dhaka", "Kinshasa", "Santiago", "Beijing", "Bogota", "Berlin",
"Cairo", "Madrid", "London", "Athens", "Hong Kong", "Jakarta", "Baghdad", "Tokyo",
"Seoul", "Mexico City", "Lima", "Moscow", "Riyadh", "Singapore", "Bangkok", "Hanoi",
"Sydney", "Shanghai", "Delhi", "Bengaluru", "Mumbai", "Kolkata", "Karachi", "Istanbul",
"Los Angeles", "New York", "Kabul", "Buenos Aires", "Havana", "Paris", "Tehran", "Manila",
"Belgrade", "Dakar", "Taipei City", "Cape Town", "São Paulo", "Toronto",
"Osaka-shi", "Jerusalem", "Amsterdam", "Stockholm", "Honolulu", "Reykjavik"]; */
const unsplash = createApi({ accessKey: 'UFb-0W1ebRAVU6jawg9txBoQf633c4t8tA7TRvpDb88' });

export const getUnsplashPhotos = () => {
    const [photos, setPhotos] = useState([]);
    const data = useGetAxios(url);
    let data1 = [];

    if (data?.cities && !data.loading) {
        data1 = data.cities.slice(0, 2);
    }

    /* const allPhotos = data.cities.map((city, cityIndex) => {
        if (cityIndex < 5) {
            return unsplash.photos.getRandom({
                query: city.EnglishName,
                count: 1
            }).then(result => {
                if (result?.response) {
                    setPhotos(result.response);
                }
            }).catch(error => console.log('error occurred: ', error));
        }
    }); */

    // Promise.all(allPhotos);

    // getting a new list of cities depending on the url change
    useEffect(() => {
        (async () => {
            // setPhotos(Promise.all(allPhotos)) instead of next
            unsplash.photos.getRandom({
                query: 'Paris',
                count: 1
            }).then(result => {
                if (result?.response) {
                    setPhotos(result.response);
                }
            }).catch(error => console.log('error occurred: ', error));
        })();

    }, []);

    return { photos, data: data1 };
};


const Home = () => {
    const { photos, data } = getUnsplashPhotos('Paris');

    if (photos?.length ) {
        console.log('data: ', data);
        console.log('photos:', photos);
    }

    if (data.loading) return (
        <div className="container pt-4 pb-4">
            <div className="row row-cols-1 row-cols-lg-2 g-4">
            loading...
            </div>
        </div>
    );

    return (
        <div className="container pt-4 pb-4">
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                {data.map((city) => {
                    return (
                        <City
                            {...city}
                            key={city.Key}

                            //img={urls.regular}
                            img="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max"

                            city={city.LocalizedName}
                            country={city.Country.LocalizedName}
                            isFavorite={false}
                            weatherText={city.WeatherText}
                            weatherIcon={city.WeatherIcon}
                            weatherTemperatureUnit={city.Temperature.Metric.Unit}
                            weatherTemperatureValue={city.Temperature.Metric.Value}
                        >
                        </City>
                    );
                })}
            </div>
        </div>
    );
};

export default React.memo(Home);
