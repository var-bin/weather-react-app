import React, { useState, useEffect, useCallback, /* useReducer */ } from 'react';
import { useGetAxios } from './useGetAxios';
import { createApi } from 'unsplash-js';
// import { reducer } from './reducer';
import City from './City';

const url = 'http://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=r0f1L4gMsX9SDBDfkv3b8tlkPCBILlvL&language=en';
const unsplash = createApi({ accessKey: 'UFb-0W1ebRAVU6jawg9txBoQf633c4t8tA7TRvpDb88' });

export const getUnsplashPhotos = () => {
    const [dataPhotos, setDataPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const data = useGetAxios(url);
    let dataWeather = [];
    let photoPromises = [];

    // check for uploaded datas from weather API
    if (data?.cities && !data.loading) {
        dataWeather = data.cities.slice(0, 1);
        photoPromises = dataWeather.map(city => {
            return unsplash.photos.getRandom({
                query: city.EnglishName,
                count: 1,
                orientation: 'landscape',
            }).catch(error => {
                return Promise.reject('Unsplash Error: ', error);
            });
        });
    }

    const getAllPhotos = useCallback(() => {
        setLoading(true);

        Promise.all(photoPromises).then(values => {
            if (values?.length) {
                // values = [valueOfPromise1, valueOfPromise2, ...]
                console.log('values', values);
                setDataPhotos(values.map((item) => item.response[0]));
                setLoading(false);
            }
        }).catch(error => {
            // rejectReason of any first rejected promise
            console.log('error occurred: ', error);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        getAllPhotos();

    }, [getAllPhotos]);


    return { dataPhotos, data: dataWeather, loading: loading};
};


const Home = () => {
    const { dataPhotos, data, loading } = getUnsplashPhotos();
    console.log('dataPhotos', dataPhotos);
    console.log('data', data);
    console.log('loading', loading);
    console.log('--------------------------------');

   /*  const defaultState = {
        cities: myData,
        favorites: [],
    };
    const [state, dispatch] = useReducer(reducer, defaultState);
 */
   /*  useEffect(() => {
        // set {favorites} to local storage
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }, [state.favorites]); */


    if (loading || !dataPhotos.length) {
        return (
            <div className="container pt-4 pb-4">
                <div className="row row-cols-1 row-cols-lg-2 g-4">
                loading...
                </div>
            </div>
        );
    }

    return (
        <div className="container pt-4 pb-4">
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                {data.map((city, index) => {
                    return (
                        <City
                            {...city}
                            key={city.Key}

                            img={dataPhotos[index].urls.small}
                            city={city.LocalizedName}
                            country={city.Country.LocalizedName}
                            isFavorite={false}
                            weatherText={city.WeatherText}
                            weatherIcon={city.WeatherIcon}
                            weatherTemperatureUnit={city.Temperature.Metric.Unit}
                            weatherTemperatureValue={city.Temperature.Metric.Value}
                         /*     onIsFavorite={() =>
                                dispatch({
                                    type: 'ADD_FAVORITE_ITEM',
                                    id: city.id,
                                    img: city.img,
                                    city: city.city,
                                    country: city.country,
                                })
                            } */
                        ></City>
                    );
                })}
            </div>
        </div>
    );
};

export default React.memo(Home);
