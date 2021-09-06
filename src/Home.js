import React, { useState, useEffect /* useReducer */} from 'react';
import { useGetAxios } from './useGetAxios';
import { createApi } from 'unsplash-js';
//import { reducer } from './reducer';
import City from './City';
   
const url = 'http://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=r0f1L4gMsX9SDBDfkv3b8tlkPCBILlvL&language=en';
/* const cities = ["Dhaka", "Kinshasa", "Santiago", "Beijing", "Bogota", "Berlin", 
"Cairo", "Madrid", "London", "Athens", "Hong Kong", "Jakarta", "Baghdad", "Tokyo", 
"Seoul", "Mexico City", "Lima", "Moscow", "Riyadh", "Singapore", "Bangkok", "Hanoi", 
"Sydney", "Shanghai", "Delhi", "Bengaluru", "Mumbai", "Kolkata", "Karachi", "Istanbul", 
"Los Angeles", "New York", "Kabul", "Buenos Aires", "Havana", "Paris", "Tehran", "Manila", 
"Belgrade", "Dakar", "Taipei City", "Cape Town", "São Paulo", "Toronto", 
"Osaka-shi", "Jerusalem", "Amsterdam", "Stockholm", "Honolulu", "Reykjavik"]; */

export const getUnsplashPhotos = (cityName) => {
    const [photos, setPhotos] = useState([]);

    // getting a new list of cities depending on the url change
    useEffect(() => {
        (async () => {
            const unsplash = createApi({ accessKey: 'UFb-0W1ebRAVU6jawg9txBoQf633c4t8tA7TRvpDb88' });
            unsplash.photos.getRandom({ 
                query: cityName,
                count: 1
                }).then(result => {
                if (result.errors) {
                    console.log('error occurred: ', result.errors[0]);
                } else {
                    setPhotos(result.response);
                }
            });
        })();

    }, []);
        
    return {photos}
};


const Home = () => {
    const data = useGetAxios(url);

    //console.log('1', data.cities[0].LocalizedName);
    //const dataUnsplashPhotos = getUnsplashPhotos(data.cities[0].LocalizedName);
    //console.log('2', dataUnsplashPhotos);
    //console.log('2', dataUnsplashPhotos.photos[0].urls.regular);



    //console.log('data', data);
   // const arrWeatherCityName =  data.cities.map((city) => city.LocalizedName);
    //console.log(arrWeatherCityName);
    
/*     const arrCityPhotos = dataUnsplashPhotos.photos.map((item) => item.location.city);
    const arrImgPhotos = dataUnsplashPhotos.photos.map((item) => item.urls.regular);
    const arrResult = [];
    arrCityPhotos.forEach((key, i) => arrResult[key] = arrImgPhotos[i]);
    console.log('arrResult', arrResult);  */

    
    //const newData = (arr) => { 
       // cities.map((city) => {
            const dataUnsplashPhotos = getUnsplashPhotos('Paris');
            console.log(dataUnsplashPhotos);
            //city.image = dataUnsplashPhotos.photos.urls.regular;
       //});
    //};

    //console.log('arrPhotos', arrPhotos);
  
 /*    useEffect(() => {
        // set {favorites} to local storage 
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }, [state.favorites]); */

    

/*     const defaultState = {
        loading: data.loading,
        cities: data.cities,
        favorites: [],
    };
    const [state, dispatch] = useReducer(reducer, defaultState); */

    

    if (data.loading) return (
        <div className="container pt-4 pb-4">
            <div className="row row-cols-1 row-cols-lg-2 g-4">
            loading...
            </div>
        </div>
    );
    
    //console.log('newData', newData(data.cities));
    return (
        <div className="container pt-4 pb-4">
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                {data.cities.map((city) => {
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
                   /*          onIsFavorite={() =>  
                                dispatch({ 
                                    type: 'ADD_FAVORITE_ITEM', 
                                    id: city.id,
                                    img: city.img,
                                    city: city.city,
                                    country: city.country,
                            })} */
                        >
                        </City>
                    );      
                })}
            </div>
        </div>
    );
}; 

export default React.memo(Home);